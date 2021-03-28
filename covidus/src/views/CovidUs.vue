<template>
  <div>
    <v-app-bar class="orange" fixed>
      <v-app-bar-title class="mx-0" v-text="title"></v-app-bar-title>
      <h3 class="white--text" @click.prevent="$router.push('/')">CovidUS</h3>
      <v-spacer></v-spacer>
      <v-app-bar-items>
        <v-btn v-if="lang == 'Français'" flat class="orange lighten-3" href="https://www.who.int/fr/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">Règles de sécurité COVID-19</v-btn>
        <v-btn v-if="lang == 'English'" flat class="orange lighten-3" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">COVID-19 safety rules</v-btn>
        <v-btn v-if="lang == 'Español'" flat class="orange lighten-3" href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">Reglas de seguridad COVID-19</v-btn>
        <v-btn v-if="lang == 'русский'" flat class="orange lighten-3" href="https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">Правила безопасности при COVID-19</v-btn>
        <v-btn v-if="lang == 'Français'" flat class="yellow lighten-3" href="/donate">Don</v-btn>
        <v-btn v-if="lang == 'English'" flat class="yellow lighten-3" href="/donate">Donate</v-btn>
        <v-btn v-if="lang == 'Español'" flat class="yellow lighten-3" href="/donate">Dar</v-btn>
        <v-btn v-if="lang == 'русский'" flat class="yellow lighten-3" href="/donate">Дайте</v-btn>
        <v-btn v-if="lang == 'Français'" flat class="orange lighten-3" href="/receive">Recevoir</v-btn>
        <v-btn v-if="lang == 'English'" flat class="orange lighten-3" href="/receive">Receive</v-btn>
        <v-btn v-if="lang == 'Español'" flat class="orange lighten-3" href="/receive">Recibir</v-btn>
        <v-btn v-if="lang == 'русский'" flat class="orange lighten-3" href="/receive">Получить</v-btn>
      </v-app-bar-items>
    </v-app-bar>
    <section class="mt-16">
      <v-card class="d-flex justify-center" flat tile>
        <v-card class="text-center mt-16" flat tile>
          <v-img src="@/assets/give_mask.png" max-width="300" max-height="300" class="mr-16"></v-img>
          <v-card-title primary-title class="layout justify-center mt-8">
            <v-btn v-if="lang == 'Français'" medium color="warning" dark href="/donate">Don</v-btn>
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
          <v-img src="@/assets/receive.png" max-width="300" max-height="300" class="ml-16"></v-img>
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

    <v-container v-if="lang == 'Français'" fluid class="text-center">
      <v-icon x-large color="orange">mdi-face-mask-outline</v-icon>
      <h1 class="text-center">Voici une liste de matériel médical que vous pouvez donner</h1>
      <br />
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="mx-16">
        <v-timeline-item v-for="(item, i) in itemsFR" :key="i" :color="item.color" :icon="item.icon" fill-dot>
          <v-card :color="item.color" dark>
            <v-card-title class="title">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="white text--primary">
              <br />
              <p>{{ item.text }}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <v-container v-if="lang == 'English'" fluid class="text-center">
      <v-icon x-large color="orange">mdi-face-mask-outline</v-icon>
      <h1 class="text-center">Here's a list of medical equipment you can donate</h1>
      <br />
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="mx-16">
        <v-timeline-item v-for="(item, i) in itemsEN" :key="i" :color="item.color" :icon="item.icon" fill-dot>
          <v-card :color="item.color" dark>
            <v-card-title class="title">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="white text--primary">
              <br />
              <p>{{ item.text }}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <v-container v-if="lang == 'Español'" fluid class="text-center">
      <v-icon x-large color="orange">mdi-face-mask-outline</v-icon>
      <h1 class="text-center">Aquí hay una lista de equipos médicos que puede donar</h1>
      <br />
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="mx-16">
        <v-timeline-item v-for="(item, i) in itemsES" :key="i" :color="item.color" :icon="item.icon" fill-dot>
          <v-card :color="item.color" dark>
            <v-card-title class="title">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="white text--primary">
              <br />
              <p>{{ item.text }}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <v-container v-if="lang == 'русский'" fluid class="text-center">
      <v-icon x-large color="orange">mdi-face-mask-outline</v-icon>
      <h1 class="text-center">Вот список медицинского оборудования, которое вы можете подарить</h1>
      <br />
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="mx-16">
        <v-timeline-item v-for="(item, i) in itemsRU" :key="i" :color="item.color" :icon="item.icon" fill-dot>
          <v-card :color="item.color" dark>
            <v-card-title class="title">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="white text--primary">
              <br />
              <p>{{ item.text }}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CovidUs",
  data() {
    return {
      lang: "",
      itemsEN: [
        {
          title: "Masks",
          color: "yellow darken-1",
          icon: "mdi-face-mask-outline",
          text: "Wear a mask over your nose and mouth to help prevent getting and spreading COVID-19.",
        },
        {
          title: "Gloves",
          color: "orange",
          icon: "mdi-boxing-glove",
          text: "Gloves protect your hands when coming in contact with surfaces that might be contaminated.",
        },
        {
          title: "Safety glasses",
          color: "yellow darken-1",
          icon: "mdi-safety-goggles",
          text: "The eyes are an entry-point for viruses – keep them protected with goggles and glasses.",
        },
        {
          title: "Face shields",
          color: "orange",
          icon: "mdi-shield-account-variant-outline",
          text: "Face shields are a protective covering made of clear plastic and is worn to block bodily fluids from coming into contact with the face.",
        },
        {
          title: "Hand Sanitizers",
          color: "yellow darken-1",
          icon: "mdi-bottle-tonic-outline",
          text: "Hand sanitizers are a type of antimicrobial agent that kill or permanently inactivate at least 99.9 percent of microorganisms when used on the hands.",
        },
      ],
      itemsFR: [
        {
          title: "Masques",
          color: "yellow darken-1",
          icon: "mdi-face-mask-outline",
          text: "Portez un masque sur votre nez et votre bouche pour éviter d attraper et de propager le COVID-19.",
        },
        {
          title: "Gants",
          color: "orange",
          icon: "mdi-boxing-glove",
          text: "Les gants protègent vos mains lorsqu'ils entrent en contact avec des surfaces susceptibles d'être contaminées.",
        },
        {
          title: "Lunettes de protection",
          color: "yellow darken-1",
          icon: "mdi-safety-goggles",
          text: "Les yeux sont un point d entrée pour les virus - protégez-les avec des lunettes.",
        },
        {
          title: "Visières de sécurité",
          color: "orange",
          icon: "mdi-shield-account-variant-outline",
          text: "Les visières sont un revêtement protecteur en plastique transparent et sont portés pour empêcher les fluides corporels d entrer en contact avec le visage.",
        },
        {
          title: "Désinfectants pour les mains",
          color: "yellow darken-1",
          icon: "mdi-bottle-tonic-outline",
          text: "Les désinfectants pour les mains sont un type d agent antimicrobien qui tue ou inactive de façon permanente au moins 99,9% des micro-organismes lorsqu ils sont utilisés sur les mains.",
        },
      ],
      itemsES: [
        {
          title: "Mascaras",
          color: "yellow darken-1",
          icon: "mdi-face-mask-outline",
          text: "Use una mascarilla sobre su nariz y boca para ayudar a prevenir contraer y propagar COVID-19.",
        },
        {
          title: "Guantes",
          color: "orange",
          icon: "mdi-boxing-glove",
          text: "Los guantes protegen sus manos cuando entran en contacto con superficies que puedan estar contaminadas.",
        },
        {
          title: "Lentes de seguridad",
          color: "yellow darken-1",
          icon: "mdi-safety-goggles",
          text: "Los ojos son un punto de entrada para los virus; manténgalos protegidos con gafas y anteojos.",
        },
        {
          title: "Caretas",
          color: "orange",
          icon: "mdi-shield-account-variant-outline",
          text: "Los protectores faciales son una cubierta protectora hecha de plástico transparente y se usa para evitar que los fluidos corporales entren en contacto con la cara.",
        },
        {
          title: "Desinfectantes de manos",
          color: "yellow darken-1",
          icon: "mdi-bottle-tonic-outline",
          text: "Los desinfectantes de manos son un tipo de agente antimicrobiano que mata o inactiva permanentemente al menos el 99,9 por ciento de los microorganismos cuando se usa en las manos.",
        },
      ],
      itemsRU: [
        {
          title: "Маски",
          color: "yellow darken-1",
          icon: "mdi-face-mask-outline",
          text: "Наденьте маску на нос и рот, чтобы предотвратить заражение и распространение COVID-19.",
        },
        {
          title: "Перчатки",
          color: "orange",
          icon: "mdi-boxing-glove",
          text: "Перчатки защищают руки при контакте с поверхностями, которые могут быть загрязнены.",
        },
        {
          title: "Защитные очки",
          color: "yellow darken-1",
          icon: "mdi-safety-goggles",
          text: "Глаза являются отправной точкой для вирусов - защищайте их защитными очками.",
        },
        {
          title: "Щитки для лица",
          color: "orange",
          icon: "mdi-shield-account-variant-outline",
          text: "Маски для лица представляют собой защитное покрытие из прозрачного пластика, которое надевается, чтобы предотвратить попадание жидкостей организма на лицо.",
        },
        {
          title: "Дезинфицирующие средства для рук",
          color: "yellow darken-1",
          icon: "mdi-bottle-tonic-outline",
          text: "Дезинфицирующие средства для рук - это тип противомикробного агента, который убивает или навсегда инактивирует не менее 99,9% микроорганизмов при использовании на руках.",
        },
      ],
    };
  },
  mounted() {
    this.lang = this.$store.getters.getLang;
  },
};
</script>