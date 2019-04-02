<template>
  <v-app>
    <!-- 
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>
    -->
    <v-content>
      <!-- <TableRolly/> -->
      <v-layout row wrap>
        <Autocomplete @dataSelect="dataAutocompleteOrigin" :data="2"/>
        <Autocomplete @dataSelect="dataAutocompleteDestiny" :data="dataOrigin"/>
        <DatePicker />
        <DatePicker/>
      </v-layout>
      
      <DataTable :origin="dataOrigin" :destiny="dataDestiny"/> 
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Autocomplete from './components/Autocomplete'
import DataTable from './components/DataTable'
import DatePicker from './components/DatePicker'

export default {
  name: 'App',
  components: {
    Autocomplete,
    DataTable,
    DatePicker
  },
  data () {
    return {
      dataOrigin: '',
      dataDestiny: ''
    }
  },
  methods: {
    dataAutocompleteOrigin: function (data) {
      this.dataOrigin = data
    },
    dataAutocompleteDestiny: function (data) {
      this.dataDestiny = data
    }
  }
}
</script>