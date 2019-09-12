<template>
  <v-app>
    <search-bar></search-bar>
    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SearchBar from './components/SearchBar'
export default {
  name: 'app',
  components: {
    SearchBar
  }
}
</script>

<style>
  #app {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif
  }
</style>
