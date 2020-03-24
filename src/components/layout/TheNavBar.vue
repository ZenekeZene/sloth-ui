<template>
  <nav class="navbar">
    <h1>SLOTH UI</h1>
    <ol>
      <li><a href="/" m-b-0>Home</a></li>
      <li><a href="/documentation" m-b-0>Documentación</a></li>
      <li>Ejemplos</li>
      <li>Iconos</li>
      <li>Temas</li>
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
  name: 'TheNavBar'
}
</script>
<style lang="scss">
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
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
