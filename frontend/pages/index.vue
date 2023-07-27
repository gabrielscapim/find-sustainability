<template>
  <main class="main-container">
    <article class="main-line-1-column-1">
      <h1>
        A <span>sustentabilidade</span> está a um clique
      </h1>
      <p>
        Explore nossa plataforma e descubra startups comprometidas em construir um futuro melhor para todos. Cada projeto é um elo valioso na preservação do nosso planeta.
      </p>
    </article>
    <div class="main-line-1-column-2">
      <img
        src="../static/images/main-image-1.jpg"
        alt="main-1"
        class="main-image-1"
      >
    </div>
  </main>
      
</template>

<script>
export default {
  name: ''
}
</script>

<style scoped>
  .main-container {
    display: flex;
    width: 100%;
  }

  .main-line-1-column-1 {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }


  .main-line-1-column-1 h1 {
    font-size: 32px;
    margin-bottom: 48px;
  }

  .main-line-1-column-1 span {
    color: #91B31E;
  }

  .main-line-1-column-1 p {
    font-size: 24px;
  }

  .main-line-1-column-2 {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-line-1-column-2 img {
    width: 90%;
  }

</style>
