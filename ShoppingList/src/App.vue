<template>
  <div class="container-fluid mr-3">
    <h1 class="d-flex pb-3">Shopping List</h1>
    <ShoppingList />
  </div>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";
export default {
  name: "App",
  components: {
    ShoppingList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 30px 30px auto 0;
}
h1 {
  font-weight: 600;
}
</style>
