<template>
  <header class="header">
    <h1>SLOTH UI</h1>
    <div class="hero">
      <div class="hero__inner">
        <img
          src="https://logopond.com/logos/27b2b54c837411e9d3056bdf369df840.png">
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'TheHero',
};
</script>
<style lang="scss">
$color: #fbd55a;
.hero {
  // position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  background: $color;

  &__inner {
    max-width: 63rem;
    margin: 0 auto;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 16.7rem;
    background-color: $color;
  }
}
</style>
