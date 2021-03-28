<template>
  <div>
    <v-toolbar class="orange">
      <v-toolbar-title class="mx-0"></v-toolbar-title>
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
    <br /><br />
    <v-container v-if="error" ass="fill-height" style="width: 500px">
      <v-layout class="align-center justify-center">
        <v-flex class="text-xs-center">
          <v-card flat line>
            <v-alert :value="error" color="red" dark dense border="top" icon="mdi-alert-circle" transition="scale-transition">
              {{ this.errorMSG }}
            </v-alert>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container v-if="success" ass="fill-height" style="width: 500px">
      <v-layout class="align-center justify-center">
        <v-flex class="text-xs-center">
          <v-card flat line>
            <v-alert :value="success" color="green" dark dense border="top" icon="mdi-alert-circle" transition="scale-transition">
              {{ this.successMSG }}
            </v-alert>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="fill-height" style="width: 700px">
      <v-layout class="align-center justify-center">
        <v-flex class="text-xs-center">
          <v-card outlined line>
            <v-form ref="form" class="mx-10 text-center">
              <img src="@/assets/give_mask.png" width="50%" />
              <h3 v-if="lang == 'Français'" class="text-center">FAIRE UN DON<br />Veuillez remplir ce formulaire pour que les gens puissent vous contacter!</h3>
              <h3 v-if="lang == 'English'" class="text-center">DONATE<br />Please fill out this form for people to contact you!</h3>
              <p v-if="lang == 'Español'" class="text-center">DONAR<br />¡Complete este formulario para que la gente se comunique con usted!</p>
              <p v-if="lang == 'русский'" class="text-center">ПОЖЕРТВОВАТЬ<br />Пожалуйста, заполните эту форму, чтобы люди могли связаться с вами!</p>
              <br />
              <v-text-field color="orange" v-if="lang == 'Français'" v-model="location" label="Où habites-tu?" prepend-icon="mdi-map-marker"></v-text-field>
              <v-text-field color="orange" v-if="lang == 'English'" v-model="location" label="Where do you live?" prepend-icon="mdi-map-marker"></v-text-field>
              <v-text-field color="orange" v-if="lang == 'Español'" v-model="location" label="¿Dónde vive?" prepend-icon="mdi-map-marker"></v-text-field>
              <v-text-field color="orange" v-if="lang == 'русский'" v-model="location" label="Где вы живете?" prepend-icon="mdi-map-marker"></v-text-field>

              <v-select color="yellow" v-if="lang == 'Français'" v-model="type" :items="typesFR" menu-props="auto" label="Que souhaitez-vous donner?" hide-details prepend-icon="mdi-face-mask-outline" single-line></v-select>
              <v-select color="yellow" v-if="lang == 'English'" v-model="type" :items="typesEN" menu-props="auto" label="What would you like to donate?" hide-details prepend-icon="mdi-face-mask-outline" single-line></v-select>
              <v-select color="yellow" v-if="lang == 'Español'" v-model="type" :items="typesES" menu-props="auto" label="¿Dónde vive?" hide-details prepend-icon="mdi-face-mask-outline" single-line></v-select>
              <v-select color="yellow" v-if="lang == 'русский'" v-model="type" :items="typesRU" menu-props="auto" label="Что бы вы хотели подарить?" hide-details prepend-icon="mdi-face-mask-outline" single-line></v-select>

              <br /><br />
              <v-slider v-if="lang == 'Français'" hint="Quelle quantité de l'article avez-vous?" color="orange" track-color="yellow" thumb-color="orange" v-model="quantity" prepend-icon="mdi-counter" thumb-label="always" min="1" max="100" persistent-hint></v-slider>
              <v-slider v-if="lang == 'English'" hint="How much of the item do you have?" color="orange" track-color="yellow" thumb-color="orange" v-model="quantity" prepend-icon="mdi-counter" thumb-label="always" min="1" max="100" persistent-hint></v-slider>
              <v-slider v-if="lang == 'Español'" hint="¿Cuánto del artículo tienes?" color="orange" track-color="yellow" thumb-color="orange" v-model="quantity" prepend-icon="mdi-counter" thumb-label="always" min="1" max="100" persistent-hint></v-slider>
              <v-slider v-if="lang == 'русский'" hint="Сколько предмета у вас есть?" color="orange" track-color="yellow" thumb-color="orange" v-model="quantity" prepend-icon="mdi-counter" thumb-label="always" min="1" max="100" persistent-hint></v-slider>

              <v-text-field color="orange" v-if="lang == 'Français'" v-model="contact" label="Comment les gens peuvent-ils vous contacter?" prepend-icon="mdi-account-box-outline"></v-text-field>
              <v-text-field color="orange" v-if="lang == 'English'" v-model="contact" label="How can people contact you?" prepend-icon="mdi-account-box-outline"></v-text-field>
              <v-text-field color="orange" v-if="lang == 'Español'" v-model="contact" label="¿Cómo pueden contactarte las personas?" prepend-icon="mdi-account-box-outline"></v-text-field>
              <v-text-field color="orange" v-if="lang == 'русский'" v-model="contact" label="Как люди могут с вами связаться?" prepend-icon="mdi-account-box-outline"></v-text-field>

              <v-btn v-if="lang == 'Français'" color="warning" @click.prevent="submit">Envoyer</v-btn>
              <v-btn v-if="lang == 'English'" color="warning" @click.prevent="submit">Submit</v-btn>
              <v-btn v-if="lang == 'Español'" color="warning" @click.prevent="submit">Enviar</v-btn>
              <v-btn v-if="lang == 'русский'" color="warning" @click.prevent="submit">Представлять на рассмотрение</v-btn>
              <br /><br />
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Donate",
  data() {
    return {
      lang: "",
      location: "",
      type: "",
      quantity: "",
      contact: "",
      typesEN: ["mask", "protective glasses", "gloves", "face shields", "hand sanitizer"],
      typesFR: ["masque", "lunettes de protection", "gants", "visière de sécurité", "désinfectant pour les mains"],
      typesES: ["máscara", "gafas de protección", "guantes", "caretas", "desinfectante de manos"],
      typesRU: ["маска", "защитные очки", "перчатки", "щитки для лица", "дезинфицирующее средство для рук"],
      error: false,
      errorMSG: "",
      success: false,
      successMSG: "",
    };
  },
  mounted() {
    this.lang = this.$store.getters.getLang;
  },
  methods: {
    submit() {
      if (!this.location || !this.type || !this.quantity || !this.contact) {
        if (this.lang == "Français") {
          this.errorMSG = "Vous devez tout remplir dans le formulaire";
        }
        if (this.lang == "English") {
          this.errorMSG = "You have to fill everything in the form";
        }
        if (this.lang == "Español") {
          this.errorMSG = "Tienes que completar todo en el formulario";
        }
        if (this.lang == "русский") {
          this.errorMSG = "Вы должны заполнить все в форме";
        }
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 5000);
      } else {
        axios
          .post("http://localhost:6969/api/saveMaterials", {
            location: this.location,
            type: this.type,
            quantity: this.quantity,
            contact: this.contact,
          })
          .then(({ data }) => {
            if (data.status) {
              if (this.lang == "Français") {
                this.successMSG = "Merci pour votre submission, nous l'examinerons et si tout va bien, votre donation sera publiée!";
              }
              if (this.lang == "English") {
                this.successMSG = "Thank you for your submissions, we will review it and if everything is ok your submission will be posted!";
              }
              if (this.lang == "Español") {
                this.successMSG = "Gracias por sus envíos, lo revisaremos y si todo está bien, ¡su envío será publicado!";
              }
              if (this.lang == "русский") {
                this.successMSG = "Спасибо за отправленные материалы, мы рассмотрим их, и если все в порядке, они будут опубликованы!е";
              }
              this.success = true;
              this.location = "";
              this.type = "";
              this.quantity = "";
              this.contact = "";
              setTimeout(() => {
                this.success = false;
              }, 5000);
            }
          })
          .catch((err) => {
            console.warn(err);
          });
      }
    },
  },
};
</script>