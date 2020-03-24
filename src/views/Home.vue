<template>
  <div class="home">
    <a href="/documentation">Documentación</a>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>
<style lang="scss">
  .header,
  .content {
    max-width: 55rem;
    margin: 0 auto;
  }

  .content__inner {
    padding-left: 15rem;
  }

  .home {
    padding: 1rem;

    & > section {
      margin-bottom: 2rem;
    }

    .hljs {
      padding: 1rem;
      border-radius: 0.5rem;
      font-size: 1.5em;
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
