<template>
  <section>
    <subtitle-anchor id="radio" :level=3>Radio buttons</subtitle-anchor>
    <div>
      <div block>
        <input type="radio" id="huey" name="drone" value="huey" checked>
        <label for="huey">Huey</label>
      </div>
      <div block>
        <input type="radio" id="dewey" name="drone" value="dewey">
        <label for="dewey">Dewey</label>
      </div>
      <div block>
        <input type="radio" id="louie" name="drone" value="louie" disabled>
        <label for="louie">Louie</label>
      </div>
    </div>
    <div>
      <div class="radio-button">
        <input type="radio" id="huey2" name="drone" value="huey">
        <label for="huey2">Huey</label>
      </div>
      <div class="radio-button" color-primary>
        <input type="radio" id="dewey2" name="drone" value="huey">
        <label for="dewey2">Huey</label>
      </div>
      <div class="radio-button" color-tertiary>
        <input type="radio" id="louie2" name="drone" value="huey">
        <label for="louie2">Huey</label>
      </div>
    </div>

    <div>
      <div class="radio-button" fill>
        <input type="radio" id="huey2" name="drone" value="huey">
        <label for="huey2">Huey</label>
      </div>
      <div class="radio-button" color-primary fill>
        <input type="radio" id="dewey2" name="drone" value="huey">
        <label for="dewey2">Huey</label>
      </div>
      <div class="radio-button" color-tertiary fill>
        <input type="radio" id="louie2" name="drone" value="huey">
        <label for="louie2">Huey</label>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Checkboxes',
};
</script>
