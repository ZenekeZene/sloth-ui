<template>
  <section>
    <subtitle-anchor id="colors" :level=3>Colores</subtitle-anchor>
    <div>
      <div class="chip" column>
        <span>Default:</span>
        <span>{{ colorDefault }}</span>
      </div>
      <div class="chip" column color-primary>
        <span>Primario:</span>
        <span>{{ colorPrimary }}</span>
      </div>
      <div class="chip" column color-secondary>
        <span>Secundario:</span>
        <span>{{ colorSecondary }}</span>
      </div>
      <div class="chip" column color-tertiary>
        <span>Terciario:</span>
        <span>{{ colorTertiary }}</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Colors',
  computed: {
    style() {
      return getComputedStyle(document.body);
    },
    colorDefault() {
      return this.style.getPropertyValue('--color-default');
    },
    colorPrimary() {
      return this.style.getPropertyValue('--color-primary');
    },
    colorSecondary() {
      return this.style.getPropertyValue('--color-secondary');
    },
    colorTertiary() {
      return this.style.getPropertyValue('--color-tertiary');
    },
  },
};
</script>
