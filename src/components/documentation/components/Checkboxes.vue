<template>
  <section>
    <subtitle-anchor id="checkboxes" :level=3>Checkboxes</subtitle-anchor>
    <div>
      <div block>
        <input type="checkbox" id="test-checkbox"><label for="test-checkbox">Checkbox normal</label>
      </div>
      <div block>
        <input type="checkbox" disabled><label>Checkbox disabled</label>
      </div>
      <div inline>
        <input type="checkbox"><label>1</label>
      </div>
      <div inline>
        <input type="checkbox"><label>2</label>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Checkboxes',
};
</script>
