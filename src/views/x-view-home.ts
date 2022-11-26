import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-view-home')
export class XHomeView extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  render() {
    return html` <h1>Homepage</h1> `;
  }
}
