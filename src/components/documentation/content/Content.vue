<template>
  <article>
    <a id="content"><h2>Contenido</h2></a>
    <Colors />
    <Headings />
    <Typography />
    <Links />
  </article>
</template>

<script>
import Colors from './Colors.vue';
import Headings from './Headings.vue';
import Typography from './Typography.vue';
import Links from './Links.vue';

export default {
  name: 'Content',
  components: {
    Colors,
    Headings,
    Typography,
    Links,
  },
};
</script>
