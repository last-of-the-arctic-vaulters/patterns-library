import { boolean, text, select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Changelog from './CHANGELOG.md';
import createRefId from '../../../utils/create-ref-id';

export default {
  title: 'Components',
  decorators: [withKnobs],
  parameters: {
    changelog: Changelog,
  },
};

export const Checkbox = () => {
  const refId = text('refId', `checkbox-${createRefId()}`);
  const label = text('label', 'I agree to conditions of data protection.');
  const name = text('name', 'my-checkbox');
  const variant = select('variant', [
    'square',
    'checkmark',
    // 'inverted-square', // not officially supported yet
    'checkmark-inverted',
  ]);
  const checked = boolean('checked', true);
  const disabled = boolean('disabled', false);
  const errortext = boolean('error', false);
  const required = boolean('required', false);
  const styled = boolean('styled', false);

  const wrapper = document.createElement('div');
  const template = html`
    <div
      style="${variant && variant.includes('inverted')
        ? `background-color: #027180; padding: 10px;`
        : ''}"
    >
      <axa-checkbox
        refId="${refId}"
        class="hover"
        name="${name}"
        variant="${variant}"
        label="${label}"
        ?disabled="${disabled}"
        ?checked="${checked}"
        ?required="${required}"
        ?styled="${styled}"
        error="${errortext ? 'Please accept our terms and conditions.' : ''}"
      ></axa-checkbox>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
};

Checkbox.story = {
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};
