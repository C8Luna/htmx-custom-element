
class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<p>Htmx works with customElements</p>`;
    }

    connectedCallback() {
    }
}

window.customElements.define('daryl-custom-element', MyCustomElement);
