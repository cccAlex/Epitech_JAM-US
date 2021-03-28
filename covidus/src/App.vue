<template>
  <v-app>
    <v-main>
      <v-container fluid pa-0>
        <router-view :key="$route.path" />
      </v-container>
    </v-main>
    <v-footer app padless dark>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong @click.prevent="$router.push('/')">Covid US</strong> —
        <i v-if="lang == 'Français'">soutenez-nous en regardant une annonce <a @click="randomlink()">ici</a></i>
        <i v-if="lang == 'English'">support us by watching an ad <a @click="randomlink()">here</a></i>
        <i v-if="lang == 'Español'">apóyanos viendo un anuncio <a @click="randomlink()">aquí</a></i>
        <i v-if="lang == 'русский'">поддержите нас, посмотрев рекламу <a @click="randomlink()">здесь</a></i>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      lang: "",
      links: [
        "https://www.youtube.com/watch?v=QH2-TGUlwu4",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "https://www.youtube.com/watch?v=MGRm4IzK1SQ",
        "https://www.youtube.com/watch?v=V0XOApF5nLU",
        "https://www.youtube.com/watch?v=dfXRud1AIiw",
        "https://www.youtube.com/watch?v=gcTkNV5Vg1E",
        "https://www.youtube.com/watch?v=Emy-LBe27dA",
        "https://www.youtube.com/watch?v=HhesaQXLuRY",
        "https://www.youtube.com/watch?v=mnd7sFt5c3A",
      ],
    };
  },
  mounted() {
    this.lang = this.$store.getters.getLang;
  },
  methods: {
    randomlink() {
      window.open(this.links[Math.floor(Math.random() * this.links.length)], "ad", "height=720,width=1280");
    },
  },
};
</script>