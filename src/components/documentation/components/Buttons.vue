<template>
  <section>
    <subtitle-anchor id="buttons" :level=3>Botones:</subtitle-anchor>
    <div>
      <button>Botón</button>
      <button color-primary>Primario</button>
      <button color-secondary>Secundario</button>
      <button color-tertiary>Terciario</button>
      <br/>
      <button outlined>Outlined</button>
      <button outlined color-primary>Outlined</button>
      <button outlined color-secondary>Outlined</button>
      <button outlined color-tertiary>Outlined</button>
      <br/>
      <button hover>Hover</button>
      <button hover color-primary>Hover</button>
      <button hover color-secondary>Hover</button>
      <button hover color-tertiary>Hover</button>
      <br/>
      <button transparent>Transparente</button>
      <button transparent color-primary>Transparente</button>
      <button transparent color-secondary>Transparente</button>
      <button transparent color-tertiary>Transparente</button>
      <br/>
      <button mini>Mini</button>
      <button small>Pequeño</button>
      <button>Normal</button>
      <button big>Grande</button>
      <button huge>Enorme</button>
      <br/>
      <button disabled>Deshabilitado</button>
      <br/>
      <button block>Botón</button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Buttons',
  alias: 'Botones',
};
</script>
