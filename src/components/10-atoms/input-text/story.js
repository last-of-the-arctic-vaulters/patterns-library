import { boolean, text, radios, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Changelog from './CHANGELOG.md';

export default {
  title: 'Components',
  decorators: [withKnobs],
  parameters: {
    changelog: Changelog,
  },
};

const typeOptions = {
  text: 'text',
  email: 'email',
  password: 'password',
};

export const InputText = () => {
  const label = text('label*', '');
  const name = text('name*', '');
  const refId = text('refid', '');
  const placeholder = text('placeholder', '');
  const value = text('value', '');
  const currency = text('currency', '');
  const error = text('error', '');
  const info = text('info', '');
  const checkMark = boolean('checkmark', false);
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const invalid = boolean('invalid', false);
  const types = radios('type', typeOptions, 'text');
  const maxLength = text('maxlength', '50');
  const counter = text('counter', 'Still ##counter## characters left');
  const counterMax = text('counterMax', 'Over character limit!');
  const pattern = text('pattern', '');
  const inputmode = text('inputmode', '');
  const autofocus = boolean('autofocus', false);

  const wrapper = document.createElement('div');
  const template = html`
    <axa-input-text
      refid="${refId}"
      name="${name}"
      label="${label}"
      placeholder="${placeholder}"
      counter="${counter}"
      countermax="${counterMax}"
      value="${value}"
      type="${types}"
      error="${error}"
      info="${info}"
      maxlength="${maxLength}"
      pattern="${pattern}"
      inputmode="${inputmode}"
      currency="${currency}"
      ?checkmark="${checkMark}"
      ?disabled="${disabled}"
      ?required="${required}"
      ?invalid="${invalid}"
      ?autofocus="${autofocus}"
    ></axa-input-text>
  `;

  render(template, wrapper);
  return wrapper;
};
