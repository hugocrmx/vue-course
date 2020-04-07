<template>
  <div id="app">
     <NavBar :links="links" />
     <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      links: [
        { label: "Home", route: "/" },
        { label: "About", route: "/about" }
        ]
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 1060px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
