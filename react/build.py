"""Generate the React entry point from the brand manifest and SVG source files."""

import json
from pathlib import Path
from xml.etree import ElementTree

PACKAGE = Path(__file__).resolve().parent
BRAND = PACKAGE.parent
ATTRIBUTES = {"fill-rule": "fillRule", "clip-rule": "clipRule"}


def element_expression(element):
    tag = element.tag.split("}")[-1]
    if tag not in {"g", "path"}:
        raise ValueError(f"Unsupported SVG element: {tag}")
    props = {ATTRIBUTES.get(key, key): value for key, value in element.attrib.items()}
    children = "".join(", " + element_expression(child) for child in element)
    return f'h({json.dumps(tag)}, {json.dumps(props)}{children})'


def build():
    manifest = json.loads((BRAND / "icons.json").read_text(encoding="utf-8"))
    package = json.loads((PACKAGE / "package.json").read_text(encoding="utf-8-sig"))
    if manifest["version"] != package["version"]:
        raise ValueError("Manifest and package versions differ")
    code = ['import { createElement as h, forwardRef } from "react";', """
function icon(name, draw) {
  const Component = forwardRef(function Icon({
    size = 24, color, primary, secondary, secondaryOpacity, style, ...props
  }, ref) {
    const accessible = props["aria-label"] != null || props["aria-labelledby"] != null;
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      color,
      role: accessible ? "img" : undefined,
      "aria-hidden": accessible ? undefined : true,
      ...props,
      ref,
      style: {
        "--as-icon-primary": primary,
        "--as-icon-secondary": secondary,
        "--as-icon-secondary-opacity": secondaryOpacity,
        ...style,
      },
    }, ...draw());
  });
  Component.displayName = name;
  return Component;
}
"""]
    types = ['import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";', """
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "ref" | "children"> {
  size?: number | string;
  primary?: string;
  secondary?: string;
  secondaryOpacity?: number;
}
export type IconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
"""]
    names = set()
    for entry in manifest["icons"]:
        name = "".join(part.capitalize() for part in entry["id"].split("-")) + "Icon"
        if name in names or not name.isidentifier():
            raise ValueError(f"Invalid or duplicate component name: {name}")
        names.add(name)
        svg = ElementTree.parse(BRAND / entry["file"]).getroot()
        if svg.get("viewBox") != manifest["viewBox"]:
            raise ValueError(f"Unexpected SVG viewBox: {entry['file']}")
        children = ", ".join(map(element_expression, svg))
        code.append(f'export const {name} = /* @__PURE__ */ icon("{name}", () => [{children}]);')
        types.append(f"export const {name}: IconComponent;")

    target = PACKAGE / "dist"
    target.mkdir(exist_ok=True)
    (target / "index.js").write_text("\n".join(code) + "\n", encoding="utf-8")
    (target / "index.d.ts").write_text("\n".join(types) + "\n", encoding="utf-8")
    print(f"Generated {len(names)} React icons")


if __name__ == "__main__":
    build()
