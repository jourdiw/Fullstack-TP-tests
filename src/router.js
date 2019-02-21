import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Search from './views/Search.vue';

// const Search = () => import('./views/Search.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/search/:address?',
      name: 'search',
      component: Search,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
