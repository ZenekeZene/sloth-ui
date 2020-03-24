<template>
  <div class="home">
    <TheHero>
      <div class="intro">
        <p style="padding: 4rem 1rem;">Build responsive, mobile-first projects on the web
          with the world’s most popular front-end component library.
          Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.
          Quickly prototype your ideas or build
          your entire app with our Sass variables and mixins, responsive grid system,
          extensive prebuilt components, and
          powerful plugins built on jQuery.
        </p>
        <nav class="buttons-group">
          <a href="/documentation" class="button" color-secondary>Empezar</a>
          <a href="/documentation" class="button">Descargar</a>
          <a href="/documentation" class="button">Documentación</a>
        </nav>
      </div>
    </TheHero>
  </div>
</template>

<script>
import TheHero from '@/components/layout/TheHero.vue';

export default {
  name: 'Home',
  components: {
    TheHero,
  },
};
</script>
<style lang="scss">
  .intro {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
