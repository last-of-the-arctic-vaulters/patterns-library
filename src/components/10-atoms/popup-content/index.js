import { LitElement, html, css, unsafeCSS } from 'lit-element';
// import { classMap } from 'lit-html/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXAPopupContent extends LitElement {
  static get tagName() {
    return 'axa-popup-content';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  // static get properties() {
  //   return {};
  // }

  // constructor() {
  //   super();
  //   this.name = '';
  // }

  // firstUpdated() {
  //   const { name } = this;
  //   if (name) {
  //     const $popupBtn = document.querySelector(
  //       `axa-popup-button[name="${name}"]`
  //     );
  //
  //     if ($popupBtn) {
  //       console.log($popupBtn);
  //       $popupBtn.addEventListener('click', () => {
  //         this.open = !this.open;
  //       } )
  //     }
  //   }
  // }

  render() {
    return html`
      <article class="a-popup-content">
        <slot></slot>
      </article>
    `;
  }
}

defineOnce(AXAPopupContent.tagName, AXAPopupContent);

export default AXAPopupContent;
