import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import DropDown from './js/drop-down';
import fire from '../../js/fire';
import { AXA_EVENTS } from '../../js/ui-events';

class AXADropdown extends BaseComponentGlobal {
  static tagName = 'axa-dropdown'

  static get observedAttributes() { return ['in-flow', 'items', 'native', 'size', 'title', 'value']; }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    const { inFlow, size, gpu } = this;

    this.className = classnames(this.initialClassName, 'm-dropdown js-dropdown', {
      'm-dropdown--in-flow': inFlow,
      'm-dropdown--gpu': gpu,
      [`m-dropdown--${size}`]: size,
    });
  }

  didRenderCallback() {
    if (this.dropDown) {
      this.dropDown.destroy();
    }

    this.dropDown = new DropDown(this, {
      containerClass: null,
    });
  }

  disconnectedCallback() {
    if (this.dropDown) {
      this.dropDown.destroy();
      delete this.dropDown;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === 'value' && this.shouldUpdateCallback(newValue, oldValue) && newValue !== null && oldValue !== null) {
      fire(this, AXA_EVENTS.AXA_CHANGE, null, { bubbles: true, cancelable: true, composed: true });
    }
  }
}

defineOnce(AXADropdown.tagName, AXADropdown);

export default AXADropdown;
