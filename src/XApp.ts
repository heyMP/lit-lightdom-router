import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import './views/x-view-home.js';
import './views/x-view-contact.js';

export class XApp extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  protected firstUpdated(): void {
    const router =
      // @ts-ignore
      new Router(this.renderRoot?.querySelector('#outlet')) ?? null;
    router.setRoutes([
      { path: '/', component: 'x-view-home' },
      { path: '/contact', component: 'x-view-contact' },
    ]);
  }

  render() {
    return html`
      <navigation>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </navigation>
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}
