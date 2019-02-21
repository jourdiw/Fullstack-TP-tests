<template>
  <textarea v-model='result'></textarea>
</template>

<script>
export default {
  name: 'OverpassResult',
  props: ['result'],
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 10rem;
}
</style>
