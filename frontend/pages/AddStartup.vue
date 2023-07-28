<router>
  {
    path: '/add-startup'
  }
</router>

<template>
  <section class="page-container">
    <img 
      src="../static/images/add-startup-image-1.jpeg" alt="add-startup"
      class="image"
    >
    <form class="form">
      <Input
        id="input-statup-name"
        label="Nome"
        placeholder="Digite o nome da sua empresa"
        v-model="test"
      />
    </form>

    {{ test }}
  </section>
</template>

<script>
import Input from '../components/Input.vue'

export default {
  components: {
    Input
  },
  data() {
    return {
      test: ''
    }
  }
}
</script>

<style>
  .page-container {
    width: 100%;
    display: flex;
  }
  .image {
    width: 60%;
  }
  .form {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>