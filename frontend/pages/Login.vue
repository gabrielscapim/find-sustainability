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
        v-model="password"
      />
      <LoadingSpinner v-if="loading" />
      <span
        v-if="requestFailed"
        class="request-failed"
      >
        Ocorreu um erro, tente novamente.
      </span>
      <span v-if="loginFailed">E-mail ou senha incorretos</span>
      <Button
        :disabled="loading"
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
import { loginRequest } from '../services/apiRequest';
import LoadingSpinner from '../components/LoadingSpinner';

export default {
  components: {
    Input,
    Button,
    LoadingSpinner,
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const startup = await loginRequest(this.email, this.password);

        if (startup) {
          this.loading = false;
          return this.$router.push(`/add-startup?id=${startup.id}`);
        }

        this.loading = false;
        return this.loginFailed = true;
      } catch (error) {
        this.requestFailed = true;
        console.log(error);
      }
    }
  },
  middleware: 'authMiddleware',
  data() {
    return {
      email: '',
      password: '',
      loginFailed: false,
      loading: false,
      requestFailed: false,
    }
  },
}
</script>

<style scoped>
  .page-container {
    display: flex;
    height: 90vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .page-container h1 {
    text-align: center;
  }

  .page-container span {
    color: #91B31E;
  }

  .form {
    max-width: 400px;
    min-width: 320px;
    margin: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e6e5e1;
    border-radius: 12px;
    padding: 32px;
    max-height: 300px;
    height: 300px;
    justify-content: center;
    margin-top: 20px;
  }

  .form span {
    margin-bottom: 16px;
    font-size: 14px;
    color: red;
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