import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../components/10-atoms/text';
import '../../components/10-atoms/heading';

const story = storiesOf('Overview|Introduction', module);
story.addParameters({
  knobs: { disabled: true },
  changelog: { disabled: true },
  codepreview: { disabled: true },
  options: { showPanel: false },
});

story.add('Welcome', () => {
  const wrapper = document.createElement('div');

  const template = html`
  <axa-container>
    <axa-heading rank="1">AXA’s Design System 🚀</axa-heading>
    <axa-text variant="size-3">
      Welcome to the Design System of AXA Switzerland. Our Pattern Library
      provides components and tools to help product teams work more efficiently,
      and to make AXA’s applications more cohesive.
    </axa-text>
    <axa-commercial-hero-banner
      variant="light"
  
    >
      <header slot="title">
        <p>HAVE A PERFECT START</p>
        <h1>New to the AXA Design System?</h1>
      </header>
      <p slot="content">
        Check out our introduction guide on our guidelines, components and key
        concepts
      </p>
      <div slot="button" style="display:flex;">
        <axa-button-link href="https://axa.ch" variant="" size="large" style="padding-right:25px;"
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
    
    <axa-heading rank="2">Last releases</axa-heading>
    </axa-container>
    <section class="PageCallToAction">
      <div class="PageCallToAction-inner">
        <div>
          <p class="landingpage-questions-subtitle">Help & Contact</p>
          <axa-heading rank="4" variant="secondary">Any question?<axa-heading>
        </div>
        <axa-button-link href="/contact" variant="inverted"
          >Get in touch</axa-button-link
        >
      </div>
    </section>
    
    <style>
    
.landingpage-questions-subtitle {
    text-transform: uppercase;
    overflow-wrap: break-word;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
}

.PageCallToAction {
    padding: 20px 40px;
    background-color: #333;
    color: #fff;
    width: auto;
}
  
.PageCallToAction-inner {
    padding-left: 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}</style>
  `;

  render(template, wrapper);
  return wrapper;
});
story.add('Getting started', () => {});
story.add('Structure approach', () => {});
