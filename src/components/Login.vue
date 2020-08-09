<template>
  <v-layout justify-center>
    <v-flex xs6>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Connexion</v-toolbar-title>
        </v-toolbar>
        <div class="px-4 py-2">
          <form
            name="login-form"
            autocomplete="yes">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="Mot de passe"
              type="password"
              v-model="password"
            ></v-text-field>
          </form>
          <br>
          <div class="danger-alert" v-html="error" />
          <br>
          <v-btn
            dark
            class="cyan"
            @click="login">
            Connexion
          </v-btn>
        </div>
      </div>

    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
