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
          <v-btn v-if="lang == 'Français'" class="lighten-2 mt-5" color="warning" dark large href="/covidus">Commencer</v-btn>
          <v-btn v-if="lang == 'English'" class="lighten-2 mt-5" color="warning" dark large href="/covidus">Get Started</v-btn>
          <v-btn v-if="lang == 'Español'" class="lighten-2 mt-5" color="warning" dark large href="/covidus">Empezar</v-btn>
          <v-btn v-if="lang == 'русский'" class="lighten-2 mt-5" color="warning" dark large href="/covidus">начать</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
        <v-layout column wrap class="my-5" align-center>
          <br><v-select
                :items="languages"
                v-model="lang"
                label="Language"
                color="warning"
                dense
              ></v-select><br>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 v-if="lang == 'Français'" class="headline text-center">La meilleure façon d'aider les gens dans le besoin</h2>
              <h2 v-if="lang == 'English'" class="headline text-center">The best way to help people in the needs</h2>
              <h2 v-if="lang == 'Español'" class="headline text-center">La mejor forma de ayudar a las personas en las necesidades</h2>
              <h2 v-if="lang == 'русский'" class="headline text-center">Лучший способ помочь людям в нужде</h2>
              <span v-if="lang == 'Français'" class="subheading">Plus besoin d'attendre que le gouvernement donne des masques, demandez au peuple!</span>
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
                      <v-icon x-large class="yellow--text text--lighten-2 ml-6">mdi-clock-fast</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div v-if="lang == 'Français'" class="headline text-xs-center">Facile à utiliser</div>
                      <div v-if="lang == 'English'" class="headline text-xs-center">Easy to use</div>
                      <div v-if="lang == 'Español'" class="headline text-xs-center">Fácil de usar</div>
                      <div v-if="lang == 'русский'" class="headline text-xs-center">Легко использовать</div>
                    </v-card-title>
                    <v-card-text v-if="lang == 'Français'" class="text-center">Trouvez / donnez des équipements de sécurité (masques, écrans faciaux, lunettes de protection) à proximité de chez vous!</v-card-text>
                    <v-card-text v-if="lang == 'English'" class="text-center">Find/Give safety equipment (masks, face shields, protective glasses) near your area !</v-card-text>
                    <v-card-text v-if="lang == 'Español'" class="text-center">¡Busque / proporcione equipo de seguridad (máscaras, protectores faciales, gafas protectoras) cerca de su área!</v-card-text>
                    <v-card-text v-if="lang == 'русский'" class="text-center">Найдите / дайте защитное снаряжение (маски, лицевые щитки, защитные очки) рядом с вашим районом!</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center layout justify-center">
                      <v-icon x-large class="orange--text text--lighten-2 ml-6">mdi-emoticon-outline</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div v-if="lang == 'Français'" class="headline text-xs-center">La sécurité d'abord</div>
                      <div v-if="lang == 'English'" class="headline text-xs-center">Safety first</div>
                      <div v-if="lang == 'Español'" class="headline text-xs-center">Seguridad primero</div>
                      <div v-if="lang == 'русский'" class="headline text-xs-center">Безопасность прежде всего</div>
                    </v-card-title>
                    <v-card-text v-if="lang == 'Français'" class="text-center">Nous nous assurons de suivre toutes les consignes de sécurité. Pour protéger tout le monde, pensez à mettre un masque correctement!</v-card-text>
                    <v-card-text v-if="lang == 'English'" class="text-center">We ensure to follow all the safety guidelines. To protect everyone, remember to put a mask correctly !</v-card-text>
                    <v-card-text v-if="lang == 'Español'" class="text-center">Nos aseguramos de seguir todas las pautas de seguridad. Para proteger a todos, ¡recuerde ponerse una máscara correctamente!</v-card-text>
                    <v-card-text v-if="lang == 'русский'" class="text-center">Мы гарантируем соблюдение всех правил техники безопасности. Чтобы защитить всех, не забудьте правильно надеть маску!</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>





      <section>
      <br><br>
      <v-parallax src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/11/css-gradient.png" height="200" width="100%">
        <v-layout column align-center justify-center class="white--text">
          <h1 v-if="lang == 'Français'" class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">Comment ça marche?</h1>
          <h1 v-if="lang == 'English'" class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">How does it work?</h1>
          <h1 v-if="lang == 'Español'" class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">¿Como funciona?</h1>
          <h1 v-if="lang == 'русский'" class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">Как это работает?</h1>
          <div v-if="lang == 'Français'" class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">Que pouvez-vous faire avec covidUS</div>
          <div v-if="lang == 'English'" class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">What can you do with covidUS</div>
          <div v-if="lang == 'Español'" class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">¿Qué puedes hacer con covidUS?</div>
          <div v-if="lang == 'русский'" class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">Что можно делать с covidUS</div>
        </v-layout>
      </v-parallax>
    </section>



      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <v-icon class="orange--text text--lighten-2 mr-2">mdi-archive-arrow-up-outline</v-icon>
                  <div v-if="lang == 'Français'" class="headline">Donner</div>
                  <div v-if="lang == 'English'" class="headline">Give</div>
                  <div v-if="lang == 'Español'" class="headline">Dar</div>
                  <div v-if="lang == 'русский'" class="headline">Дайте</div>
                  <v-icon class="orange--text text--lighten-2 ml-2">mdi-archive-arrow-up-outline</v-icon>
                </v-card-title>
                <v-card-text v-if="lang == 'Français'" class="text-center">Donnez du matériel de sécurité aux personnes dans le besoin en publiant un formulaire de don.</v-card-text>
                <v-card-text v-if="lang == 'English'" class="text-center">Give safety equipment to people in the need by posting a giveaway form.</v-card-text>
                <v-card-text v-if="lang == 'Español'" class="text-center">Entregue equipo de seguridad a las personas que lo necesiten publicando un formulario de obsequio.</v-card-text>
                <v-card-text v-if="lang == 'русский'" class="text-center">Раздайте защитное снаряжение нуждающимся людям, разместив раздачу подарков.</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <v-icon class="orange--text text--lighten-2 mr-2">mdi-archive-arrow-down-outline</v-icon>
                  <div v-if="lang == 'Français'" class="headline">Recevoir</div>
                  <div v-if="lang == 'English'" class="headline">Receive</div>
                  <div v-if="lang == 'Español'" class="headline">Recibir</div>
                  <div v-if="lang == 'русский'" class="headline">Получить</div>
                  <v-icon class="orange--text text--lighten-2 ml-2">mdi-archive-arrow-down-outline</v-icon>
                </v-card-title>
                <v-card-text v-if="lang == 'Français'" class="text-center">Recevez (si vous en avez besoin) des équipements de sécurité en consultant les offres que nous avons sur le site, et contactez-les directement avec les coordonnées.</v-card-text>
                <v-card-text v-if="lang == 'English'" class="text-center">Receive (if you're in the need) safety equipment by looking at the offers we have on the website, and contact them directly with the contact information.</v-card-text>
                <v-card-text v-if="lang == 'Español'" class="text-center">Reciba (si lo necesita) equipo de seguridad mirando las ofertas que tenemos en el sitio web y contáctelas directamente con la información de contacto.</v-card-text>
                <v-card-text v-if="lang == 'русский'" class="text-center">Получите (если вам нужно) защитное снаряжение, просмотрев наши предложения на веб-сайте, и свяжитесь с ними напрямую, указав контактную информацию.</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
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
