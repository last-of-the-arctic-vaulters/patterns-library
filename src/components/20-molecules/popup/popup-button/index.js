import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
/* eslint-disable import/no-extraneous-dependencies */
import { InfoSvg, CancelSvg } from '@axa-ch/materials/icons';
import popupButtonCSS from './index.scss';

class AXAPopupButton extends LitElement {
  static get tagName() {
    return 'axa-popup-button';
  }

  static get styles() {
    return css`
      ${unsafeCSS(popupButtonCSS)}
    `;
  }

  static get properties() {
    return {
      open: { type: Boolean },
      name: { type: String, reflect: true },
      onClick: { type: Function },
    };
  }

  constructor() {
    super();
    this.open = false;
    this.onClick = () => {};
  }

  // inner padding cancel and info svg should be same
  render() {
    const { open } = this;

    return html`
      <button class="a-popup-button" @click="${this.onClick}">
        ${open ? svg([CancelSvg]) : svg([InfoSvg])}
      </button>
    `;
  }
}

export default AXAPopupButton;
