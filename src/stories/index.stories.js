/* eslint-disable import/no-extraneous-dependencies */
// import Vue from 'vue';
// import Vuetify from 'vuetify';
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from '../components/MyButton.vue';
import MyAddress from '../components/Address/Address.vue';

// Vue.use(Vuetify);

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('Button', 'with some emoji') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

storiesOf('Address', module)
  .add('with text', () => ({
    components: { MyAddress },
    template: `<my-address
      :address="{
        complement: '1',
        road: 'road',
        zipCode: '90015',
        city: 'city',
        state: 'state',
      }" label="My Label"></my-address>`,
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyAddress },
    props: {
      address: {
        complement: '1',
        road: 'road',
        zipCode: '90015',
        city: 'city',
        state: 'state',
      },
      label: 'My Label',
    },
    render() {
      // const { address, label } = this.data;
      return <my-address address="{
        complement: '1',
        road: 'road',
        zipCode: '90015',
        city: 'city',
        state: 'state',
      }"/>;
    },
    methods: { action: linkTo('Button', 'with some emoji') },
  }))
  .add('with some emoji', () => ({
    components: { MyAddress },
    template: '<address>Hello address</address>',
    methods: { action: action('clicked') },
  }));
