const sectionSelector = _el => `.js--section-${_el.getAttribute('data-toggle')}`;

const disable = (element, parent) => {
  parent.querySelector(sectionSelector(element)).classList.remove('o-sg-section__section--visible');
};

const enable = (element, parent) => {
  parent.querySelector(sectionSelector(element)).classList.add('o-sg-section__section--visible');
};

const switchAtomicElemenetsTo = (elementGroupName = '', button, firstCall = false) => {
  const allCategories = document.querySelectorAll('[data-atomic-category]');
  Array.from(allCategories).forEach((element) => {
    element.classList.remove('o-sg-section--visible');
  });

  const dataSelector = elementGroupName ? `="${elementGroupName}"` : '';

  const filteredCategories = document.querySelectorAll(`[data-atomic-category${dataSelector}]`);
  Array.from(filteredCategories).forEach((element) => {
    element.classList.add('o-sg-section--visible');
  });

  if (!button) {
    return;
  }

  if (firstCall) {
    button.click();
  }
};

const syncHashWithAtomicChoice = (firstCall = false) => {
  const { hash } = window.location;
  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  if (hash.length) {
    const prefix = hash.substring(1, 2);
    switch (prefix) {
      case 'a':
        switchAtomicElemenetsTo('atom', document.querySelector('.js-atomic-switch-to-atom'), firstCall);
        break;
      case 'm':
        switchAtomicElemenetsTo('molecule', document.querySelector('.js-atomic-switch-to-molecule'), firstCall);
        break;
      case 'o':
        switchAtomicElemenetsTo('organism', document.querySelector('.js-atomic-switch-to-organism'), firstCall);
        break;
      default:
        break;
    }
    // quick hack for development. @TODO do it better
    setTimeout(() => {
      if (el) {
        el.scrollIntoView();
      }
    }, 150);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // all sections's buttons toggle
  const sections = document.querySelectorAll('.js--section');

  Array.from(sections).forEach((section) => {
    let lastEnabled = null;
    const toggleButtons = section.querySelectorAll('.js--toggle');
    const arr = Array.from(toggleButtons);
    [lastEnabled] = arr;
    arr.forEach((button) => {
      button.addEventListener('click', () => {
        disable(lastEnabled, section);
        enable(button, section);
        lastEnabled = button;
      });
    });
  });

  setTimeout(() => {
    syncHashWithAtomicChoice(true);
  }, 100);

  window.onhashchange = () => {
    syncHashWithAtomicChoice(false);
  };
});
