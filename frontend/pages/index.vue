<template>
  <main class="main-container">
    <section class="main-section-1">
      <article class="main-section-1-column-1">
        <h1>
          A <span>sustentabilidade</span> está a um clique
        </h1>
        <p>
          Explore nossa plataforma e descubra startups comprometidas em construir um futuro melhor para todos. Cada projeto é um elo valioso na preservação do nosso planeta.
        </p>
        <div class="main-buttons-container">
          <Button label="Buscar Startup" @handleClick="testFunction"/>
          <Button label="Cadastrar Startup" @handleClick="testFunction"/>
        </div>
      </article>
      <div class="main-section-1-column-2">
        <img
          src="../static/images/main-image-1.jpg"
          alt="main-1"
          class="main-image-1"
        >
      </div>
    </section>
    <section class="main-section-2" id="about">
      <div class="main-section-2-column-1">
        <img
          src="../static/images/main-image-2-ods.png"
          alt="main-2"
        >
      </div>
      <article class="main-section-2-column-2">
        <p>
          Estamos empenhados em conectar você a startups inspiradoras que estão alinhadas aos 
          <a 
            href="https://gtagenda2030.org.br/ods/"
            target="_blank"
          >
            17 Objetivos de Desenvolvimento Sustentável da ONU.
          </a>
        </p>
        <p>
          Nossa missão é impulsionar uma mudança significativa, abrindo as portas para um ecossistema de empresas visionárias que abraçam os ODS.
        </p>
        <p>
          Seja você um investidor em busca de oportunidades éticas e transformadoras, ou alguém que simplesmente deseja apoiar iniciativas que fazem a diferença, você está no lugar certo.
        </p>
      </article>
    </section>
  </main>
</template>

<script>
import Button from '../components/Button.vue'

export default {
  name: '',
  components: {
    Button,
  },
  methods: {
    testFunction() {
      console.log('clicou');
    }
  }
}
</script>

<style scoped>
  .main-container {
    display: flex;
    flex-direction: column;
  }

  .main-section-1 {
    display: flex;
  }

  .main-container {
    display: flex;
    width: 100%;
  }

  .main-section-1-column-1 {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }


  .main-section-1-column-1 h1 {
    font-size: 32px;
    margin-bottom: 48px;
  }

  .main-section-1-column-1 span {
    color: #91B31E;
  }

  .main-section-1-column-1 p {
    font-size: 24px;
    line-height: 1.5;
  }

  .main-section-1-column-2 {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-section-1-column-2 img {
    width: 90%;
  }

  .main-section-2 {
    display: flex;
    width: 100%;
    margin-top: 36px;
    align-items: center;
  }

  .main-section-2-column-1 {
    width: 50%;
  }

  .main-section-2-column-1 img {
    width: 100%;
  }

  .main-section-2-column-2 {
    width: 50%;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
  }

  .main-section-2-column-2 a {
    color: #91B31E;
    font-weight: bold;
    text-decoration: none;
  }

  .main-section-2-column-2 p {
    width: 80%;
    line-height: 1.5;
  }

  @media all and (max-width: 1024px) {
    .main-section-1-column-1 h1 {
      font-size: 24px;
    }

    .main-section-1-column-1 p {
      font-size: 16px;
    }

    .main-section-2-column-2 {
      font-size: 16px;

    }
  }

  @media all and (max-width: 768px) {
    .main-section-1 {
      flex-direction: column-reverse;
    }

    .main-section-2 {
      flex-direction: column;
    }

    .main-section-1-column-1 {
      width: 100%;
    }

    .main-section-1-column-2 {
      width: 100%;
    }

    .main-section-2-column-1 {
      width: 100%;
    }

    .main-section-2-column-2 {
      width: 100%;
    }
  }
</style>
