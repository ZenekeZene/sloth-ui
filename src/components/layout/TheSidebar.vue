<template>
<aside class="sidebar">
  <nav class="menu">
    <scrollactive :offset="80">
      <ol>
        <li>
          <a href="#getting-started"
            v-smooth-scroll
            class="scrollactive-item"
          >Empezar</a></li>
        <li>
          <a href="#content"
            v-smooth-scroll
            class="scrollactive-item"
          >Contenido</a></li>
        <li>
          <a href="#components"
            v-smooth-scroll
            class="scrollactive-item"
          >Componentes</a></li>
        <li>
          <a href="#utilities"
            v-smooth-scroll
            class="scrollactive-item"
          >Utilidades</a></li>
      </ol>
    </scrollactive>
  </nav>
</aside>
</template>
<script>
export default {
  name: 'TheSidebar',
};
</script>
<style lang="scss">
  @import '../../../lib/fonts/primary/font.scss';
  .sidebar {
    display: inline-block;
    width: 10rem !important;
    padding: 3.8rem 0 1rem 0;
  }

  .menu {
    position: sticky;
    top: 5rem;

    ol {
      list-style-type: none;
      padding-left: 0;
    }

    .is-active {
      @include font('bold');
    }
  }
</style>
