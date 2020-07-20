import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../components/10-atoms/text';
import '../../components/10-atoms/heading';
import styles from './index.scss';
import contact from '../utils/contact-banner';

// imagesource="https://drive.google.com/uc?export=view&id=1CZAbIBfCiH0aRhMoFtpOT4wXCLSxnY-1"

const story = storiesOf('Overview|Welcome', module);
story.addParameters({
  knobs: { disabled: true },
  changelog: { disabled: true },
  codepreview: { disabled: true },
  options: { showPanel: false },
});

story.add('Welcome', () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('landingpage-wrapper');

  const template = html`
    <style>
      ${styles}
    </style>
    <axa-container class="landingpage-content">
      <axa-heading rank="1">AXA’s Design System 🚀</axa-heading>
      <axa-text variant="size-1">
        Welcome to the Design System of AXA Switzerland. Our Pattern Library
        provides components and tools to help product teams work more
        efficiently, and to make AXA’s applications more cohesive.
      </axa-text>
      <axa-commercial-hero-banner variant="light">
        <header slot="title">
          <p>HAVE A PERFECT START</p>
          <h1>New to the AXA Design System?</h1>
        </header>
        <p slot="content">
          Check out our introduction guide on our guidelines, components and key
          concepts
        </p>
        <div
          class="landingpage-commerical-hero-banner-button-wrapper"
          slot="button"
        >
          <axa-button-link
            href="https://axa.ch"
            variant=""
            size="large"
            style="padding-right:25px;"
            >GET STARTED</axa-button-link
          >
          <axa-button-link
            href="https://axa.ch"
            variant="secondary"
            size="large"
            icon="upload"
            >GITHUB</axa-button-link
          >
        </div>
      </axa-commercial-hero-banner>
      <img
        class="landingpage-commercial-hero-banner-image"
        src="https://drive.google.com/uc?export=view&id=1CZAbIBfCiH0aRhMoFtpOT4wXCLSxnY-1"
      /><img />
      <axa-heading rank="2">Last releases</axa-heading>
      <img
        class="landingpage-last-releases-image"
        src="https://drive.google.com/uc?export=view&id=1OWMDEOPROgBm8t8E5FhxtrkDJomfpx8T"
      /><img />
    </axa-container>
    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
});
