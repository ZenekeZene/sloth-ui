<template>
<aside class="sidebar">
  <nav class="menu">
    <scrollactive :offset="80">
      <ol>
        <SidebarItem :items="items.gettingStarted" />
        <SidebarItem :items="items.content" />
        <SidebarItem :items="items.components" />
        <SidebarItem :items="items.utilities" />
      </ol>
    </scrollactive>
  </nav>
</aside>
</template>
<script>
import SidebarItem from './SidebarItem.vue';
import GettingStarted from '../documentation/getting-started/GettingStarted.vue';
import Components from '../documentation/components/Components.vue';
import Content from '../documentation/content/Content.vue';
import Utilities from '../documentation/utilities/Utilities.vue';

export default {
  name: 'TheSidebar',
  components: {
    SidebarItem,
  },
  data() {
    return {
      items: null,
    };
  },
  created() {
    this.items = {
      gettingStarted: {
        hash: 'getting-started',
        name: 'Cómo empezar',
        components: GettingStarted.components,
      },
      content: {
        hash: 'content',
        name: 'Contenido',
        components: Content.components,
      },
      components: {
        hash: 'components',
        name: 'Componentes',
        components: Components.components,
      },
      utilities: {
        hash: 'utilities',
        name: 'Utilidades',
        components: Utilities.components,
      },
    };
  },
};
</script>
<style lang="scss">
  @import '../../../lib/fonts/primary/font.scss';
  .sidebar {
    display: inline-block;
    width: 10rem !important;
    padding: 3.8rem 0 1rem 0;

    & &__list {
      padding-left: 1em;
    }

    &__item {
      margin-bottom: 2rem;
    }
  }

  .menu {
    position: sticky;
    top: 5rem;

    ol {
      list-style-type: none;
      padding-left: 0;
    }

    .is-active {
      @include font('bold');
    }
  }
</style>
