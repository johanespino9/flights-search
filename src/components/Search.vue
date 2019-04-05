<template>
    <v-content>
        <Autocomplete/>
        <Autocomplete/>
        <DatePicker/>
        <DatePicker/>
        <v-btn>Search</v-btn>
    </v-content>
</template>

<script>
import Autocomplete from './Autocomplete'
import DatePicker from './DatePicker'

export default {
    props: {
        dataFlights: Object
    },
    name:'Search',
    componentes:{
        Autocomplete,
        DatePicker
    },
    data (){
        return{

        }
    }
}
</script>

