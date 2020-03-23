<template>
  <div class="home">
    <h1>Frontend-ORAMA-UI</h1>
    <p>Librería de estilos y componentes (próximamente) usados para el juego
      Frontend-ORAMA.
      <br/>Consiste en responder preguntas con temática front-end,
      competir con tus amigos y compartir los resultados.
    </p>
    <section>
      <h2>Cómo instalar:</h2>
      <pre class="hljs">npm install --save frontend-orama-ui
      </pre>
    </section>
    <section>
      <h2>Títulos:</h2>
      <h1>Heading</h1>
      <h2>Heading</h2>
      <h3>Heading</h3>
      <h4>Heading</h4>
      <h5>Heading</h5>
      <h6>Heading</h6>
    </section>
    <section>
      <h2>Fuente:</h2>
      <p font-extra-bold>Museo Sans Rounded 900</p>
      <p font-bold>Museo Sans Rounded 700</p>
      <p font-regular>Museo Sans Rounded 500</p>
      <p font-light>Museo Sans Rounded 100</p>
    </section>
    <section>
      <h2>Colores:</h2>
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
    </section>
    <section>
      <h2>Inputs:</h2>
      <input type="text" placeholder="Inserta texto">
      <input type="text" placeholder="Inserta texto" color-primary>
      <input type="text" placeholder="Inserta texto" color-secondary>
      <input type="text" placeholder="Inserta texto" block>
    </section>
    <section>
      <h2>Enlaces:</h2>
      <a href="">Enlace</a>
      <a color-primary href="">Enlace</a>
      <a color-secondary href="">Enlace</a>
    </section>
    <section>
      <h2>Botones:</h2>
      <button>Boton</button>
      <button color-primary>Primario</button>
      <button color-secondary>Secundario</button>
      <button big>Grande</button>
      <button transparent>Transparente</button>
      <button transparent color-primary>Transparente</button>
      <button transparent color-secondary>Transparente</button>
      <button block>Boton</button>
    </section>
    <section>
      <h2>Menú:</h2>
      <svg
        class="ham hamRotate ham7 icon --right"
        viewBox="0 0 100 100"
        width="80"
      >
        <path
          class="line top"
          d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
        />
        <path class="line middle" d="m 70,50 h -40" />
        <path
          class="line bottom"
          d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,
          -9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
        />
      </svg>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  },
};
</script>
<style lang="scss">
  .home {
    max-width: 55rem;
    margin: 0 auto;
    padding: 1rem;

    & > section {
      margin-bottom: 2rem;
    }
  }
</style>
