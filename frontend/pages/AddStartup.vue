<router>
  {
    path: '/add-startup'
  }
</router>

<template>
  <section class="page-container">
    <h1 class="page-title">
      Obrigado por escolher fazer a <span>diferença!</span>
    </h1>
    <form class="form">
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .page-title {
    width: 80%;
    padding-bottom: 32px;
    text-align: center;
  }

  .page-container span {
    color: #91B31E;
  }
</style>