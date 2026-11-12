# as-credit

## Connections

- Reads the AS monogram from [assets/as-claro.svg](../assets/as-claro.svg), the icon shapes from [assets/icons/](../assets/icons/) and the colors from [tokens/brand.css](../tokens/brand.css). They are inlined in the file, so update it when any of them changes.
- Read by every site that carries the developer credit in its footer.
- Update when a contact, the monogram or the menu behavior changes.

`<as-credit>` is the "Desenvolvido por Antonio Silva" credit for site footers: the label, the AS monogram and a menu with the contacts. It is a single JavaScript file with no dependencies. Styles live in a shadow root, so the host site's CSS and the credit do not affect each other.

## Usage

```html
<as-credit><a href="https://antoniobsilva.com.br/">Desenvolvido por Antonio Silva</a></as-credit>
<script src="https://cdn.jsdelivr.net/gh/Antonio-B-Silva/brand@1/credit/as-credit.js" defer></script>
```

The link inside the tag is the fallback: it is what shows if the script does not load, and what crawlers read. The script replaces it with the button and the menu.

The label and the monogram's A take the text color of the place where the tag sits. The menu turns dark when that text is light.

| Attribute | Values | Default |
| --- | --- | --- |
| `label` | text before the monogram | `Desenvolvido por` |
| `align` | `start`, `center`, `end`: side of the button the menu lines up with | `end` |
| `placement` | `top`, `bottom`: where the menu opens | `top` |
| `theme` | `light`, `dark`: forces the menu surface | follows the text color |

CSS custom properties on the tag: `--as-credit-font-size`, `--as-credit-logo-width` (keep it at 32px or more, the minimum in the manual) and `--as-credit-ring`.

## Versions

Sites load `@1`, which jsDelivr resolves to the newest `v1.x.y` tag. To publish a change, edit `as-credit.js`, bump the version in its header, commit and push a new tag such as `v1.0.1`. Sites pick it up without a deploy once the CDN cache expires, which can take up to a week for a version range; purge `https://purge.jsdelivr.net/gh/Antonio-B-Silva/brand@1/credit/as-credit.js` to speed it up.

A change that breaks the tag's contract goes out as `v2.0.0`, and each site moves to `@2` when ready.

A site with a Content-Security-Policy must allow `https://cdn.jsdelivr.net` in `script-src`.

Open [demo.html](demo.html) in a browser to see it on a light and a dark footer. Add `?open` to the address to start with the menus open.
