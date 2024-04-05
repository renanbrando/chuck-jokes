<template>
  <v-app>

    <v-app-bar class="bg-red text-blue">
      <v-app-bar-nav-icon @click="drawer = !drawer" icon="fa-solid fa-bars"></v-app-bar-nav-icon>

      <v-app-bar-title>Chuck Norris Jokes</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item v-for="(menu, index) in routes" :key="index" :to="menu.route" :title="menu.name" />
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-2">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script lang="ts">

export default {
  data: () => ({
    drawer: false,
    routes: [
      { route: '/', name: 'Home' },
      { route: '/category', name: 'Categorias' },
      { route: '/search', name: 'Busca' },
      { route: '/about', name: 'Sobre' }
    ]
  }),
}
</script>

<style scoped>
.navbar {
  list-style: none;
}
</style>
