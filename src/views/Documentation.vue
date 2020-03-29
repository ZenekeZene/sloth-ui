<template>
  <div class="container" d-flex>
    <TheSidebar class="sidebar" />
    <main class="container p-0">
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
import GettingStarted from '@/components/documentation/getting-started/GettingStarted.vue';
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
