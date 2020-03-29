<template>
<aside class="sidebar">
  <nav class="menu">
    <scrollactive :offset="80">
      <ol>
        <li class="sidebar__item">
          <a href="#getting-started"
            class="scrollactive-item p-2 mb-0 w-100"
          >Empezar</a>
          <ol class="sidebar__list">
            <li>Cómo instalar</li>
            <li>Cómo usarlo</li>
          </ol>
        </li>

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
      content: {
        name: 'content',
        components: Content.components,
      },
      components: {
        name: 'components',
        components: Components.components,
      },
      utilities: {
        name: 'utilities',
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
