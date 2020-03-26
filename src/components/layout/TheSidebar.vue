<template>
<aside class="sidebar">
  <nav class="menu">
    <scrollactive :offset="80">
      <ol>
        <li class="sidebar__item">
          <a href="#getting-started"
            class="scrollactive-item p-2 mb-0 w-100"
          >Empezar</a>
          <ol class="sidebar__list">
            <li>Cómo instalar</li>
            <li>Cómo usarlo</li>
          </ol>
        </li>
        <li class="sidebar__item">
          <a href="#content"
            class="scrollactive-item p-2 mb-0 w-100"
          >Contenido</a>
          <ol class="sidebar__list">
            <li>Colores</li>
            <li>Headings</li>
            <li>Fuente</li>
            <li>Enlace</li>
          </ol>
        </li>
        <li class="sidebar__item">
          <a href="#components"
            class="scrollactive-item p-2 mb-0 w-100"
          >Componentes</a>
          <ol class="sidebar__list">
            <li>Botones</li>
            <li>Chips</li>
            <li>Inputs</li>
            <li>Menu</li>
          </ol>
        </li>
        <li class="sidebar__item">
          <a href="#utilities"
            class="scrollactive-item p-2 mb-0 w-100"
          >Utilidades</a>
          <ol class="sidebar__list">
            <li>Espaciado</li>
            <li>Posicionamiento</li>
          </ol>
        </li>
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

    .scrollactive-item {
      height: 2rem;
      line-height: 1rem;
    }

    & &__list {
      padding-left: 1em;
    }
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
