<template>
  <div class="container" sticky-container>
    <main class="container p-0">
      <h1>Iconos</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem repellat minima quam
        maxime sequi reiciendis voluptatem maiores delectus odit vel, quis eos eaque fuga.
        Ipsum dolore unde exercitationem temporibus sapiente.</p>
      <div
        class="search-wrapper max-width"
        v-sticky
        sticky-offset="{top: 59, bottom: 30}"
        sticky-side="both"
      >
        <input
          type="search"
          v-model="inputSearch"
          class="max-width" block mb-0
          placeholder="Empieza a teclear para filtrar..."
        >
      </div>
      <div mt-6>
        <ol class="icons max-width" v-if="iconsFiltered.length > 0">
          <li v-for="(icon, index) in iconsFiltered" :key="`icon-${index}`"
            class="icons__item p-3"
          >
            <span :class="icon.replace('$', '')"></span>
            <span>{{ icon.replace('$', '') }}</span>
          </li>
        </ol>
        <p v-else>Lo sentimos, no encontramos nada para esta búsqueda.</p>
      </div>
    </main>
  </div>
</template>
<script>
/* eslint-disable import/no-webpack-loader-syntax */
const fontIcons = require('sass-extract-loader!../../lib/fonts/paint/variables.scss');

export default {
  name: 'Icons',
  computed: {
    iconsFiltered() {
      return this.icons.filter((icon) => icon.includes(this.inputSearch));
    },
  },
  data() {
    return {
      icons: [],
      inputSearch: '',
    };
  },
  created() {
    this.icons = Object.keys(fontIcons.global).filter(
      (icon) => !/icomoon-font-path|icomoon-font-family/.test(icon),
    );
  },
};
</script>
<style lang="scss">
  @import '../../lib/fonts/primary/font.scss';

  .search-wrapper {
    padding: 1rem;
    background-color: white;
  }

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

      &:hover {
        color: var(--color-secondary);
      }

      span:first-child {
        padding: 1rem 2rem;
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
