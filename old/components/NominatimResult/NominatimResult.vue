<template>
  <v-data-table
    :headers="headers"
    :items="result"
    class="elevation-1 ma-2"
    :loading="loading"
  >
    <template slot="items" slot-scope="props">
      <tr @mouseover="$emit('over', props.item)" @mouseout="$emit('out', props.item)">
        <td>
          <img v-if="props.item.icon" :src="props.item.icon" />
          <span class='grey--text'>
            {{ props.item.class }}
          </span>
          <br/>
          {{ props.item.display_name }}
        </td>
        <td>
          <v-btn flat icon color="primary" @click="$emit('select', props.item)">
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'NominatimResult',
  props: ['result', 'loading'],
  data() {
    return {
      headers: [
        { text: 'Nom', align: 'left', value: 'display_name' },
      ],
    };
  },
};
</script>
