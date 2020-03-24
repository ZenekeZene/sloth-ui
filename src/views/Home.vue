<template>
  <div class="home">
    <h1>SLOTH UI</h1>
    <div class="hero">
      <div class="hero__inner">
        <img
          src="https://logopond.com/logos/27b2b54c837411e9d3056bdf369df840.png">
      </div>
    </div>
    <p style="margin-top: 20rem;">Librería de estilos y componentes (próximamente)
      usados para el juego Frontend-ORAMA.
      <br/>Consiste en responder preguntas con temática front-end,
      competir con tus amigos y compartir los resultados.
    </p>
    <h2>Empezar</h2>
    <article>
      <h3>Cómo instalar:</h3>
      <section>
        <pre class="hljs">npm install --save frontend-orama-ui</pre>
      </section>
      <h3>Cómo usarlo:</h3>
      <section></section>
    </article>
    <h2>Contenido</h2>
    <article>
      <h3>Títulos:</h3>
      <section>
        <h1>Heading</h1>
        <h2>Heading</h2>
        <h3>Heading</h3>
        <h4>Heading</h4>
        <h5>Heading</h5>
        <h6>Heading</h6>
      </section>
    </article>
    <article>
      <h3>Fuente:</h3>
      <section>
        <p font-extra-bold>Museo Sans Rounded 900</p>
        <p font-bold>Museo Sans Rounded 700</p>
        <p font-regular>Museo Sans Rounded 500</p>
        <p font-light>Museo Sans Rounded 100</p>
      </section>
    </article>
    <article>
      <h3>Colores:</h3>
      <section>
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
    </article>
    <h2>Componentes</h2>
    <article>
      <h3>Inputs:</h3>
      <section>
        <input type="text" placeholder="Inserta texto">
        <input type="text" placeholder="Inserta texto" color-primary>
        <input type="text" placeholder="Inserta texto" color-secondary>
        <input type="text" placeholder="Inserta texto" block>
      </section>
    </article>
    <article>
      <h3>Enlaces:</h3>
      <section>
        <a href="">Enlace</a>
        <a color-primary href="">Enlace</a>
        <a color-secondary href="">Enlace</a>
      </section>
    </article>
    <article>
      <h3>Botones:</h3>
      <section>
        <button>Boton</button>
        <button color-primary>Primario</button>
        <button color-secondary>Secundario</button>
        <button color-tertiary>Terciario</button>
        <button big>Grande</button>
        <button small>Pequeño</button>
        <button transparent>Transparente</button>
        <button transparent color-primary>Transparente</button>
        <button transparent color-secondary>Transparente</button>
        <button block>Boton</button>
      </section>
    </article>
    <article>
      <h3>Chips</h3>
      <section>
        <span class="chip">Item</span>
        <span class="chip" color-primary>Item</span>
        <span class="chip" color-secondary>Item</span>
        <span class="chip" color-tertiary>Item</span>
      </section>
    </article>
    <article>
      <h3>Menú:</h3>
      <section>
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
    </article>
    <h2>Utilidades</h2>
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

    .hljs {
      padding: 1rem;
      border-radius: 0.5rem;
      font-size: 1.5em;
    }

    .hero {
      position: absolute;
      top: 4rem;
      left: 0;
      width: 100%;
      background: #fbd55a;

      &__inner {
        max-width: 63rem;
        margin: 0 auto;
      }
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
