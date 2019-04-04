<template>
  <v-data-table :headers="headers" :items="flights" class="elevation-1">
    <template v-slot:items="props">
      <td>{{ props.item.airline }}</td>
      <td >{{ props.item.flightType }}</td>
      <td >{{ props.item.classCategory }}</td>
      <td >{{ props.item.classLetter }}</td>
      <td >{{ props.item.iata }}</td>
    </template>
  </v-data-table>
</template>
<script>


  export default {
    props: {
      origin: String,
      destiny: String
    },
    data () {
      return {
        headers: [
          {
            text: 'Airline',
            sortable: false,
            value: 'airline'
          },
          { text: 'Flight Type', align: 'left', value: 'flightType' },
          { text: 'Class Category', align: 'left', value: 'classCategory' },
          { text: 'Class Letter', align: 'left', value: 'classLetter'},
          { text: 'IATA', align: 'left', value: 'iata'}

        ],
        flights: []
      }
    },
    computed: {
      //origin: store.state.message
    },
    mounted () {

    },
    created () {
      //this.headers.text = this.$store.state.count;
      //alert(this.countVariable)
      this.getDataTableApi()
      //console.log('origin created', this.origin)
    },
    updated() {
      //alert('origin', this.origin)
      //alert('destiny', this.destiny)
    },
    methods: {
      getDataTableApi: function() {
        // const baseURI = 'https://swapi.co/api/people/'
        const baseURI = '../dummies/loquesea.json'
        this.axios.get(baseURI)
        .then((result) => {
            this.flights = result.data
           //  alert(result.data)
            //console.log(result.data)
        })
        .catch(error => {
          alert(error)
        })
        .finally(() => '')
      }
    }

  }
</script>