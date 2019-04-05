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
      <v-container>
      <!-- <TableRolly/> -->
      <v-layout row wrap>
        <Search/>
        <Select />
        <Select />
        <Select />
        <Select />
      </v-layout>
      
      <DataTable :origin="dataOrigin" :destiny="dataDestiny"/> 
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import store from './store'
import DataTable from './components/DataTable'
import Select from './components/Select'
import Search from './components/Search'

export default {
  name: 'App',
  store,
  components: {
    DataTable,
    Select,
    Search  
  },
  data () {
    return {
      dataOrigin: [],
      dataDestiny: [],
      flights: []
    }
  },
  created (){
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
    },
    getOriginApi: function() {
        // const baseURI = 'https://swapi.co/api/people/'
        const baseURI = '../dummies/loquesea.json'
        this.axios.get(baseURI)
        .then((result) => {
          
            this.flights = result.data
            //console.log(result.data)
            //alert(result.data)
        })
        .catch(error => {
          alert(error)
        })
        .finally(() => '')
      }
  }
}
</script>