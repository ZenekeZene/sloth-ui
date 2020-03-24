<template>
  <div class="home">
    <TheHero />
    <main class="content" sticky-container>
      <TheSidebar v-sticky />
      <div class="content__inner">
        <Intro />
        <GettingStarted />
        <Content />
        <Components />
        <h2>Utilidades</h2>
      </div>
    </main>
  </div>
</template>

<script>
import TheHero from '@/components/layout/TheHero.vue';
import TheSidebar from '@/components/layout/TheSidebar.vue';
import Intro from '@/components/documentation/Intro.vue';
import GettingStarted from '@/components/documentation/GettingStarted.vue';
import Content from '@/components/documentation/content/Content.vue';
import Components from '@/components/documentation/components/Components.vue';

export default {
  name: 'Home',
  components: {
    TheSidebar,
    TheHero,
    Intro,
    GettingStarted,
    Content,
    Components,
  },
  data() {
    return {
      sideOffset: {
        bottom: 100,
        left: 0,
      },
    };
  },
};
</script>
<style lang="scss">
  .header,
  .content {
    max-width: 55rem;
    margin: 0 auto;
  }

  .content__inner {
    padding-left: 15rem;
  }

  .home {
    padding: 1rem;

    & > section {
      margin-bottom: 2rem;
    }

    .hljs {
      padding: 1rem;
      border-radius: 0.5rem;
      font-size: 1.5em;
    }

    & > h2 {
      margin-bottom: 2rem;
      padding: 1rem;
      background-color: #ececec;
    }

    & > article {
      margin-bottom: 1rem;
      padding: 0 2rem;

      section {
        padding: 1rem 3rem;
      }
    }

    article > h3 {
      margin-left: -1.5rem;

      &:before {
        content: '';
        display: inline-block;
        width: 1rem;
        height: 0.5rem;
        margin: 0 0.5rem;
        background-color: #ececec;
        border-radius: 0.2rem;
      }
    }
  }
</style>
