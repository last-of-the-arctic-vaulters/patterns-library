const chalk = require('chalk');
const outdent = require('outdent');
const fs = require('fs');
const templateJson = require('./templates/template-package.json');

const getAMOType = (type) => {
  console.log(chalk.cyan(outdent`

    Ok good, you choose to create a new component of type ${chalk.bold(type)}.

    Now, tell me how your new component should be called

  `));
};

const prepareName = done => (userInput) => {
  const capitalizeFirstLetter = string => string
    .charAt(0)
    .toUpperCase() + string
    .slice(1);
  const camelCase = string => string
    .split(/[-_ ]+/)
    .map(capitalizeFirstLetter)
    .join('');
  const fileName = userInput.replace(/ /g, '-').toLowerCase();
  const className = `AXA${camelCase(fileName)}`;

  console.log(chalk.cyan(outdent`
    Ok good, we will setup all the files for your new component

    Class name: ${chalk.bold(className)}
    Folder name: ${chalk.bold(fileName)}
  `));

  done({
    className,
    fileName
  });
};

const createFiles = (store, a, m, o, done) => () => {
  const { type, fileName, className } = store;
  const folderMap = {
    [a]: '10-atoms',
    [m]: '20-molecules',
    [o]: '30-organisms',
  };

  const titleMap = {
    [a]: 'Atoms',
    [m]: 'Molecules',
    [o]: 'Organisms',
  };

  const BASE_FOLDER = `./src/components/${folderMap[type]}/${fileName}`;

  let compTitle = fileName.replace(/-/g, ' ');
  compTitle =compTitle.charAt(0).toUpperCase() + compTitle.slice(1);

  if (!fs.existsSync(BASE_FOLDER)) {
    fs.mkdirSync(`${BASE_FOLDER}`);
  }

  templateJson.name = `@axa-ch/${fileName}`;
  templateJson.version = '0.0.0-beta.0';
  templateJson.homepage = `https://github.com/axa-ch/patterns-library/tree/master/src/components/${folderMap[type]}/${fileName}#readme`;

  fs.writeFileSync(
    `${BASE_FOLDER}/package.json`,
    JSON.stringify(templateJson, null, 2),
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/README.md`,
    outdent`
    # ${compTitle}

    TODO Description
    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.scss`,
    outdent`
      .${type}-${fileName} {
        display: block;
      }
    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.react.js`,
    outdent`
    import withReact from '../../../utils/with-react';
    import ${className} from './index';

    export default createElement => ({
      /* props here, same as in the constructor of index.js */
      children,
    }) =>
      withReact(createElement)(
        ${className}.tagName,
        {
          /* props here, same as in the constructor of index.js */
        },
        children
      );

    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.react.d.ts`,
    outdent`
    import React from 'react';

    interface ${className}Props {
      /* Your type declarations for props go here, e.g.:
      languageItems: Item[];
      copyrightText: String;
      dynamic?: boolean;
      */ 
    }

    declare function create${className}(
      createElement: typeof React.createElement
    ): React.ComponentType<${className}Props>;

    export = ${className}Small;

    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/story.js`,
    outdent`
    /* global document */
    import { storiesOf } from '@storybook/html';
    import './index';
    import { withMarkdown } from '../../../../.storybook/addons/markdown';
    import Readme from './README.md';

    storiesOf('${titleMap[type]}/${compTitle}', module)
      .addDecorator(withMarkdown(Readme))
      .add('${compTitle} - default', () => '<axa-${fileName}>Some children</axa-${fileName}>')
    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/ui.test.js`,
    outdent`
    import { Selector } from 'testcafe';

    fixture('${compTitle} - basic functionality').page('http://localhost:9999/iframe.html?id=${titleMap[type].toLowerCase()}-${fileName}--${fileName}-default');

    const TAG = 'axa-${fileName}';
    const CLASS = '.${type}-${fileName}';

    test('should render ${fileName}', async t => {
      const $axaElem = await Selector(TAG);
      await t.expect($axaElem.exists).ok();
      const $axaElemShadow = await Selector(() => document.querySelector('axa-${fileName}').shadowRoot);
      const $axaElemShadowEl = await $axaElemShadow.find(CLASS);
      await t.expect($axaElemShadowEl.exists).ok();
    });
    `,
    'utf8',
  );

  fs.writeFileSync(
    `${BASE_FOLDER}/index.js`,
    outdent`
    import '@webcomponents/webcomponentsjs';
    import { LitElement, html, css, unsafeCSS } from 'lit-element';

    /* eslint-disable import/no-extraneous-dependencies */
    import defineOnce from '../../../utils/define-once';
    import styles from './index.scss';

    class ${className} extends LitElement {
      static get tagName() {
        return 'axa-${fileName}';
      }

      static get styles() {
        return css\`
          \${unsafeCSS(styles)}
        \`;
      }

      static get properties() {
        // Define properties and types
        return {
          onClick: { type: Function },
        };
      }

      constructor() {
        super();
        this.onClick = () => {};
      }

      firstUpdated() {
        // Add DOM changes here
        // This will be rendered when the component is connected to the DOM
      }

      render() {
        return html\`
          <article class="${type}-${fileName}">
            <slot></slot>
          </article>
        \`;
      }

      disconnectedCallback() {
        super.disconnectedCallback();

        // Cleanup and reset (i.e event listeners)
      }
    }

    defineOnce(${className}.tagName, ${className});

    export default ${className};
    `,
    'utf8',
  );

  done();
};


module.exports = {
  getAMOType,
  prepareName,
  createFiles,
};