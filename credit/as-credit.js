/*!
 * <as-credit> 1.0.0 - "Desenvolvido por Antonio Silva"
 * Developer credit for site footers. One file, no dependencies, styles isolated in a shadow root.
 * https://github.com/Antonio-B-Silva/brand/tree/main/credit
 */
(() => {
  if (typeof window === "undefined" || !("customElements" in window) || customElements.get("as-credit")) return;

  // Single place to change a contact: every site that loads this file picks it up.
  const CONTACTS = [
    {
      label: "WhatsApp",
      href: "https://wa.me/5583987308551?text=Ol%C3%A1%20tudo%20bem%3F%20gostaria%20de%20fazer%20um%20or%C3%A7amento.",
      icon: ["M2 8H22V17H9L4 22V17H2Z M6 10V12H18V10Z M6 13V15H14V13Z", "M2 4H22V7H2Z"],
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tony-silva/",
      icon: [
        "M12 2A4.8 4.8 0 1 1 12 11.6A4.8 4.8 0 1 1 12 2Z",
        "M12 13.6C17.2 13.6 21 17 21 20.8Q21 22 19.8 22H4.2Q3 22 3 20.8C3 17 6.8 13.6 12 13.6Z",
      ],
    },
    {
      label: "E-mail",
      href: "mailto:contato@antoniobsilva.com.br",
      icon: ["M2 4H22L12 13Z", "M2 7L12 16L22 7V20H2Z"],
    },
    {
      label: "Portfólio",
      href: "https://antoniobsilva.com.br/",
      icon: [
        "M12 2A10 10 0 1 1 12 22A10 10 0 1 1 12 2Z M12 4.7A7.3 7.3 0 1 0 12 19.3A7.3 7.3 0 1 0 12 4.7Z",
        "M10.6 4.7H13.4Q15.7 7.1 16.1 10.7H19.3V13.3H16.1Q15.7 16.9 13.4 19.3H10.6Q8.3 16.9 7.9 13.3H4.7V10.7H7.9Q8.3 7.1 10.6 4.7Z M12 7Q10.8 8.7 10.5 10.7H13.5Q13.2 8.7 12 7Z M10.5 13.3Q10.8 15.3 12 17Q13.2 15.3 13.5 13.3Z",
      ],
    },
  ];

  // AS monogram from assets/as-claro.svg. The A follows the text color of the host site; the S keeps the brand signal.
  const MONOGRAM =
    '<svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="222 225 646 553" aria-hidden="true">' +
    '<path fill="currentColor" d="M429 404 L638 772 H565 L429 537 L377 629 H304 Z M289 650 H451 L486 711 H332 L296 772 H222 Z"/>' +
    '<path fill="#C121D3" d="M541 225 L700 494 H626 L541 351 L515 396 L591 524 H718 L868 778 H666 L569 615 H640 L700 714 H752 L680 586 H551 L439 396 Z"/></svg>';

  const icon = ([primary, secondary]) =>
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">' +
    `<path fill-rule="evenodd" fill="currentColor" d="${primary}"/>` +
    `<path fill-rule="evenodd" fill="currentColor" opacity="0.6" d="${secondary}"/></svg>`;

  const STYLE = `
    :host { display: inline-block; position: relative; font: inherit; color: inherit; line-height: 1.2; }
    :host([hidden]) { display: none; }
    * { box-sizing: border-box; }
    button {
      all: unset; box-sizing: border-box; display: inline-flex; align-items: center; gap: 0.6em;
      min-height: 44px; padding: 4px 8px; border-radius: 4px; cursor: pointer;
      font: inherit; font-size: var(--as-credit-font-size, 0.875rem); color: inherit;
    }
    button:hover { background: color-mix(in srgb, currentColor 10%, transparent); }
    button:focus-visible, a:focus-visible { outline: 2px solid var(--as-credit-ring, #C121D3); outline-offset: 2px; }
    .logo { width: var(--as-credit-logo-width, 36px); height: auto; flex: none; }
    .caret { width: 0.9em; height: 0.9em; flex: none; opacity: 0.7; transition: transform 120ms; }
    :host([open]) .caret { transform: rotate(180deg); }
    .menu {
      position: absolute; z-index: 1000; bottom: calc(100% + 8px); min-width: 200px; margin: 0; padding: 4px;
      list-style: none; border-radius: 8px; text-align: left;
      background: #FFFFFF; color: #17121B; border: 1px solid #DDD0E0;
      box-shadow: 0 8px 24px rgb(23 18 27 / 0.18);
      font-family: "IBM Plex Sans", system-ui, sans-serif; font-size: 0.9375rem; font-weight: 500;
    }
    .menu[hidden] { display: none; }
    :host([data-surface="dark"]) .menu { background: #251C2B; color: #FFFCFF; border-color: #49374F; box-shadow: 0 8px 24px rgb(0 0 0 / 0.5); }
    :host([align="start"]) .menu { left: 0; }
    :host([align="center"]) .menu { left: 50%; transform: translateX(-50%); }
    :host(:not([align])) .menu, :host([align="end"]) .menu { right: 0; }
    :host([placement="bottom"]) .menu { bottom: auto; top: calc(100% + 8px); }
    a {
      display: flex; align-items: center; gap: 12px; min-height: 44px; padding: 0 12px; border-radius: 4px;
      color: inherit; text-decoration: none; white-space: nowrap;
    }
    a:hover, a:focus-visible { background: #F5EDF7; color: #8C169B; }
    :host([data-surface="dark"]) a:hover, :host([data-surface="dark"]) a:focus-visible { background: #46274F; color: #F2A2FC; }
    .icon { width: 20px; height: 20px; flex: none; }
    @media (prefers-reduced-motion: reduce) { .caret { transition: none; } }
  `;

  /** Relative luminance (0 = black, 1 = white) of a computed "rgb(...)" color. */
  function luminance(color) {
    const parts = (color.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
    if (parts.length < 3) return 0;
    const [r, g, b] = parts.map((v) => {
      const c = v / 255;
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  class AsCredit extends HTMLElement {
    static observedAttributes = ["label", "theme"];

    connectedCallback() {
      if (this.shadowRoot) return;
      const label = this.getAttribute("label") || "Desenvolvido por";
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML =
        `<style>${STYLE}</style>` +
        `<button type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="menu" aria-label="${label} Antonio Silva. Ver contatos">` +
        `<span class="label"></span>${MONOGRAM}` +
        '<svg class="caret" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 16L12 7L19 16Z"/></svg></button>' +
        '<ul class="menu" id="menu" role="menu" aria-label="Contatos de Antonio Silva" hidden>' +
        CONTACTS.map(
          (c) =>
            `<li role="none"><a role="menuitem" tabindex="-1" href="${c.href}"${
              c.href.startsWith("mailto:") ? "" : ' target="_blank" rel="noopener noreferrer"'
            }>${icon(c.icon)}<span>${c.label}</span></a></li>`,
        ).join("") +
        "</ul>";
      root.querySelector(".label").textContent = label;

      this.button = root.querySelector("button");
      this.menu = root.querySelector(".menu");
      this.items = [...root.querySelectorAll("a")];

      this.button.addEventListener("click", () => this.toggle());
      this.button.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          this.toggle(true, e.key === "ArrowUp" ? -1 : 0);
        }
      });
      this.menu.addEventListener("keydown", (e) => this.onMenuKey(e));
      this.menu.addEventListener("click", () => this.toggle(false));
      this.addEventListener("focusout", (e) => {
        if (!e.relatedTarget || !this.shadowRoot.contains(e.relatedTarget)) this.toggle(false);
      });
      this.onOutside = (e) => {
        if (!e.composedPath().includes(this)) this.toggle(false);
      };
    }

    disconnectedCallback() {
      document.removeEventListener("pointerdown", this.onOutside);
    }

    attributeChangedCallback(name, _old, value) {
      if (name === "label" && this.shadowRoot) {
        const label = value || "Desenvolvido por";
        this.shadowRoot.querySelector(".label").textContent = label;
        this.button.setAttribute("aria-label", `${label} Antonio Silva. Ver contatos`);
      }
    }

    /** The menu matches the host site: light text around the credit means a dark surface. `theme` overrides. */
    resolveSurface() {
      const theme = this.getAttribute("theme");
      if (theme === "light" || theme === "dark") return theme;
      return luminance(getComputedStyle(this).color) > 0.5 ? "dark" : "light";
    }

    toggle(open = this.menu.hidden, focusIndex) {
      if (open === !this.menu.hidden) return;
      if (open) this.dataset.surface = this.resolveSurface();
      this.menu.hidden = !open;
      this.toggleAttribute("open", open);
      this.button.setAttribute("aria-expanded", String(open));
      if (open) {
        document.addEventListener("pointerdown", this.onOutside);
        if (focusIndex !== undefined) this.items.at(focusIndex).focus();
      } else {
        document.removeEventListener("pointerdown", this.onOutside);
      }
    }

    onMenuKey(e) {
      const current = this.items.indexOf(this.shadowRoot.activeElement);
      const move = { ArrowDown: current + 1, ArrowUp: current - 1, Home: 0, End: -1 }[e.key];
      if (move !== undefined) {
        e.preventDefault();
        this.items.at(move % this.items.length).focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        this.toggle(false);
        this.button.focus();
      }
    }
  }

  customElements.define("as-credit", AsCredit);
})();
