<template>
  <div class="documentation">
    <main class="container" sticky-container>
      <Intro />
      <GettingStarted />
      <Content />
      <Components />
      <Utilities />
    </main>
  </div>
</template>
<script>
import Intro from '@/components/documentation/Intro.vue';
import GettingStarted from '@/components/documentation/GettingStarted.vue';
import Content from '@/components/documentation/content/Content.vue';
import Components from '@/components/documentation/components/Components.vue';
import Utilities from '@/components/documentation/utilities/Utilities.vue';

export default {
  name: 'Documentation',
  components: {
    Intro,
    GettingStarted,
    Content,
    Components,
    Utilities,
  },
};
</script>
