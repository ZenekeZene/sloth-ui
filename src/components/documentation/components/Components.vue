<template>
  <article>
    <Subtitle id="components">Componentes</Subtitle>
    <Buttons />
    <Chips />
    <Inputs />
    <Menu />
  </article>
</template>

<script>
import Buttons from './Buttons.vue';
import Chips from './Chips.vue';
import Inputs from './Inputs.vue';
import Menu from './Menu.vue';

export default {
  name: 'Components',
  components: {
    Buttons,
    Chips,
    Inputs,
    Menu,
  },
};
</script>
