<template>
  <div>
    <v-container class="fill-height" style="width: 500px">
      <v-layout class="align-center justify-center">
        <v-flex class="text-xs-center">
          <v-card flat line v-if="error">
            <v-alert v-if="lang == 'Français'" :value="error" color="red" dark dense border="top" icon="mdi-alert-circle" transition="scale-transition"> Erreur avec les informations d'identification </v-alert>
            <v-alert v-if="lang == 'English'" :value="error" color="red" dark dense border="top" icon="mdi-alert-circle" transition="scale-transition"> Error with the credentials </v-alert>
            <v-alert v-if="lang == 'Español'" :value="error" color="red" dark dense border="top" icon="mdi-alert-circle" transition="scale-transition"> Error con las credenciales </v-alert>
            <v-alert v-if="lang == 'русский'" :value="error" color="red" dark dense border="top" icon="mdi-alert-circle" transition="scale-transition"> Ошибка с учетными данными </v-alert>
          </v-card>
          <v-card flat line class="text-center" v-if="success">
            <v-alert v-if="lang == 'Français'" :value="success" color="green" dark dense border="top" icon="mdi-alert-circle" transition="scale-transition"> Authentification réussie </v-alert>
            <i v-if="lang == 'Français'">Vous allez être redirigé dans 5 secondes ...</i><br /><br />
            <v-alert v-if="lang == 'English'" :value="success" color="green" dark dense border="top" icon="mdi-alert-circle" transition="scale-transition"> Authentification successful </v-alert>
            <i v-if="lang == 'English'">Redirecting you in 5 seconds ...</i>
            <v-alert v-if="lang == 'Español'" :value="success" color="green" dark dense border="top" icon="mdi-alert-circle" transition="scale-transition"> Autentificación exitosa </v-alert>
            <i v-if="lang == 'Español'">Redirigiéndote en 5 segundos ...</i>
            <v-alert v-if="lang == 'русский'" :value="success" color="green" dark dense border="top" icon="mdi-alert-circle" transition="scale-transition"> Аутентификация прошла успешно </v-alert>
            <i v-if="lang == 'русский'">Перенаправляем вас за 5 секунд ...</i>
            <br /><br />
            <v-progress-circular indeterminate color="red"></v-progress-circular>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container v-if="!logged_in" class="fill-height" style="width: 500px">
      <v-layout class="align-center justify-center">
        <v-flex class="text-xs-center">
          <v-card flat line>
            <v-form ref="form">
              <p v-if="lang == 'Français'" class="text-center">Admin</p>
              <p v-if="lang == 'English'" class="text-center">Admin</p>
              <p v-if="lang == 'Español'" class="text-center">Administración</p>
              <p v-if="lang == 'русский'" class="text-center">Админ</p>
              <v-text-field v-if="lang == 'Français'" v-model="username" single-line solo label="Nom d'utilisateur"></v-text-field>
              <v-text-field v-if="lang == 'English'" v-model="username" single-line solo label="Username"></v-text-field>
              <v-text-field v-if="lang == 'Español'" v-model="username" single-line solo label="Nombre de usuario"></v-text-field>
              <v-text-field v-if="lang == 'русский'" v-model="username" single-line solo label="Имя пользователя"></v-text-field>
              <v-text-field v-if="lang == 'Français'" v-model="password" single-line solo label="Mot de passe" type="password"></v-text-field>
              <v-text-field v-if="lang == 'English'" v-model="password" single-line solo label="Password" type="password"></v-text-field>
              <v-text-field v-if="lang == 'Español'" v-model="password" single-line solo label="Contraseña" type="password"></v-text-field>
              <v-text-field v-if="lang == 'русский'" v-model="password" single-line solo label="Пароль" type="password"></v-text-field>

              <v-btn v-if="lang == 'Français'" block color="warning" @click.prevent="login">Connexion</v-btn>
              <v-btn v-if="lang == 'English'" block color="warning" @click.prevent="login">Login</v-btn>
              <v-btn v-if="lang == 'Español'" block color="warning" @click.prevent="login">Acceso</v-btn>
              <v-btn v-if="lang == 'русский'" block color="warning" @click.prevent="login">Авторизоваться</v-btn>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <section v-if="logged_in && !success">
      <v-container fluid>
        <v-data-table v-if="lang == 'English'" :headers="headersEN" :items="data" item-key="category" show-expand class="elevation-1" :search="search">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Tickets</v-toolbar-title>
              <v-card-title>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
              </v-card-title>
            </v-toolbar>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              {{ item.message }}
              <br />
              <v-icon color="orange" @click.prevent="deleteTicket(item._id)">mdi-trash-can-outline</v-icon>
            </td>
          </template>
        </v-data-table>
        <v-data-table v-if="lang == 'Français'" :headers="headersFR" :items="data" item-key="category" show-expand class="elevation-1" :search="search">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Tickets</v-toolbar-title>
              <v-card-title>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Rechercher" single-line hide-details></v-text-field>
              </v-card-title>
            </v-toolbar>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              {{ item.message }}
              <br />
              <v-icon color="orange" @click.prevent="deleteTicket(item._id)">mdi-trash-can-outline</v-icon>
            </td>
          </template>
        </v-data-table>
        <v-data-table v-if="lang == 'Español'" :headers="headersES" :items="data" item-key="category" show-expand class="elevation-1" :search="search">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Entradas</v-toolbar-title>
              <v-card-title>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details></v-text-field>
              </v-card-title>
            </v-toolbar>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              {{ item.message }}
              <br />
              <v-icon color="orange" @click.prevent="deleteTicket(item._id)">mdi-trash-can-outline</v-icon>
            </td>
          </template>
        </v-data-table>
        <v-data-table v-if="lang == 'русский'" :headers="headersRU" :items="data" item-key="category" show-expand class="elevation-1" :search="search">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Билеты</v-toolbar-title>
              <v-card-title>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="поиск" single-line hide-details></v-text-field>
              </v-card-title>
            </v-toolbar>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              {{ item.message }}
              <br />
              <v-icon color="orange" @click.prevent="deleteTicket(item._id)">mdi-trash-can-outline</v-icon>
            </td>
          </template>
        </v-data-table>
      </v-container>

      <v-container fluid>
        <v-row no-gutters style="height: 100px">
          <v-col class="text-center">
            <v-card class="pa-2" flat tile>
              <h4 v-if="lang == 'Français'">BESOIN D'ÊTRE APPROUVÉ</h4>
              <h4 v-if="lang == 'English'">NEED APPROVAL</h4>
              <h4 v-if="lang == 'Español'">NECESITA SER APROBADA</h4>
              <h4 v-if="lang == 'русский'">НЕОБХОДИМО УТВЕРЖДЕНИЕ</h4>
            </v-card>
          </v-col>
          <v-col class="text-center">
            <v-card class="pa-2" flat tile>
              <h4 v-if="lang == 'Français'">DONATION ACTUELLES</h4>
              <h4 v-if="lang == 'English'">CURRENT DONATIONS</h4>
              <h4 v-if="lang == 'Español'">DONACIONES ACTUALES</h4>
              <h4 v-if="lang == 'русский'">ТЕКУЩИЕ ПОЖЕРТВОВАНИЯ</h4>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row no-gutters style="height: 100px">
          <v-col class="text-left">
            <v-card class="pa-2" flat tile>
              <v-card v-for="item in tbaData" :key="item._id" class="mx-auto" max-width="500" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline"><v-icon>mdi-map-marker</v-icon> {{ item.location }}</div>
                    <div class="overline"><v-icon>mdi-face-mask-outline</v-icon> {{ item.type }}</div>
                    <div class="overline"><v-icon>mdi-counter</v-icon> {{ item.quantity }}</div>
                    <div class="overline"><v-icon>mdi-account-box-outline</v-icon> {{ item.contact }}</div>
                    <v-list-item-subtitle v-if="lang == 'Français'">Posté le {{ item.posted }}</v-list-item-subtitle>
                    <v-list-item-subtitle v-if="lang == 'English'">Posted on {{ item.posted }}</v-list-item-subtitle>
                    <v-list-item-subtitle v-if="lang == 'Español'">Publicado en {{ item.posted }}</v-list-item-subtitle>
                    <v-list-item-subtitle v-if="lang == 'русский'">опубликовано {{ item.posted }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar tile size="80"><v-icon x-large>mdi-face-mask-outline</v-icon></v-list-item-avatar>
                </v-list-item>
                <v-card-actions>
                  <v-btn outlined rounded text @click.prevent="approveMaterial(item._id)">
                    <v-icon color="green">mdi-check</v-icon>
                  </v-btn>
                  <v-btn outlined rounded text @click.prevent="deleteMaterial(item._id)">
                    <v-icon color="red">mdi-close</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>
          <v-col class="text-left">
            <v-card class="pa-2" flat tile>
              <v-card v-for="item in approvedData" :key="item._id" class="mx-auto" max-width="500" outlined>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline"><v-icon>mdi-map-marker</v-icon> {{ item.location }}</div>
                    <div class="overline"><v-icon>mdi-face-mask-outline</v-icon> {{ item.type }}</div>
                    <div class="overline"><v-icon>mdi-counter</v-icon> {{ item.quantity }}</div>
                    <div class="overline"><v-icon>mdi-account-box-outline</v-icon> {{ item.contact }}</div>
                    <v-list-item-subtitle v-if="lang == 'Français'">Posté le {{ item.posted }}</v-list-item-subtitle>
                    <v-list-item-subtitle v-if="lang == 'English'">Posted on {{ item.posted }}</v-list-item-subtitle>
                    <v-list-item-subtitle v-if="lang == 'Español'">Publicado en {{ item.posted }}</v-list-item-subtitle>
                    <v-list-item-subtitle v-if="lang == 'русский'">опубликовано {{ item.posted }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar tile size="80"><v-icon x-large>mdi-face-mask-outline</v-icon></v-list-item-avatar>
                </v-list-item>
                <v-card-actions>
                  <v-btn outlined rounded text @click.prevent="deleteMaterial(item._id)">
                    <v-icon color="red">mdi-trash-can-outline</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Admin",
  data() {
    return {
      lang: "",
      username: "",
      password: "",
      logged_in: false,
      error: false,
      success: false,
      tbaData: [],
      approvedData: [],
      search: "",
      data: [],
      headersEN: [
        {
          text: "Category",
          align: "start",
          sortable: true,
          value: "category",
        },
        { text: "Email", value: "email" },
        { text: "Posted on", value: "posted" },
        { text: "", value: "data-table-expand" },
      ],
      headersFR: [
        {
          text: "Location",
          align: "start",
          sortable: true,
          value: "category",
        },
        { text: "Email", value: "email" },
        { text: "Posté le", value: "posted" },
        { text: "", value: "data-table-expand" },
      ],
      headersRU: [
        {
          text: "Категория",
          align: "start",
          sortable: true,
          value: "category",
        },
        { text: "электронное письмо", value: "email" },
        { text: "опубликовано", value: "posted" },
        { text: "", value: "data-table-expand" },
      ],
      headersES: [
        {
          text: "Categoría",
          align: "start",
          sortable: true,
          value: "category",
        },
        { text: "Email", value: "email" },
        { text: "Publicado en", value: "posted" },
        { text: "", value: "data-table-expand" },
      ],
    };
  },
  mounted() {
    this.lang = this.$store.getters.getLang;
    axios.get("http://localhost:6969/api/getTicket").then(({ data: { data } }) => {
      console.log(data);
      this.data = data;
    });
  },
  methods: {
    getTbaMaterial() {
      axios
        .get("http://localhost:6969/api/getMaterials")
        .then(({ data: { data } }) => {
          this.tbaData = data;
        })
        .catch((err) => console.warn(err));
    },
    getTicket() {
      axios
        .get("http://localhost:6969/api/getTicket")
        .then(({ data: { data } }) => {
          this.data = data;
        })
        .catch((err) => console.warn(err));
    },
    getApprovedMaterial() {
      axios
        .get("http://localhost:6969/api/getApprovedMaterials")
        .then(({ data: { data } }) => {
          this.approvedData = data;
        })
        .catch((err) => console.warn(err));
    },
    login() {
      axios
        .post("http://localhost:6969/api/login", {
          username: this.username,
          password: this.password,
        })
        .then(({ data }) => {
          if (!data.status) {
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 5000);
          } else {
            this.logged_in = true;
            this.success = true;
            setTimeout(() => {
              this.success = false;
            }, 5000);
            this.getTbaMaterial();
            this.getApprovedMaterial();
          }
        })
        .catch((err) => {
          console.warn(err);
        });
    },
    approveMaterial(id) {
      axios
        .post("http://localhost:6969/api/approveMaterial", {
          id: id,
        })
        .then(({ data }) => {
          if (data.status) {
            this.getTbaMaterial();
            this.getApprovedMaterial();
          }
        })
        .catch((err) => console.warn(err));
    },
    deleteMaterial(id) {
      axios
        .post("http://localhost:6969/api/deleteMaterial", {
          id: id,
        })
        .then(({ data }) => {
          if (data.status) {
            this.getTbaMaterial();
            this.getApprovedMaterial();
          }
        })
        .catch((err) => console.warn(err));
    },
    deleteTicket(id) {
      axios
        .post("http://localhost:6969/api/deleteTicket", {
          id: id,
        })
        .then(({ data }) => {
          if (data.status) {
            this.getTicket();
          }
        })
        .catch((err) => console.warn(err));
    },
  },
};
</script>