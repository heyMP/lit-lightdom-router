import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { XApp } from '../src/XApp.js';
import '../src/x-app.js';

describe('XApp', () => {
  let element: XApp;
  beforeEach(async () => {
    element = await fixture(html`<x-app></x-app>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
