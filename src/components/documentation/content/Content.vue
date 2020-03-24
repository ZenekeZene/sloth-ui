<template>
  <article>
    <h2>Contenido</h2>
    <Colors />
    <Headings />
    <Typography />
  </article>
</template>

<script>
import Colors from './Colors.vue';
import Headings from './Headings.vue';
import Typography from './Typography.vue';

export default {
  name: 'Content',
  components: {
    Colors,
    Headings,
    Typography,
  },
};
</script>
