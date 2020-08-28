import { storiesOf } from '@storybook/html';
import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoFooterSmall from './FooterSmall';
import Changelog from '../CHANGELOG.md';
import withNoBorder from '../../../../../.storybook/addons/no-border';
import DemoFooterSmallDynamicChildren from './footerSmallDynamicChildren';

storiesOf('Examples/Footer Small/React', module)
  .addDecorator(withNoBorder)
  .addDecorator(withKnobs)
  .addParameters({
    changelog: Changelog,
  })
  .add('Callbacks on language', () => {
    const language1 = text('First language', `DE`);
    const language2 = text('Second language', `FR`);
    const language3 = text('Third language', `IT`);
    const language4 = text('Fourth language', `EN`);
    const termsOfUse = text('Terms of use', `Terms of use`);
    const dataProtection = text('Data protection', `Data protection`);

    const div = document.createElement('div');
    div.id = 'footer-small';
    ReactDOM.render(
      <DemoFooterSmall
        language1={language1}
        language2={language2}
        language3={language3}
        language4={language4}
        termsOfUse={termsOfUse}
        dataProtection={dataProtection}
      />,
      div
    );
    return div;
  })
  .add('Dynamic change of children upon language change', () => {
    const div = document.createElement('div');
    div.id = 'footer-small-dynamic-children';
    ReactDOM.render(<DemoFooterSmallDynamicChildren />, div);
    return div;
  });
