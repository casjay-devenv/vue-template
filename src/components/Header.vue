<template>
  <v-toolbar fixed class="cyan" dark>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>
      <router-link to="home">
        My Pretty App
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <router-link to="login">
          Connexion
        </router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
