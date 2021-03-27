<template>
    <div>
        <v-toolbar class="orange">
          <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
          <h3 class="white--text" @click.prevent="$router.push('/')">CovidUS</h3>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn v-if="lang == 'Français'" flat class="yellow lighten-3" href="/donate">Don</v-btn>
            <v-btn v-if="lang == 'English'" flat class="yellow lighten-3" href="/donate">Donate</v-btn>
            <v-btn v-if="lang == 'Español'" flat class="yellow lighten-3" href="/donate">Dar</v-btn>
            <v-btn v-if="lang == 'русский'" flat class="yellow lighten-3" href="/donate">Дайте</v-btn>
            <v-btn v-if="lang == 'Français'" flat class="orange lighten-3" href="/receive">Recevoir</v-btn>
            <v-btn v-if="lang == 'English'" flat class="orange lighten-3" href="/receive">Receive</v-btn>
            <v-btn v-if="lang == 'Español'" flat class="orange lighten-3" href="/receive">Recibir</v-btn>
            <v-btn v-if="lang == 'русский'" flat class="orange lighten-3" href="/receive">Получить</v-btn>
          </v-toolbar-items>
        </v-toolbar>

    <v-container fluid>
    <v-data-table v-if="lang == 'English'" :headers="headersEN" :items="data" item-key="location" show-expand class="elevation-1" :search="search" :page.sync="page" :items-per-page="itemsPerPage" hide-default-footer @page-count="pageCount = $event">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Current offers</v-toolbar-title>
          <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          Contact : {{ item.contact }}
        </td>
      </template>
    </v-data-table>
    <v-data-table v-if="lang == 'Français'" :headers="headersFR" :items="data" item-key="location" show-expand class="elevation-1" :search="search" :page.sync="page" :items-per-page="itemsPerPage" hide-default-footer @page-count="pageCount = $event">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Donations actives</v-toolbar-title>
          <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Rechercher"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          Contacter : {{ item.contact }}
        </td>
      </template>
    </v-data-table>
    <v-data-table v-if="lang == 'Español'" :headers="headersES" :items="data" item-key="location" show-expand class="elevation-1" :search="search" :page.sync="page" :items-per-page="itemsPerPage" hide-default-footer @page-count="pageCount = $event">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Donaciones activas</v-toolbar-title>
          <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Buscar"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          Contacto : {{ item.contact }}
        </td>
      </template>
    </v-data-table>
    <v-data-table v-if="lang == 'русский'" :headers="headersRU" :items="data" item-key="location" show-expand class="elevation-1" :search="search" :page.sync="page" :items-per-page="itemsPerPage" hide-default-footer @page-count="pageCount = $event">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Активные пожертвования</v-toolbar-title>
          <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="поиск"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          контакт : {{ item.contact }}
        </td>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
    </v-container>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Receive',
    data() {
        return {
            lang: '',
            search: '',
            pageCount: '',
            page: '',
            itemsPerPage: 10,
            data: [],
            headersEN: [
              {
                text: 'Location',
                align: 'start',
                sortable: true,
                value: 'location',
              },
              { text: 'Type', value: 'type' },
              { text: 'Quantity', value: 'quantity' },
              { text: 'Posted on', value: 'posted' },
              { text: '', value: 'data-table-expand' },
            ],
            headersFR: [
              {
                text: 'Location',
                align: 'start',
                sortable: true,
                value: 'location',
              },
              { text: 'Type', value: 'type' },
              { text: 'Quantité', value: 'quantity' },
              { text: 'Posté le', value: 'posted' },
              { text: '', value: 'data-table-expand' },
            ],
            headersRU: [
              {
                text: 'Место расположения',
                align: 'start',
                sortable: true,
                value: 'location',
              },
              { text: 'Тип', value: 'type' },
              { text: 'Количество', value: 'quantity' },
              { text: 'опубликовано', value: 'posted' },
              { text: '', value: 'data-table-expand' },
            ],
            headersES: [
              {
                text: 'Localización',
                align: 'start',
                sortable: true,
                value: 'location',
              },
              { text: 'Escribe', value: 'type' },
              { text: 'Cantidad', value: 'quantity' },
              { text: 'Publicado en', value: 'posted' },
              { text: '', value: 'data-table-expand' },
            ],
        }
    },
    mounted() {
        this.lang = this.$store.getters.getLang
        axios.get('http://localhost:6969/api/getApprovedMaterials')
        .then(({data : {data}}) => {
            this.data = data;
            console.log(this.data)
        })
        .catch((err) => console.warn(err))
    }
}
</script>