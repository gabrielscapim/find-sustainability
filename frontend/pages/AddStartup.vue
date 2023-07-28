<router>
  {
    path: '/add-startup'
  }
</router>

<template>
  <section class="page-container">
    <form class="form">
      <h1>
        Obrigado por escolher fazer a <span>diferença!</span>
      </h1>
      <Input
        id="input-statup-name"
        label="Nome"
        placeholder="Digite o nome da sua empresa"
        v-model="startup.name"
      />
      <TextArea
        id="input-statup-description"
        type="textarea"
        label="Conte-nos um pouco mais sobre a empresa"
        v-model="startup.description"
      />
      <Input
        id="input-statup-website"
        label="Link para o website"
        placeholder="Digite o link para o website da empresa"
        v-model="startup.website"
      />
      <Input
        id="input-statup-logo"
        label="Link para a logo"
        placeholder="Digite o link para a logo da empresa"
        v-model="startup.logo"
      />
      <Input
        id="input-statup-logo"
        type="number"
        label="Contato"
        placeholder="Digite um número de contato da empresa"
        v-model="startup.number"
      />
    </form>
    <img 
      src="../static/images/add-startup-image-1.jpeg" alt="add-startup"
      class="image"
    >
  </section>
</template>

<script>
import Input from '../components/Input.vue'
import TextArea from '../components/TextArea.vue'

export default {
  components: {
    Input,
    TextArea,
  },
  data() {
    return {
      startup: {
        name: '',
        description: '',
        website: '',
        logo: '',
        number: '',
      }
    }
  }
}
</script>

<style>
  .page-container {
    width: 100%;
    display: flex;
    margin-top: 48px;
  }
  .image {
    width: 50%;
  }
  .form {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .page-container h1 {
    padding-bottom: 32px;
  }

  .page-container span {
    color: #339967;
  }
</style>