<template>
  <section>
    <subtitle-anchor id="inputs" :level=3>Inputs</subtitle-anchor>
    <div>
      <input type="text" placeholder="Inserta texto">
      <input type="text" placeholder="Inserta texto" color-primary>
      <input type="text" placeholder="Inserta texto" color-secondary>
      <input type="text" placeholder="Inserta texto" block>
      <input type="text" placeholder="Inserta texto" boxed>
      <input type="text" placeholder="Inserta texto" boxed color-primary>
      <input type="text" placeholder="Inserta texto" boxed color-secondary>
      <div class="stacked" color-primary>
        <input type="text" placeholder=" ">
        <label>Teléfono</label>
      </div>
      <div class="stacked" color-secondary>
        <input type="text" placeholder=" ">
        <label>Teléfono</label>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Inputs',
};
</script>
