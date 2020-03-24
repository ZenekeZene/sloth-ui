<template>
  <div id="app">
    <TheNavBar />
    <TheHero />
    <router-view/>
  </div>
</template>
<script>
import TheNavBar from '@/components/layout/TheNavBar.vue';
import TheHero from '@/components/layout/TheHero.vue';

export default {
  name: 'App',
  components: {
    TheHero,
    TheNavBar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
