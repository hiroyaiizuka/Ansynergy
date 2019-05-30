import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import requireContext from 'require-context.macro';

function loadStories() {
  addDecorator(withInfo);
  require('./stories/index.js');
  // You can require as many stories as you need.
}

const req = requireContext('../src/Component', true, /.(story|stories).tsx$/);

configure(loadStories, module);
