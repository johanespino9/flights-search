<template>
  <div>
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-card>
            <v-toolbar flat color="white">
              <v-toolbar-title>Listado</v-toolbar-title>
              <v-divider
                  class="mx-2"
                  inset
                  vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <v-btn color="primary" dark class="mb-2" :href="appBaseUrl+PAGES+'/new'">Nueva marca</v-btn>
            </v-toolbar>
            <v-data-table
                :headers="headers"
                :items="dataItems"
                class="elevation-1"
            >
              <template v-slot:items="props">
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.name_en }}</td>
                <td>
                  <v-img
                      :src="appUrl+'/storage/'+props.item.image"
                      :alt="props.item.name"
                      aspect-ratio="1"
                      max-width="150"
                      class="grey lighten-2"
                  ></v-img>
                </td>
                <td class="justify-center">
                  <v-btn flat icon :href="appBaseUrl+$data.PAGES+'/edit/'+props.item.id">
                    <v-icon
                      small
                      class="mr-2"
                    >
                      edit
                    </v-icon>
                  </v-btn>
                  <v-icon
                      small
                      @click="deleteItem(props.item)"
                  >
                    delete
                  </v-icon>
                </td>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="fetchData">Listar de nuevo</v-btn>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  const PAGE = 'brands'
  export default {
    name: PAGE+'List',
    data: () => ({
      headers: [
        {
          text: 'ID',
          align: 'left',
          sortable: true,
          value: 'id'
        },
        { text: 'Nombre', value: 'name' },
        { text: 'Nombre en inglés', value: 'name_en' },
        { text: 'Imagen', value: 'image' },
        { text: 'Acciones', value: 'name', sortable: false }
      ],
      dataItems: [],
      appUrl: window.appUrl,
      appBaseUrl: window.appBaseUrl,
      PAGES: PAGE
    }),
​
    computed: {
​
    },
​
    watch: {
​
    },
​
    created () {
      this.fetchData()
    },
​
    methods: {
      fetchData: function () {
        const baseURI = 'https://swapi.co/api/people'
        axios
          .get(baseURI)
          .then((result) => {
            this.dataItems = result.data.data
          })
          .catch(error => {
          })
          .finally(() => '')
      },
      editItem (item) {
        document.href = appBaseUrl+PAGE+'/edit/'+item.id
      },
      
      deleteItemApi(item){
        const baseURI = '/'+PAGE+'/'+item.id
        const that = this
        axios.delete(baseURI).then(function(){
          const index = that.dataItems.indexOf(item)
          that.dataItems.splice(index, 1)
        })
        .catch(function(){
        });
      }
    }
  }
</script>