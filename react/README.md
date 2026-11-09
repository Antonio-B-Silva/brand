# Antonio Silva Icons for React

## Connections

- Reads the [brand icon manifest](../icons.json) and [SVG source](../assets/icons/).
- Update when a glyph, a component name, or the props contract changes.

Build locally from this directory with `npm run build`. The build needs Python 3 and regenerates both ESM and TypeScript declarations from the SVGs. Run `npm pack` here to produce the local archive. Install it from a React 18 or 19 project with `npm install <absolute-path-to-brand/react/antonio-silva-icons-0.4.3.tgz>`.

```tsx
import { CheckIcon, UndoIcon } from "@antonio-silva/icons";

<button type="button" aria-label="Desfazer">
  <UndoIcon size={20} />
</button>
<CheckIcon size={24} color="#17121B" secondaryOpacity={0.6} aria-label="Concluído" />
```

Component names use PascalCase with the Icon suffix. Standard SVG props and refs pass through. Icons are decorative by default. Give the parent control an accessible name or pass aria-label to a standalone icon. Use primary, secondary and secondaryOpacity to customize the filled planes. Each shape defines its own weight.

The package is private and intended for local consumption. The build reads the SVG sources included in this repository.
