<template>
  <v-card class="ma-2">
    <v-card-title>
      <v-container fluid>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Road</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              label="Road"
              v-model="address.road"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Zip Code</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              label="Zip Code"
              v-model="address.zipCode"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>City</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              label="City"
              v-model="address.city"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Complement</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              label="Complement"
              v-model="address.complement"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Country</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              label="Country"
              v-model="address.country"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>State</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              label="State"
              v-model="address.state"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-btn color="primary" @click="$emit('close')">Close</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ['address'],
};
</script>
