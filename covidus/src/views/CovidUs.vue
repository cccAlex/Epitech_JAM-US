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
    <section>
        <v-card class="d-flex justify-space-around mb-6" flat tile>
            <v-card class="text-center mt-16" flat tile>
                <img src="@/assets/give_mask.png" height="40%">
                <v-card-title primary-title class="layout justify-center mt-8">
                      <v-btn v-if="lang == 'Français'" medium color="warning" dark href="/donate" >Don</v-btn>
                      <v-btn v-if="lang == 'English'" medium color="warning" dark href="/donate">Donate</v-btn>
                      <v-btn v-if="lang == 'Español'" medium color="warning" dark href="/donate">Dar</v-btn>
                      <v-btn v-if="lang == 'русский'" medium color="warning" dark href="/donate">Дайте</v-btn>
                </v-card-title>
                    <v-card-text v-if="lang == 'Français'" class="text-center">Si vous souhaitez faire un don cliquez ici</v-card-text>
                    <v-card-text v-if="lang == 'English'" class="text-center">If you wish to donate click here</v-card-text>
                    <v-card-text v-if="lang == 'Español'" class="text-center">Si desea donar haga clic aquí</v-card-text>
                    <v-card-text v-if="lang == 'русский'" class="text-center">Если вы хотите сделать пожертвование, нажмите здесь</v-card-text>
            </v-card>
            <v-card class="text-center mt-16" flat tile>
                <img src="@/assets/receive.png" height="40%">
                <v-card-title primary-title class="layout justify-center mt-8">
                      <v-btn v-if="lang == 'Français'" medium color="warning" dark href="/receive">Recevoir</v-btn>
                      <v-btn v-if="lang == 'English'" medium color="warning" dark href="/receive">Receive</v-btn>
                      <v-btn v-if="lang == 'Español'" medium color="warning" dark href="/receive">Recibir</v-btn>
                      <v-btn v-if="lang == 'русский'" medium color="warning" dark href="/receive">Получить</v-btn>
                </v-card-title>
                    <v-card-text v-if="lang == 'Français'" class="text-center">Si vous souhaitez recevoir cliquez ici</v-card-text>
                    <v-card-text v-if="lang == 'English'" class="text-center">If you wish to receive click here</v-card-text>
                    <v-card-text v-if="lang == 'Español'" class="text-center">Si desea recibir haga clic aquí</v-card-text>
                    <v-card-text v-if="lang == 'русский'" class="text-center">Если вы хотите получать, нажмите здесь</v-card-text>
            </v-card>
      </v-card>
    </section>
    </div>
</template>

<script>
export default {
    name: 'CovidUs',
    data() {
        return {
            lang: '',
        }
    },
    mounted() {
        this.lang = this.$store.getters.getLang
    }
}
</script>