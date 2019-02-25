/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue';
import '../../src/plugins/vuetify';
import { addDecorator } from '@storybook/vue/dist/client/preview';

addDecorator(() => (
  { template: '<v-app><story /></v-app>' }
));

const req = require.context('../../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
