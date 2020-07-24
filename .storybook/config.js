import '@axa-ch/patterns-library-polyfill';
import { addParameters, configure, addDecorator } from '@storybook/html';
import { create } from '@storybook/theming';
import { addReadme } from 'storybook-readme/html';
import { withA11y } from '@storybook/addon-a11y';
import logo from '../src/static/svg/logo-axa.svg';
import { withHTML } from './addons/codepreview/decorators/html';

// Old demos were removed with the commit 508818e6452ff9201f2107487cded7f605cad841. If not used till Jan 2021 -> delete this comment

addParameters({
  readme: {
    codeTheme: 'github',
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'AXA Living Styleguide',
      brandUrl: 'https://github.com/axa-ch/patterns-library/tree/develop',
      brandImage: logo,
    }),
    showPanel: true,
  },
});

addDecorator(addReadme);
addDecorator(withHTML);
addDecorator(withA11y);

const landingpage = require.context('../src/other/pages/landingpage', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
const whatIsNew = require.context('../src/other/pages/what-is-new', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
const contact = require.context('../src/other/pages/contact', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
const guides = require.context('../src/other/pages/guides', true, /(story\.(js|jsx)|demo.(js|jsx))$/);
// N.B. don't-look-into-node-modules behaviour uses negative lookbehind (?<!) as part of its regular expression
// (https://v8.dev/blog/regexp-lookbehind-assertions), which is supported for node 9 and greater
const components = require.context('../src/components', true, /(?<!node_modules.*)(story|demo)\.(js|jsx)$/);
const showcases = require.context('../src/other/pages/showcases', true, /(story\.(js|jsx)|demo.(js|jsx))$/);

configure(() => {
  landingpage.keys().forEach(landingpage);
  whatIsNew.keys().forEach(whatIsNew);
  contact.keys().forEach(contact);
  guides.keys().forEach(guides);
  components.keys().forEach(components);
  showcases.keys().forEach(showcases);
}, module);
