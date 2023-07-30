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
        placeholder="Digite o nome da empresa"
        v-model="startup.name"
        :isWrong="checkFields.isNameCorrect === false"
      />
      <TextArea
        id="input-statup-description"
        type="textarea"
        label="Conte-nos um pouco mais sobre a empresa"
        v-model="startup.description"
        :isWrong="checkFields.isDescriptionCorrect === false"
      />
      <label class="goals-label">
        Selecione as ODS que a empresa contribui
      </label>
      <Checkbox
        v-for="goal in startup.goalsList"
        :key="goal.name"
        :label="goal.name"
        :id="goal.name"
        v-model="goal.checked"
        :checked="goal.checked"
      />
      <span
        v-if="checkFields.isGoalsListCorrect === false"
        class="check-fields-warning"
      >
        Selecione pelo menos uma ODS
      </span>
      <Input
        id="input-statup-website"
        label="Link para o website"
        placeholder="Digite o link para o website da empresa"
        v-model="startup.website"
        :isWrong="checkFields.isWebsiteCorrect === false"
      />
      <Input
        id="input-statup-logo"
        label="Link para a logo"
        placeholder="Digite o link para a logo da empresa"
        v-model="startup.logo"
        :isWrong="checkFields.isLogoCorrect === false"
      />
      <span
        v-if="checkFields.isFieldsCorrect === false"
        class="check-fields-warning"
      >
        Preencha os campos obrigatórios
      </span>
      <Button
        label="Adicionar Startup"
        @handleClick="handleSubmit"
      />
    </form>
  </section>
</template>

<script>
import Button from '../components/Button.vue';
import Checkbox from '../components/Checkbox.vue';
import Input from '../components/Input.vue'
import TextArea from '../components/TextArea.vue'
import goalsList from '../helpers/goalsList';

export default {
  components: {
    Input,
    TextArea,
    Checkbox,
    Button,
  },
  data() {
    return {
      startup: {
        name: '',
        description: '',
        goalsList,
        website: '',
        logo: '',
      },
      checkFields: {
        isFieldsCorrect: null,
        isNameCorrect: null,
        isDescriptionCorrect: null,
        isGoalsListCorrect: null,
        isWebsiteCorrect: null,
        isLogoCorrect: null,
      }
    }
  },
  methods: {
    handleSubmit() {
      if ((this.startup.name).trim().length === 0) this.checkFields.isNameCorrect = false;
      if ((this.startup.description).trim().length === 0) this.checkFields.isDescriptionCorrect = false;
      if ((this.startup.goalsList).every(({ checked }) => checked === false)) this.checkFields.isGoalsListCorrect = false;
      if ((this.startup.website).trim().length === 0) this.checkFields.isWebsiteCorrect = false;
      if ((this.startup.logo).trim().length === 0) this.checkFields.isLogoCorrect = false;
      
      const checkFields = Object.values(this.checkFields).some((field) => field === false);

      if (checkFields) return this.checkFields.isFieldsCorrect = false;
    }
  },
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

  .page-title span {
    color: #91B31E;
  }

  .goals-label {
    width: 90%;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .page-container button {
    margin-top: 32px;
    margin-bottom: 32px;
  }

  .check-fields-warning {
    margin: 12px 0px 12px 0px;
    color: red;
    text-align: initial;
    width: 90%;
  }

  @media all and (max-width: 768px) {
    .form {
      width: 100%;
    }

    .page-container {
      margin-top: 16px;
    }

    .page-title {
      width: 100%;
    }
  }
</style>