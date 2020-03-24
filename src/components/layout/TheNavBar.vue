<template>
  <nav class="navbar">
    <h1>SLOTH UI</h1>
    <ol>
      <li v-for="(item, index) in options" :key="`option-${index}`">
        <a m-b-0
        :href="item.path"
        :class="{ '--activated' : currentRoute === item.name }"
      >{{ item.value }}</a>
      </li>
    </ol>
  </nav>
</template>
<script>
export default {
  name: 'TheNavBar',
};
</script>
<script>
export default {
  name: 'TheNavBar',
  computed: {
    currentRoute() {
      return this.$router.currentRoute.name;
    },
  },
  data() {
    return {
      options: [
        {
          name: 'Home',
          path: '/',
          value: 'Inicio'
        },
        {
          name: 'Documentation',
          path: '/documentation',
          value: 'Documentación'
        },
        {
          name: 'Examples',
          path: '/examples',
          value: 'Ejemplos'
        },
        {
          name: 'Icons',
          path: '/icons',
          value: 'Iconos'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    background-color: white;

    h1 {
      margin-bottom: 0;
    }

    ol {
      list-style-type: none;
      display: flex;

      li {
        padding: 1rem;
      }
    }
  }
</style>
