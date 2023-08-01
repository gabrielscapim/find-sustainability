<router>
  {
    path: '/login'
  }
</router>


<template>
  <section class="page-container">
    <h1 class="page-title">
      Obrigado por escolher fazer a <span>diferença!</span>
    </h1>
    <form class="form">
      <Input
        id="input-email-login"
        label="E-mail"
        placeholder="Digite seu e-mail"
        v-model="email"
      />
      <Input
        id="input-passord-login"
        label="Senha"
        placeholder="Digite sua senha"
        v-model="email"
      />
      <Button 
        label="Entrar"
        @handleClick="handleSubmit"
      />
    </form>
  </section>
</template>

<script>
import Button from '../components/Button.vue';
import Input from '../components/Input.vue'

export default {
  components: {
    Input,
    Button,
  },
  methods: {
    handleSubmit() {
      console.log('clicou');
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  }
}
</script>

<style>
  .page-container {
    display: flex;
    height: 90vh;
    flex-direction: column;
    align-items: center;
  }

  .page-container h1 {
    text-align: center;
  }

  .page-container span {
    color: #91B31E;
  }

  .form {
    min-width: 350px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e6e5e1;
    border-radius: 12px;
    padding: 20px;
    height: 300px;
    justify-content: center;
    margin-top: 20px;
  }

  .button {
    max-height: 48px;
    max-width: 85px;
  }

  .input {
    width: 100%;
  }
</style>