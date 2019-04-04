<template>
    <v-container fluid grid-list-xl>
        <v-layout wrap align-center>
            <v-flex xs12 sm6 d-flex>
                <v-select
                :items="classCategory"
                label="Category"
                ></v-select>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    props:{
        category: String
    },
    data: () => ({
      classCategory: ['Premium Economy', 'Economy', 'First', 'Bussiness'],
      classLetter: ['A','F','I','R','J', 'K']
      
    })
  }
</script>