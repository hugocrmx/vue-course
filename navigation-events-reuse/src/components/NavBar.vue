<template>
  <nav class="navbar">
    <router-link
      v-for="link in links"
      :to="link.route"
      :key="link.label"
      class="link"
    >{{ link.label }}</router-link>
  </nav>
</template>

<script>

export default {
  name: "NavBar",
  props: {
    links: {
      type: Array,
      default: new Array()
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-flow: row;
  margin-bottom: 32px;
  background-color: #333;
  border-radius: 3px;
  width: 1060px;
  box-sizing: border-box;
}
.navbar .link {
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a:hover {
  background-color: #111;
}
</style> 