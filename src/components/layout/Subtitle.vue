<template>
  <h2 class="subtitle">
    <scrollactive :offset="80">
      <a :id="id"
        v-smooth-scroll
        class="scrollactive-item"
        :href="`#${id}`"
      >#</a>
    </scrollactive>
    <slot></slot>
  </h2>
</template>
<script>
export default {
  name: 'Subtitle',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss">
  .scrollactive-nav {
    display: inline;
  }

  .subtitle {
    position: relative;
    margin-top: 5rem;

    & a {
      visibility: hidden;
      position: absolute;
      left: -1.9rem;
      padding: 0 0.5rem;
      color: var(--color-tertiary);
      text-decoration: none;
      cursor: pointer;
    }

    &:hover {
      & a {
        visibility: visible;
      }
    }
  }
</style>
