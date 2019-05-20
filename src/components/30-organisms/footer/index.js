/* eslint-disable import/no-extraneous-dependencies */
import '@webcomponents/webcomponentsjs';
import {
  FacebookSvg,
  InstagramSvg,
  TwitterSvg,
  XingSvg,
  YoutubeSvg,
  LinkedinSvg,
  CaretSvg,
} from '@axa-ch/materials';
import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXAFooter extends LitElement {
  static get tagName() {
    return 'axa-footer';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      content: { type: Array },
      iconArea: { type: Object },
      dynamic: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.content = [];
    this.iconArea = {};
    this.dynamic = false;

    this.iconMap = new Map();
    this.iconMap.set('facebook', FacebookSvg);
    this.iconMap.set('instagram', InstagramSvg);
    this.iconMap.set('twitter', TwitterSvg);
    this.iconMap.set('xing', XingSvg);
    this.iconMap.set('youtube', YoutubeSvg);
    this.iconMap.set('linkedin', LinkedinSvg);
  }

  handleClick(e, index) {
    e.stopPropagation();
    const oldState = this.content[index].active;
    this.content = this.content.map(c => {
      c.active = false;
      return c;
    });

    this.content[index].active = !oldState;
  }

  render() {
    return html`
      <article class="o-footer">
        <div class="mobile">
          ${repeat(
            this.content,
            (contentItem, index) =>
              html`
                <div class="o-footer__accordion">
                  <button
                    class="o-footer__accordion-content"
                    @click="${ev => this.handleClick(ev, index)}"
                  >
                    <span>
                      ${contentItem.title}
                    </span>
                    <span
                      class="o-footer__accordion-content-caret o-footer__accordion-content-caret${contentItem.active
                        ? '--open'
                        : ''}"
                      >${svg([CaretSvg || ''])}</span
                    >
                  </button>
                  <ul
                    class="o-footer__accordion-content-panel o-footer__accordion-content-panel${contentItem.active
                      ? '--open'
                      : ''}"
                  >
                    ${repeat(
                      contentItem.items,
                      i =>
                        html`
                          <li>
                            <a href=${i.link}>${i.text}</a>
                          </li>
                        `
                    )}
                  </ul>
                </div>
              `
          )}
          <div>
            <ul class="o-footer__social-media-list">
              ${repeat(this.iconArea.icons, icon => {
                return html`
                  <li>
                    <a href="${icon.link}" target="_blank"
                      >${svg([this.iconMap.get(icon.title) || ''])}</a
                    >
                  </li>
                `;
              })}
            </ul>
          </div>
        </div>

        <div class="tablet">
          <div class="o-footer__collection">
            ${repeat(
              this.content,
              contentItem =>
                html`
                  <div class="o-footer__collection-container">
                    <strong>${contentItem.title}</strong>
                    <div class="o-footer__collection-container-list">
                      ${repeat(
                        contentItem.items,
                        i => html`
                          <div class="o-footer__collection-container-list-item">
                            <a href=${i.link}>${i.text}</a>
                          </div>
                        `
                      )}
                    </div>
                  </div>
                `
            )}
          </div>
          <div class="o-footer__social-media">
            <div>
              <strong class="o-footer__social-media-title"
                >Stay in touch</strong
              >
              <ul class="o-footer__social-media-list">
                ${repeat(this.iconArea.icons, icon => {
                  return html`
                    <li>
                      <a href="${icon.link}" target="_blank"
                        >${svg([this.iconMap.get(icon.title) || ''])}</a
                      >
                    </li>
                  `;
                })}
              </ul>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}

defineOnce(AXAFooter.tagName, AXAFooter);

export default AXAFooter;