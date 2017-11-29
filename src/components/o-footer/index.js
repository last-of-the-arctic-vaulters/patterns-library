import { BaseComponentGlobal } from '../_abstract/component-types';

class Footer extends BaseComponentGlobal {
  connectedCallback() {
    super.connectedCallback();
    const type = this.getAttribute('type');

    this.className = `o-footer o-footer--${type}`;
  }
}

window.customElements.define('axa-footer', Footer);
