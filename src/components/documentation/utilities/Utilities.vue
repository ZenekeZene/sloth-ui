<template>
  <article>
    <subtitle-anchor id="utilities" :level=2>Utilidades</subtitle-anchor>
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
