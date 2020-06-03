<template>
  <article>
    <subtitle-anchor id="components" :level=2>Componentes</subtitle-anchor>
    <Buttons />
    <Chips />
    <Inputs />
    <Ranges />
    <Checkboxes />
    <Radios />
    <Selects />
    <Menu />
  </article>
</template>

<script>
import Buttons from './Buttons.vue';
import Chips from './Chips.vue';
import Inputs from './Inputs.vue';
import Ranges from './Ranges.vue';
import Checkboxes from './Checkboxes.vue';
import Radios from './Radios.vue';
import Selects from './Selects.vue';
import Menu from './Menu.vue';

export default {
  name: 'Components',
  components: {
    Buttons,
    Chips,
    Inputs,
    Ranges,
    Checkboxes,
    Radios,
    Selects,
    Menu,
  },
};
</script>
