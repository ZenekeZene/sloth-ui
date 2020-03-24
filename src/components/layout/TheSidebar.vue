<template>
<aside class="sidebar">
  <nav class="menu">
    <ol>
      <li>Empezar</li>
      <li>Contenido</li>
      <li>Componentes</li>
      <li>Utilidades</li>
    </ol>
  </nav>
</aside>
</template>
<script>
export default {
  name: 'TheSidebar',
};
</script>
<style lang="scss">
  .sidebar {
    position: absolute;
    top: 24rem;
    left: 0;
    padding: 0 2rem;
    width: 15rem !important;
    display: inline-block;
    border: 1px solid red;
  }

  .menu {
    ol {
      list-style-type: none;
    }
  }
</style>
