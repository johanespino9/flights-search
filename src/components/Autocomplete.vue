<template>
  <v-flex xs3>
  <v-card>
    <v-card-text > 
      <v-autocomplete
        :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
        :items="originSearch"
        item-text="name"
        item-value="id"
        v-model="data"
        :readonly="!isEditing"
        :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
        persistent-hint
        prepend-icon="mdi-city"
        @change="emitMethod"
      >
        <template v-slot:append-outer>
          <v-slide-x-reverse-transition
            mode="out-in"
          >

          </v-slide-x-reverse-transition>
        </template>
      </v-autocomplete>
    </v-card-text>
  </v-card>
  </v-flex>
</template>

<script>
  import { EventBus } from '../plugins/event-bus.js';

  export default {
    props : {
      data: String
    },
    data () {
      return {
        isEditing: true,
        model: null,
        originSearch: [ 
          {
            'id': 1,
            'name': 'LIM'
          },
          {
            'id': 2,
            'name': 'MAD'
          },
          {
            'id': 3,
            'name': 'AEP'
          },
          {
            'id': 4,
            'name': 'EZE'
          }
        ]
      }
    },
    methods: {
      emitMethod () {
        this.$emit('dataSelect', this.data);
      }
  }
  }
</script>