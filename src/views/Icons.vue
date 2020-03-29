<template>
  <div class="container">
    <main class="container p-0">
      <h1>Iconos</h1>
      <div>
        <ol class="icons">
          <li v-for="(key, icon, index) in icons" :key="`icon-${index}`" class="icons__item p-3">
            <span :class="icon"></span>
            <span>.{{ icon }}</span>
          </li>
        </ol>
      </div>
    </main>
  </div>
</template>
<script>
import icons from '../../lib/fonts/paint/variables.scss';

export default {
  name: 'Icons',
  data() {
    return {
      icons: [],
    };
  },
  created() {
    this.icons = icons;
  },
};
</script>
<style lang="scss">
  .icons {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    flex-wrap: wrap;
    list-style-type: none;
    padding-left: 0;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;

      span:last-child {
        padding-top: 0.5rem;
      }
    }
  }
</style>
