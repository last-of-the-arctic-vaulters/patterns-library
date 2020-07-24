import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../components/10-atoms/text';
import '../../components/10-atoms/heading';
import styles from './index.scss';
import contact from '../utils/contact-footer';

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
  wrapper.classList.add('accessory-story-wrapper');

  const template = html`
    <style>
      ${styles}
    </style>
    <div class="accessory-story-content">
      <axa-heading rank="1" variant="secondary"
        >AXA’s Design System 🚀</axa-heading
      >
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
            href="/?path=/story/guides-getting-started--getting-started"
            variant=""
            size="large"
            style="padding-right:25px;"
            >GET STARTED</axa-button-link
          >
          <axa-button-link
            href="https://github.com/axa-ch/patterns-library"
            variant="secondary"
            size="large"
            icon="upload"
            >GITHUB</axa-button-link
          >
        </div>
      </axa-commercial-hero-banner>
      <img
        class="landingpage-commercial-hero-banner-image"
        src="axa-design-illustration.png"
      /><img />
      <axa-heading rank="2" variant="secondary">Last releases</axa-heading>
      <img
        class="landingpage-last-releases-image"
        src="last-releases.png"
      /><img />
    </div>
    ${contact}
  `;

  render(template, wrapper);
  return wrapper;
});
