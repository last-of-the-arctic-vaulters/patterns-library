import PropTypes from 'prop-types';

import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAErrorPage extends BaseComponentGlobal {
  static tagName = 'axa-error-page'
  static propTypes = {
    code: PropTypes.number,
    status: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    ctaHref: PropTypes.string,
    ctaTitle: PropTypes.string,
    background: PropTypes.oneOf(['pacific', 'teal']),
  }

  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  static get observedAttributes() {
    return ['code', 'status', 'title', 'message', 'items', 'cta-href', 'cta-title', 'background'];
  }

  constructor() {
    super({ styles, template });
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  willRenderCallback() {
    const { background } = this;

    this.className = classnames(this.initialClassName, 'o-error-page', {
      [`o-error-page--${background}`]: background,
    });
  }
}

defineOnce(AXAErrorPage.tagName, AXAErrorPage);

export default AXAErrorPage;
