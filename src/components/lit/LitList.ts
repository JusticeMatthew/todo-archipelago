import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lit-list')
export default class LitList extends LitElement {
  protected render() {
    return html`<div><p>Hello Lit!</p></div>`;
  }
  protected createRenderRoot() {
    return this;
  }
}
