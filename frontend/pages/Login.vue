<router>
  {
    path: '/login'
  }
</router>


<template>
  <section class="page-container">
    <form>
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
 
</style>