# Brand and iconography research

## Connections

- Read by the [brand README](README.md) and [manual](manual.html).
- Informs the [icon drawing rules](icons.md), [catalog](icons.html).
- Update when a source materially changes a manual or icon decision.

Review date: 2026-11-09. Scope: Brazilian and international B2B software services, MVP product studios, and product design systems. This is a comparison of public examples, without a customer interview, usage survey, or market share estimate.

## Original inputs and later benchmarks

| Input | What it informed |
|---|---|
| The owner's three AS images | Monogram geometry, recognizable silhouette, and existing visual identity. |
| Mailer mark supplied by the owner | Two angular planes, with the second plane at 60% opacity. The internal send, layers, cube, and advance examples apply that idea to interface glyphs. [Source SVG](https://github.com/Antonio-B-Silva/mailer/blob/feat/SPEC-001-mailer/assets/icon-mark.svg) |
| TrinketOS manual and Lens | A documentation model for foundations, tokens, and examples. [Lens repository](https://github.com/Tonybsilva-dev/design-trinketos) |
| Antonio-B-Silva organization | Product and project portfolio context. README conventions remain technical documentation conventions. [GitHub organization](https://github.com/orgs/Antonio-B-Silva/repositories) |
| Space Grotesk and IBM Plex Sans | The owner requested Space Grotesk. The first draft proposed IBM Plex Sans for longer text and UI. Its use was a design decision, before the comparisons recorded below. [Space Grotesk project](https://github.com/floriankarsten/space-grotesk) · [IBM Plex specimen](https://www.ibm.com/plex/) |

The initial manual was assembled from internal inputs and design judgment. The public references below were reviewed for this revision. Lucide was already named by the owner as a consistency reference for the icon work.

## Communication and positioning

| Market and source | Observed pattern | Application to Antonio Silva |
|---|---|---|
| Brazil, software engineering and delivery | CI&T describes the client's context, what it implemented, and its reported delivery result. [CI&T case study](https://ciandt.com/us/en-us/case-study/8x-faster-software-delivery-leading-brazilian-financial-institution) | Build cases around the problem, decision, delivery, and evidence. Use a metric only when the owner can support it with a baseline, period, and source. |
| International, product design and MVP studios | thoughtbot groups real projects and describes the work alongside its client outcomes. Its services distinguish product design, MVP, and development. [thoughtbot case studies](https://thoughtbot.com/case-studies) | Give each project card a plain-language task and a concrete artifact. Example: “Veja como o painel reúne os pedidos em uma fila.” Expand to constraints and lessons in the full case. |
| International, engineering consultancy and technical publishing | Thoughtworks separates technology recommendations into stages such as Adopt, Trial, and Assess. [Technology Radar](https://www.thoughtworks.com/radar) | Mark demos and experiments with precise status. Use “Disponível”, “Em validação”, and “Em estudo” as separate editorial labels when relevant to the reader. |

For prospective clients, lead with the work problem and the change they can observe. For product users, lead with the status and next action. For technical peers, state the trade-off and show the artifact or decision record. These are distinct uses of one voice. The proposed motto “Software para o trabalho real” can frame institutional copy. A page heading, task label, or support message should carry the information the reader needs at that moment.

## Icon system comparisons

| Source | What to carry forward | Boundary |
|---|---|---|
| Lucide design language | A 24-unit canvas, consistent gaps, and a common visual grammar. Use exact reflections and rotations for true directional counterparts. [Design language](https://lucide.dev/contribute/icons/design-principles) | Lucide uses round caps and strokes. The AS interface set draws its own angular filled geometry from Mailer. |
| Phosphor React | A practical package precedent for a named duotone variant, standard SVG props, selective imports, and SSR awareness. [Phosphor React](https://github.com/phosphor-icons/react) | A reference for consumption and packaging. The AS plane shapes and default opacity remain internal decisions. |
| IBM Carbon | A central SVG source, searchable metadata, aliases and explicit size handling. [Carbon icon guide](https://github.com/carbon-design-system/carbon/blob/main/docs/guides/icons.md) | AS keeps its 24-unit master and checks actual rendering at 16, 24, and 32 px. A smaller optical variant is an explicit asset decision if scaling alone fails. |
| W3C | Check contrast for the parts of a graphical object or control that users need to identify it. [Understanding Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) | Test the rendered secondary plane on the actual light and dark surfaces. A 60% opacity value alone is not evidence of sufficient contrast. |

The secondary plane needs a job. It can describe the direction of a movement, the rear face of a volume, or a supporting form. Review the silhouette at 16 px and check the meaning with both planes rendered at the same opacity. If two forms only make sense because of a color difference, redraw the cut or change the supporting shape. In Undo, the head and return bend should form one recognizable left-return gesture. A detached triangle and elbow can read as two unrelated signs.

## Alternatives and costs

| Direction | Relative effort | Trade-off |
|---|---|---|
| Retain current manual and correct isolated icons | Low | Gives an immediate repair. Leaves weak glyphs and undocumented visual choices elsewhere. |
| Use an existing complete family | Low to medium | Reduces drawing and maintenance. Moves the interface away from the owner-approved visual language. Review the package license and integration separately if this direction is selected. |
| Refine the existing AS catalog and document its rules | Medium to high | Preserves continuity with the monogram and approved examples. Requires evidence for meaning, weight, and legibility across sizes. This is the selected revision direction. |

The typography remains Space Grotesk for signature and display, with IBM Plex Sans for reading and interface text. Compare these roles in a real screen using headings, body text, diacritics, numbers, and state messages before changing font tokens. The IBM specimen establishes provenance. The source files and licenses are included locally with the manual.