<template>
  <v-card class="ma-2">
    <v-card-text>
      <h3>Address {{label}}</h3>
      <span v-if="address.complement">{{ address.complement }}<br/></span>
      {{ address.road }} {{ address.zipCode }} {{ address.city | uppercase }}<br/>
      <span v-if="address.country">{{ address.country }}</span>
      <span v-if="address.state">{{ address.state | uppercase }}</span>
      <br/>
      <v-btn color="primary" @click="$emit('select')">
        <v-icon>edit</v-icon>&nbsp;
        Edit
      </v-btn>
      <v-btn color="primary" @click="$emit('search')">
        <v-icon>search</v-icon>&nbsp;
        Search
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['address', 'label'],
};
</script>
