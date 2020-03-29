<template>
  <div class="container">
    <main class="container p-0" sticky-container>
      <h1>Iconos</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem repellat minima quam
        maxime sequi reiciendis voluptatem maiores delectus odit vel, quis eos eaque fuga.
        Ipsum dolore unde exercitationem temporibus sapiente.</p>
      <input
        type="search"
        v-model="inputSearch"
        class="max-width" mt-8 block
        placeholder="Empieza a teclear para filtrar..."
        v-sticky :sticky-offset="80" sticky-side="top"
      >
      <div mt-6>
        <ol class="icons max-width" v-if="iconsFiltered.length > 0">
          <li v-for="(icon, index) in iconsFiltered" :key="`icon-${index}`"
            class="icons__item p-3"
          >
            <span :class="icon"></span>
            <span>{{ icon }}</span>
          </li>
        </ol>
        <p v-else>Lo sentimos, no encontramos nada para esta búsqueda.</p>
      </div>
    </main>
  </div>
</template>
<script>
import icons from '../../lib/fonts/paint/variables.scss';

export default {
  name: 'Icons',
  computed: {
    iconsFiltered() {
      return Object.keys(this.icons).filter((item) => item.includes(this.inputSearch));
    },
  },
  data() {
    return {
      icons,
      inputSearch: '',
    };
  },
};
</script>
<style lang="scss">
  @import '../../lib/fonts/primary/font.scss';

  input[type="search"].max-width,
  ol.max-width {
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    flex-wrap: wrap;
    list-style-type: none;
    padding-left: 0;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      span:first-child {
        padding: 2rem;
        font-size: 2rem;
      }

      span:last-child {
        padding-top: 0.5rem;
        font-size: 0.8rem;
        @include font('light');
      }
    }
  }
</style>
