/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import Readme from '../../../../README.md';
import '../../../components/10-atoms/text';
import '../../../components/10-atoms/heading';
import commercialHeroBanner from './commercial-hero-banner';
import footer from './footer';
import policyFeatures from './policy-features';
import navbar from './navbar';
import footerSmall from './footer-small';

const story = storiesOf('Showcases', module);
story.addDecorator(withKnobs);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});

function getFirstChildOfEachAxaCustomElement() {
  return Array.prototype.slice
    .call(document.querySelectorAll('*'))
    .filter(el => el.tagName.toUpperCase().startsWith('AXA-'))
    .map(el =>
      el.shadowRoot ? el.shadowRoot.querySelector('*') : el.querySelector('*')
    );
}

function drawOrRemoveBorderAroundElements(shouldDrawBorder, elements) {
  if (shouldDrawBorder) {
    elements.forEach(el => {
      el.style.border = '5px red solid';
    });
  } else {
    elements.forEach(el => {
      el.style.border = 'none';
    });
  }
}

story.add('AXA Main Page', () => {
  const markWebcomponents = boolean('Highlight AXA Webcomponents', false);
  const wrapper = document.createElement('div');

  // Execution is guaranteed to happen after the render, by putting it at the
  // end of the event loop.
  setTimeout(() => {
    const allChildrenOfWebcomponents = getFirstChildOfEachAxaCustomElement();
    drawOrRemoveBorderAroundElements(
      markWebcomponents,
      allChildrenOfWebcomponents
    );
  });

  const resetBrowserDefaultStyles = html`
    <style>
      html,
      body {
        padding: 0;
        margin: 0;
      }

      ul {
        display: block;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin: 0;
        padding: 0;
      }
    </style>
  `;

  const style = html`
    <style>
      .pages-axa-main-page {
        font-family: Source Sans Pro, Arial, sans-serif;
      }
    </style>
  `;

  const template = html`
    ${resetBrowserDefaultStyles} ${style}

    <div class="pages-axa-main-page">
      ${navbar} ${commercialHeroBanner} ${policyFeatures} ${footer}
      ${footerSmall}
    </div>
  `;

  render(template, wrapper);
  return wrapper;
});
