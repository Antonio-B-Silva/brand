# Company icon system

## Connections

- Read by [Brand README](README.md).
- Reads the [manual](manual.html) and the [visual catalog](icons.html).
- Update on any geometry, category, or API change.

The catalog uses a 24 × 24 grid and a nominal 2 px inset. Each interface glyph uses filled angular planes, with the primary plane solid and the secondary plane at 60% opacity. Cutouts and negative space preserve the silhouette at small sizes. Derive directional pairs through reflection or rotation around (12, 12). Optical exceptions are allowed for diagonal corners and filled marks. Send, Layers, Cube and Chevrons Right retain the filled planes illustrated in the manual. Antonio Silva and Mailer retain their source proportions. See the [Lucide React guide](https://lucide.dev/guide/react) for the component API reference.

| Inline SVG property | Behavior |
|---|---|
| width and height | Default 24. Change both equally to maintain the aspect ratio. |
| color | Inherited through currentColor by unbranded filled variants. |
| --as-icon-primary | First fill in filled variants. |
| --as-icon-secondary | Second fill in filled variants. |
| --as-icon-secondary-opacity | Secondary plane opacity where the source has two tones. Default 0.6. |

Inline the SVG or import it as a component for CSS customization. With an img element, set width, height and alt on the img. Host-page color and custom properties do not cross into the external SVG. For meaningful inline icons remove aria-hidden and provide an accessible name, or name the containing control.

Weight is defined by the geometry of each filled plane. Alternate weights require alternate paths. Use brand color overrides only for approved brand variants. For React, expose size, color, primary, secondary, and secondaryOpacity and pass standard SVG props through. Keep stable names from [the manifest](icons.json).

## Optical review

Use the second plane to show direction, depth, or a supporting part of the symbol. Inspect both planes at equal opacity to verify the silhouette. Review at 16, 24, and 32 px on light and dark backgrounds. Compare paired meanings together, especially lock and unlock, undo and directional arrows, and expand and external link. Refer to the [research comparisons](research.md).

## Checkpoint

Use [the manifest](icons.json) to track each icon. Add a row before starting a new glyph. Move it from planned to drawn, then verified-structure after checking the SVG and file mapping, then approved after visual review. Record the date and material decisions in the internal workflow, and regenerate the catalog on inventory changes.
