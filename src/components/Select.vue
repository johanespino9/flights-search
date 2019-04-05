<template>
  <v-flex xs12 sm2 d-flex center>
    
      <v-card-text> 
                <v-select
                :items="classCategory"
                label="Category"
                ></v-select>
      </v-card-text>
   
            </v-flex>
      
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