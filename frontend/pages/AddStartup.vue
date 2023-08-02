<router>
  {
    path: '/add-startup'
  }
</router>

<template>
  <section class="page-container">
    <h1 v-if="startupHasBeenAdded">Startup adicionada com sucesso!</h1>
    <h1 v-if="startupHasBeenEddited">Startup editada com sucesso!</h1>
    <form
      class="form" 
      v-if="(!startupHasBeenAdded && mode === 'add') || (!startupHasBeenEddited && mode === 'edit') "
    >
      <Input
        id="input-statup-name"
        label="Nome"
        placeholder="Digite o nome da empresa"
        v-model="startup.name"
        :isWrong="checkFields.isNameCorrect === false"
        maxLenght="45"
        :modelValue="startup.name"
      />
      <Input
        v-if="mode === 'add'"
        id="input-statup-email"
        label="E-mail"
        placeholder="Digite o e-mail da empresa"
        v-model="startup.email"
        :isWrong="checkFields.isEmailCorrect === false"
        maxLenght="90"
        :modelValue="startup.email"
      />
      <Input
        v-if="mode === 'add'"
        id="input-statup-password"
        label="Senha"
        type="password"
        placeholder="Digite uma senha para o cadastro"
        v-model="startup.password"
        :isWrong="checkFields.isPasswordCorrect === false"
        maxLenght="45"
        :modelValue="startup.password"
      />
      <TextArea
        id="input-statup-description"
        type="textarea"
        label="Conte-nos um pouco mais sobre a empresa"
        v-model="startup.description"
        :isWrong="checkFields.isDescriptionCorrect === false"
        maxLenght="255"
        :modelValue="startup.description"
      />
      <span
        class="fields-advice"
      >
        {{ 255 - this.startup.description.length }}
      </span>
      <div v-if="mode === 'add'" class="goals-container">
        <h2 class="goals-label">
          Selecione as ODS que a empresa contribui
        </h2>
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
      </div>
      <Input
        id="input-statup-website"
        label="Link para o website"
        placeholder="Digite o link para o website da empresa"
        v-model="startup.website"
        :isWrong="checkFields.isWebsiteCorrect === false"
        maxLenght=255
        :modelValue="startup.website"
      />
      <span
        class="fields-advice"
      >
        Preencha no modelo: https://www.site.com/
      </span>
      <Input
        id="input-statup-logo"
        label="Link para a logo"
        placeholder="Digite o link para a logo da empresa"
        v-model="startup.logo"
        :isWrong="checkFields.isLogoCorrect === false"
        maxLenght="255"
        :modelValue="startup.logo"
      />
      <span
        class="fields-advice"
      >
        Preencha no modelo: https://www.site.com/
      </span>
      <span
        v-if="checkFields.isFieldsCorrect === false"
        class="check-fields-warning"
      >
        Preencha os campos obrigatórios
      </span>
      <span
        v-if="checkFields.startupAlreadyExists"
        class="check-fields-warning"
      >
        Startup já cadastrada
      </span>
      <span
        v-if="requestFailed"
        class="check-fields-warning"
      >
        Ocorreu um erro, tente novamente.
      </span>
      <div class="buttons-container">
        <Button
          :disabled="loading"
          v-if="mode === 'edit'"
          label="Sair da conta"
          @handleClick="logout"
        />
        <Button
          :disabled="loading"
          :label="mode === 'add' ? 'Adicionar Startup' : 'Salvar Alterações'"
          @handleClick="handleSubmit"
        />
      </div>
      <LoadingSpinner v-if="loading" />
    </form>
  </section>
</template>

<script>
import Button from '../components/Button.vue';
import Checkbox from '../components/Checkbox.vue';
import Input from '../components/Input.vue'
import TextArea from '../components/TextArea.vue'
import LoadingSpinner from '../components/LoadingSpinner';
import goalsList from '../helpers/goalsList';
import { apiRequest } from '../services/apiRequest';
import resetLocalStorage from '../helpers/resetLocalStorage';

export default {
  components: {
    Input,
    TextArea,
    Checkbox,
    Button,
    LoadingSpinner,
  },
  middleware: 'addStartupMiddleware',
  async created() {
    const startupId = this.$route.query.id;

    if (startupId) {
      try {
        const startupToEdit = await apiRequest('get', `/startup/${startupId}`);

        this.mode = 'edit';
        this.startup = startupToEdit;
      } catch (error) {
        this.$router.push('/login');
        console.log(error);
      }
    }
  }, 
  data() {
    return {
      mode: 'add',
      startup: {
        name: '',
        email: '',
        password: '',
        description: '',
        goalsList,
        website: '',
        logo: '',
      },
      loading: false,
      requestFailed: false,
      checkFields: {
        isFieldsCorrect: null,
        isNameCorrect: null,
        isDescriptionCorrect: null,
        isGoalsListCorrect: null,
        isWebsiteCorrect: null,
        isLogoCorrect: null,
        isEmailCorrect: null,
        isPasswordCorrect: null,
        startupAlreadyExists: false,
      },
      startupHasBeenAdded: false,
      startupHasBeenEddited: false,
    }
  },
  methods: {
    checkFormInputs() {
      if ((this.startup.name).trim().length === 0) this.checkFields.isNameCorrect = false;
      if ((this.startup.email).trim().length === 0) this.checkFields.isEmailCorrect = false;
      if ((this.startup.password).trim().length === 0) this.checkFields.isPasswordCorrect = false;
      if ((this.startup.description).trim().length === 0) this.checkFields.isDescriptionCorrect = false;
      if ((this.startup.goalsList).every(({ checked }) => checked === false)) {
        this.checkFields.isGoalsListCorrect = false;
      } else {
        this.checkFields.isGoalsListCorrect = true;
      }
      if ((this.startup.website).trim().length === 0) this.checkFields.isWebsiteCorrect = false;
      if ((this.startup.logo).trim().length === 0) this.checkFields.isLogoCorrect = false;
    },
    checkAllInputs() {
      const { name, description, website, logo, password, email } = this.startup;
      const stringInputs = [name, description, website, logo, password, email];
      const isStringInputsCorrect = stringInputs.every((input) => (
        input.trim().length !== 0
      ));

      if (isStringInputsCorrect && this.checkFields.isGoalsListCorrect) {
        return this.checkFields.isFieldsCorrect = true;
      }
      
      return this.checkFields.isFieldsCorrect = false;
    },
    async addStartup() {
      try {
        this.checkFormInputs();
        this.checkAllInputs();
        
        if (this.checkFields.isFieldsCorrect) {
          this.loading = true;
          const goals = this.startup.goalsList
          .map(({ checked, name }) => {
            if (checked) return { id: Number(name.split('')[0]), name }
          })
          .filter((goal) => goal !== undefined);
    
          const { name, description, website, logo, email, password } = this.startup;
          const newStartup = { name, description, website, logo, goals, email, password };

          await apiRequest('post', '/startup', newStartup);
          this.startupHasBeenAdded = true;
          this.loading = false;
        } 
      } catch (error) {
        const startupAlreadyExistsMessage = "Startup already exist";
        this.loading = false;

        if (error.response && error.response.data.message === startupAlreadyExistsMessage) {
          this.checkFields.startupAlreadyExists = true;
        } else {
          this.requestFailed = true;
        }
        console.log(error);
      }
    },
    async updateStartup() {
      try {
        const isInputsCorrect = Object.values(this.startup).every((input) => (
          String(input).trim().length !== 0
        ));
        
        if (!isInputsCorrect) return this.checkFields.isFieldsCorrect = false;

        if (isInputsCorrect) {
          this.loading = true;
          const { email, id, ...startupToUpdate } = this.startup;
  
          await apiRequest('put', `/startup/${id}`, startupToUpdate);
          this.startupHasBeenEddited = true;
          this.loading = false;
        }
      } catch (error) {
        this.requestFailed = true;
        console.log(error);
      }
    },
    async handleSubmit() {
      if (this.mode === 'add') return this.addStartup();
      return this.updateStartup();
    },
    async logout() {
      this.$router.push('login');
      resetLocalStorage();
    }
  },
}
</script>

<style>
  .page-container {
    width: 100%;
    display: flex;
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

  .goals-container {
    width: 90%;
  }

  .goals-label {
    width: 90%;
    font-size: 16px;
    font-weight: 100;
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

  .fields-advice {
    color: grey;
    text-align: initial;
    font-size: 12px;
    width: 90%;
    margin-bottom: 12px;
  }

  .buttons-container {
    display: flex;
    width: 90%;
    justify-content: space-between;
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