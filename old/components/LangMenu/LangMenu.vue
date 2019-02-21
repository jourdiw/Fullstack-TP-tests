<template>
  <div class="lang-menu">
    <a
      @click="setLang('fr_FR')"
      :class="{ current: isCurrent('fr_FR') }">
      <img src="../../assets/flag-fr.svg" alt="Français">
    </a>
    <a
      @click="setLang('en_GB')"
      :class="{ current: isCurrent('en_GB') }">
      <img src="../../assets/flag-en.svg" alt="Français">
    </a>
  </div>
</template>

<script>

export default {
  name: 'lang-menu',
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang;
      window.localStorage.language = lang;
    },
    isCurrent(lang) {
      return this.$i18n.locale === lang;
    },
  },
};
</script>

<style scoped>
.lang-menu {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}
a {
  align-items: center;
  opacity: .5;
  background-color: transparent;
  color: white;
  border: 0;
  outline: 0;
  cursor: pointer;
  width: 40px;
  transition: opacity .3s;
}
a img {
  max-height: 1.75em;
  border-radius: 100%;
}
a:hover {
  opacity: 1;
}
 a:active,
a:focus {
  opacity: .8;
}
a.current {
  opacity: 1;
}

</style>
