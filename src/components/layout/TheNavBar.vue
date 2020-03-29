<template>
  <nav class="navbar">
    <div class="container">
      <img src="favicon.png" class="navbar__icon">
      <h1>SLOTH UI</h1>
      <ol>
        <li v-for="(item, index) in options" :key="`option-${index}`">
          <a class="mb-0"
          :href="item.path"
          :class="{ '--activated' : currentRoute === item.name }"
        >{{ item.value }}</a>
        </li>
      </ol>
      <ol>
        <li><a href="https://github.com/ZenekeZene/sloth-ui" mb-0 no-underline><span class="icon-github"></span></a></li>
        <li><a href="https://twitter.com/ZenekeZene" mb-0 no-underline><span class="icon-twitter"></span></a></li>
      </ol>
    </div>
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
        },
        {
          name: 'Customize',
          path: '/customize',
          value: 'Customizar'
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
    background-color: white;
    border-bottom: 5px solid var(--color-tertiary);

    .container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 1rem;
    }

    &__icon {
      width: 2rem;
      margin-right: 1rem;
      transition: 250ms ease-in;

      &:hover {
        transform: rotateZ(360deg);
      }
    }

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
