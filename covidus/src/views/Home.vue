<template>
  <div>
    <section>
      <v-parallax src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png" height="600" width="100%">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">Covid US</h1>
          <div v-if="lang == 'Français'" class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">Restez forts ensemble pendant la pandémie de covid!</div>
          <div v-if="lang == 'English'" class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">Stay strong together during the covid pandemic!</div>
          <div v-if="lang == 'Español'" class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">¡Manténganse fuertes juntos durante la pandemia de covid!</div>
          <div v-if="lang == 'русский'" class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">Держитесь вместе во время пандемии covid!</div>
          <img src="@/assets/mask.png">
          <v-btn v-if="lang == 'Français'" class="blue lighten-2 mt-5" color="warning" dark large href="/pre-made-themes">Commencer</v-btn>
          <v-btn v-if="lang == 'English'" class="blue lighten-2 mt-5" color="warning" dark large href="/pre-made-themes">Get Started</v-btn>
          <v-btn v-if="lang == 'Español'" class="blue lighten-2 mt-5" color="warning" dark large href="/pre-made-themes">Empezar</v-btn>
          <v-btn v-if="lang == 'русский'" class="blue lighten-2 mt-5" color="warning" dark large href="/pre-made-themes">начать</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
        <v-layout column wrap class="my-5" align-center>
          <br><v-select
                :items="languages"
                v-model="lang"
                label="Language"
                dense
              ></v-select><br>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 v-if="lang == 'Français'" class="headline text-center">La meilleure façon d'aider les gens dans les besoins</h2>
              <h2 v-if="lang == 'English'" class="headline text-center">The best way to help people in the needs</h2>
              <h2 v-if="lang == 'Español'" class="headline text-center">La mejor forma de ayudar a las personas en las necesidades</h2>
              <h2 v-if="lang == 'русский'" class="headline text-center">Лучший способ помочь людям в нужде</h2>
              <span v-if="lang == 'Français'" class="subheading">Plus besoin d'attendre que le gouvernement donne des masques, demandez le peuple!</span>
              <span v-if="lang == 'English'" class="subheading">No more waiting for the government to give out masks, ask for the people!</span>
              <span v-if="lang == 'Español'" class="subheading">No más esperas a que el gobierno entregue máscaras, ¡pregunta por la gente!</span>
              <span v-if="lang == 'русский'" class="subheading">Больше не нужно ждать, когда правительство выдаст маски, попросите людей!</span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center layout justify-center">
                      <v-icon x-large class="orange--text text--lighten-2 ml-8">mdi-account-question-outline</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div v-if="lang == 'Français'" class="headline text-xs-center">Qui sommes nous?</div>
                      <div v-if="lang == 'English'" class="headline text-xs-center">Who are we?</div>
                      <div v-if="lang == 'Español'" class="headline text-xs-center">Quienes somos nosotras</div>
                      <div v-if="lang == 'русский'" class="headline text-xs-center">Кто мы?</div>
                    </v-card-title>
                    <v-card-text v-if="lang == 'Français'" class="text-center">Les masques ne sont pas gratuits, c'est pourquoi nous avons décidé de créer la plateforme covidUS! Développé par un étudiant d'Epitech {Paris}</v-card-text>
                    <v-card-text v-if="lang == 'English'" class="text-center">The masks are not free, that's why we decided to create the covidUS platform! Developped by an Epitech {Paris} student</v-card-text>
                    <v-card-text v-if="lang == 'Español'" class="text-center">Las máscaras no son gratuitas, ¡por eso decidimos crear la plataforma covidUS! Desarrollado por un estudiante de Epitech {Paris}</v-card-text>
                    <v-card-text v-if="lang == 'русский'" class="text-center">Маски платные, поэтому мы решили создать платформу covidUS! Разработано студентом Epitech {Paris}</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center layout justify-center">
                      <v-icon x-large class="yellow--text text--lighten-2 ml-8">mdi-minus-circle</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">test</div>
                    </v-card-title>
                    <v-card-text class="text-center">
                      test
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center layout justify-center">
                      <v-icon x-large class="orange--text text--lighten-2 ml-8">mdi-minus-circle</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">test</div>
                    </v-card-title>
                    <v-card-text class="text-center">
                      test
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>


  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      lang: '',
      defaultlang: '',
      languages: ['Français', 'English', 'Español', 'русский']
    }
  },
  watch: {
    "lang"() {
      if (this.lang != this.defaultlang) {
        this.$store.commit('setLang', this.lang)
      }
    }
  },
  mounted() {
    this.defaultlang = this.$store.getters.getLang
    this.lang = this.$store.getters.getLang
  }
}
</script>
