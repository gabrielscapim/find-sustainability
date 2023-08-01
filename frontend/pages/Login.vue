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
        type="password"
        placeholder="Digite sua senha"
        v-model="email"
      />
      <Button 
        label="Entrar"
        @handleClick="handleSubmit"
      />
      <a href="/add-startup">Não tenho cadastro</a>
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
    min-width: 320px;
    margin: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e6e5e1;
    border-radius: 12px;
    padding: 32px;
    height: 300px;
    justify-content: center;
    margin-top: 20px;
  }

  .button {
    max-height: 48px;
    width: 100%;
  }

  .input {
    width: 100%;
    margin: 0px;
  }

  .input-container {
    width: 100%;
  }

  .form a {
    font-size: 14px;
    margin-top: 16px;
    width: 100%;
    text-align: center;
    color: grey;
    text-decoration: none;
  }
</style>