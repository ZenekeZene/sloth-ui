<template>
  <article>
    <a id="utilities"><h2>Utilidades</h2></a>
    <Spacing />
    <Position />
  </article>
</template>

<script>
import Spacing from './Spacing.vue';
import Position from './Position.vue';

export default {
  name: 'Utilities',
  components: {
    Spacing,
    Position,
  },
};
</script>
