<template>
    <div>
        <v-toolbar class="orange">
          <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
          <a href="/"><h3 class="white--text">CovidUS</h3></a>
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
    </div>
</template>

<script>
export default {
    name: 'Receive',
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