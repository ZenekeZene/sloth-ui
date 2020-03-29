<template>
  <li class="sidebar__item">
    <a :href="`#${items.hash}`"
      class="scrollactive-item mb-0 w-100"
    >{{ capitalizeName }}</a>
    <ol class="sidebar__list">
      <li
        v-for="(item, index) in items.components"
        :key="`item-${index}`"
      >
        <scrollactive active-class="active">
          <a
            class="scrollactive-item mb-0"
            :href="`#${item.name.toLowerCase()}`"
          >{{ item.name }}</a>
        </scrollactive>
      </li>
    </ol>
  </li>
</template>
<script>
export default {
  name: 'SidebarrItem',
  props: {
    items: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    capitalizeName() {
      return this.items.name.charAt(0).toUpperCase() + this.items.name.slice(1);
    },
  },
};
</script>
