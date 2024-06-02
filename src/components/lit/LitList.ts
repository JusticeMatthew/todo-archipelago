import { LitElement, html } from 'lit';

export default class LitList extends LitElement {
  protected render() {
    return html`<div><p>Hello Lit!</p></div>`;
  }
  protected createRenderRoot() {
    return this;
  }
}
customElements.define('lit-list', LitList);
