<template>
  <article>
    <subtitle-anchor id="getting-started" :level=2>Cómo empezar</subtitle-anchor>
    <Install />
    <HowUse />
  </article>
</template>
<script>
import Install from './Install.vue';
import HowUse from './HowUse.vue';

export default {
  name: 'GettingStarted',
  components: {
    Install,
    HowUse,
  },
};
</script>
