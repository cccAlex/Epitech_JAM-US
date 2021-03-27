<template>
  <v-app>
    <v-main>
      <v-container fluid pa-0>
        <router-view :key="$route.path" />
      </v-container>
    </v-main>
    <v-footer app padless dark>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Covid US</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>