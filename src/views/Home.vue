<template>
  <v-jumbotron color="grey lighten-2">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">
            {{$t('home.title')}}
          </h3>
          <span class="subheading">
            {{$t('home.subheading')}}
          </span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">
            Ce tutoriel est accessible à titre de démo.
            Il est utilisé dans la
            <a href='https://makina-corpus.com/formations/formation-vuejs'>
              formation Vue.js
            </a>
            de Makina Corpus.
          </div>
          <router-link :to='link' class="nav-link">
            <v-btn large color="primary" class="mx-0">
              Découvrir l'application finale
              <v-icon>chevron_right</v-icon>
            </v-btn>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
  data: () => ({
    link: '/search?{"road": "52 rue Jacques Babinet", "city": "Toulouse", "zipCode": "31000", "complement": "Makina Corpus"}',
  }),
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
