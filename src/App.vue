
<template>
  <div id="app">
    <v-app>
      <page-header />

      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
main{
  margin-top: 56px;
}
@media screen and (min-width: 768px){
  main{
    margin-top: 48px;
  }
}
@media screen and (min-width: 992px){
  main{
    margin-top: 64px;
  }
}
</style>
