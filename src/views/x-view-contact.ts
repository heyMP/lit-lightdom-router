import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-view-contact')
export class XViewContact extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  render() {
    return html` <h1>Contact Us</h1> `;
  }
}
