import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import '../../components/10-atoms/text';
import '../../components/10-atoms/heading';

const story = storiesOf('Overview|Welcome', module);
story.addParameters({
  knobs: { disabled: true },
  changelog: { disabled: true },
  codepreview: { disabled: true },
  options: { showPanel: false },
});

story.add('to Pattern Library', () => {
  const wrapper = document.createElement('div');

  const template = html`
    <axa-heading rank="3">Welcome to AXA’s Design System 🚀</axa-heading>
    <axa-text variant="size-3">
      Welcome to the Design System of AXA Switzerland. Our Pattern Library
      provides components and tools to help product teams work more efficiently,
      and to make AXA’s applications more cohesive.
    </axa-text>
    <axa-heading rank="4">Last releases</axa-heading>
    <axa-heading rank="4">How to contribute</axa-heading>
    <axa-text variant="size-3">
      Whether you are helping us to fix bugs, or you are more into creating
      components, we would love to have you as
      <axa-link
        href="https://github.com/axa-ch/patterns-library/blob/develop/CONTRIBUTION.md"
        >contributer</axa-link
      >
      of the AXA Pattern Library! Check out our Contributing Guide for ideas on
      contributing and setup steps for getting the repository up and running on
      your local machine.
    </axa-text>

    <axa-heading rank="4">Contact</axa-heading>
  `;

  render(template, wrapper);
  return wrapper;
});
