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
        <Autocomplete @dataSelect="dataAutocompleteOrigin" data="" />
        <Autocomplete @dataSelect="dataAutocompleteDestiny" data="" />
        <DatePicker />
        <DatePicker/>
        <Select />
        <Select />
      </v-layout>
      
      <DataTable :origin="dataOrigin" :destiny="dataDestiny"/> 
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import store from './store'
import Autocomplete from './components/Autocomplete'
import DataTable from './components/DataTable'
import DatePicker from './components/DatePicker'
import Select from './components/Select'

export default {
  name: 'App',
  store,
  components: {
    Autocomplete,
    DataTable,
    DatePicker,
    Select
  },
  data () {
    return {
      dataOrigin: [],
      dataDestiny: []
    }
  },
  created (){
    
    this.dataOrigin.push(this.sflights[0].origin)
    this.dataOrigin.push(this.sflights[1].origin)
    this.dataOrigin.push(this.sflights[2].origin)
    this.dataOrigin.push(this.sflights[3].origin)
    
    this.dataDestiny.push(this.sflights[0].destination)
    this.dataDestiny.push(this.sflights[1].destination)
    this.dataDestiny.push(this.sflights[2].destination)
    this.dataDestiny.push(this.sflights[3].destination)
  },
  mounted (){
    alert(this.dataOrigin)
  },
  computed: {
    sflights() {
      return this.$store.state.flights;
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