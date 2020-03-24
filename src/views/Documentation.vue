<template>
  <div class="documentation container">
    <TheSidebar class="sidebar" />
    <main class="container" style="padding: 0" sticky-container>
      <Intro />
      <GettingStarted />
      <Content />
      <Components />
      <Utilities />
    </main>
  </div>
</template>
<script>
import TheSidebar from '@/components/layout/TheSidebar.vue';
import Intro from '@/components/documentation/Intro.vue';
import GettingStarted from '@/components/documentation/GettingStarted.vue';
import Content from '@/components/documentation/content/Content.vue';
import Components from '@/components/documentation/components/Components.vue';
import Utilities from '@/components/documentation/utilities/Utilities.vue';

export default {
  name: 'Documentation',
  components: {
    TheSidebar,
    Intro,
    GettingStarted,
    Content,
    Components,
    Utilities,
  },
};
</script>
<style lang="scss">
  .documentation {
    display: flex;
  }
</style>
