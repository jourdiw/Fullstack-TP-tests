<template>
  <v-app>
    <v-toolbar app dark color="secondary" dense fixed :style="{'z-index': '1000'}">
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">
          {{$t('header.title')}}
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" class="nav-link" exact>
        <v-btn flat class="white--text">
          <v-icon>home</v-icon>&nbsp;
          {{$t('header.links.home')}}
        </v-btn>
      </router-link>
      <router-link to="/search" class="nav-link">
        <v-btn flat class="white--text">
          <v-icon>search</v-icon>&nbsp;
          {{$t('header.links.search')}}
        </v-btn>
      </router-link>
      <router-link to="/about" class="nav-link">
        <v-btn flat class="white--text">
          <v-icon>info</v-icon>&nbsp;
          {{$t('header.links.about')}}
        </v-btn>
      </router-link>
      <lang-menu></lang-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid pa-0>
        <router-view />
      </v-container>
    </v-content>
    <v-footer app fixed>
      <v-layout align-center>
        <v-flex class="text-xs-center">
          Tutoriel écrit par
          &nbsp;<a href="https://makina-corpus.com">Makina Corpus</a>&nbsp;
          pour la
          &nbsp;<a href="https://makina-corpus.com/formations/formation-vuejs">formation Vue.js</a>.
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import LangMenu from './components/LangMenu/LangMenu.vue';

export default {
  components: {
    'lang-menu': LangMenu,
  },
};
</script>


<style scoped>

a {
  text-decoration: unset;
}

.router-link-active {
  background-color: #bbbf12;
}

.nav-link {
  border-bottom: 2px solid transparent;
  box-sizing: border-box;
}
.nav-link:hover {
  border-bottom: 2px solid white;
}
</style>
