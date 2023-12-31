/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from '@storybook/react-native';

import { loadStories, stories } from '../storybook/storyLoader';

global.STORIES = [
  {
    titlePrefix: '',
    directory: './.storybook/stories',
    files: '**/*.stories.?(ts|tsx|js|jsx)',
    importPathMatcher:
      '^\\.[\\\\/](?:\\.storybook\\/stories(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$',
  },
];

import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-actions/register';

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';

import { decorators, parameters } from './preview';

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require('react-native').LogBox.ignoreLogs([
      '`clearDecorators` is deprecated and will be removed in Storybook 7.0',
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch { }

const getStories = () => {
  return {

    './.storybook/stories/Button/Button.stories.tsx': require('./stories/Button/Button.stories.tsx'),
    './.storybook/stories/CustomButton/CustomButton.stories.tsx': require('./stories/CustomButton/CustomButton.stories.tsx'),
    './.storybook/stories/CustomInput/CustomInput.stories.tsx': require('./stories/CustomInput/CustomInput.stories.tsx'),
  };
};
// const getStories = () => {
//   // Use the stories array from the second file
//   const storyPaths = stories.map(storyPath => ({
//     [`${storyPath}.js`]: require(`${storyPath}.js`)
//   }));

//   return Object.assign({}, ...storyPaths);
// };

configure(getStories, module, false);
