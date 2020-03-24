<template>
  <header class="header">
    <div class="hero">
      <div class="hero__inner">
        <slot></slot>
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
.hero {
  position: relative;
  width: 100%;
  background: var(--color-tertiary);

  &__inner {
    display: flex;
    align-items: center;
    max-width: var(--container-max-width);;
    margin: 0 auto;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: var(--color-tertiary);
  }
}
</style>
