<template>
  <v-flex xs3>
  <v-card >
    <v-card-text> 
      <v-autocomplete
        :items="flights"
        item-text="origin"
        v-model="data"
        :readonly="!isEditing"
        :label="data"
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
  
  export default {
    props : {
      data: String
    },
    data () {
      return {
        isEditing: true,
        model: null,
        flights: [],
        user: '',
        count: null,
        sharedata: ''
      }
    },
    created() {

      //this.fetchFlights();
      //this.count = this.$store.state.count;
      //alert(this.sflights[0].origin)
      this.encontrarData();
      this.getOriginApi();
      
      // alert(this.originSearch[0].origin)
    },
    computed: {
      sflights() {
        return this.$store.state.flights;
      }
    },
    methods: {
      emitMethod() {
        this.$emit('dataSelect', this.data);
      },
      fetchFlights() {
        window.store.dispatch('fetchFlights');
      },
      encontrarData(){
        this.sharedata = this.store.state;
      } 
       ,getOriginApi: function() {
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