<template>
  <article>
    <a id="components"><h2>Componentes</h2></a>
    <Buttons />
    <Chips />
    <Inputs />
    <Links />
    <Menu />
  </article>
</template>

<script>
import Buttons from './Buttons.vue';
import Chips from './Chips.vue';
import Inputs from './Inputs.vue';
import Links from './Links.vue';
import Menu from './Menu.vue';

export default {
  name: 'Components',
  components: {
    Buttons,
    Chips,
    Inputs,
    Links,
    Menu,
  },
};
</script>
