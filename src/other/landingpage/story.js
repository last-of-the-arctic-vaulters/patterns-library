import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import Readme from '../../../README.md';
import '../../components/10-atoms/text';
import '../../components/10-atoms/heading';

const story = storiesOf('Overview|Welcome', module);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
  knobs: { disabled: true },
  changelog: { disabled: true },
  codepreview: { disabled: true },
});

story.add('to Pattern Library', () => {
  const wrapper = document.createElement('div');

  const template = html`
    <axa-container>
      <axa-heading rank="3">Welcome to the Pattern Library!</axa-heading>
      <axa-text variant="size-3">
        Welcome to the Design System of AXA Switzerland. Our Pattern Library
        provides components and tools to help product teams work more
        efficiently, and to make AXA’s applications more cohesive.
      </axa-text>
      <axa-heading rank="4">Last releases</axa-heading>
      <axa-heading rank="4">How to contribute</axa-heading>
      <axa-heading rank="4">Contact</axa-heading>
    </axa-container>
  `;

  render(template, wrapper);
  return wrapper;
});
