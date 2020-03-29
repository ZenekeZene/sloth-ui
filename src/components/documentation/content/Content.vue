<template>
  <article>
    <subtitle-anchor id="content" :level=2>Contenido</subtitle-anchor>
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
  alias: 'Contenido',
  components: {
    Colors,
    Headings,
    Typography,
    Links,
  },
};
</script>
