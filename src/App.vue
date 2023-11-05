<template>
  <HeaderView></HeaderView>
  <router-view/>
</template>
<script>
import HeaderView from "@/components/HeaderView";
export default {
  components: {
    HeaderView
  }
}
</script>
<style>
#app {
  font-family: 'Kodchasan', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
