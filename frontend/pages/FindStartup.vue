<router>
  {
    path: '/find-startup'
  }
</router>


<template>
  <main class="page-container">
    <section class="filters-container">
      <div class="filter-container">
        <Input 
          id="input-find-startup-by-name"
          label="Buscar startup por nome"
          placeholder="Digite o nome da startup que deseja procurar"
          v-model="filter.startupName"
        />
        <Button
          :disabled="loading"
          label="Buscar"
          @handleClick="handleFindStartupByName"
        />
      </div>
      <span v-if="filter.isNameFilterEnabled" class="filter-advice">Filtro por nome aplicado</span>
      <Button
          v-if="filter.isNameFilterEnabled"
          label="Remover filtro"
          @handleClick="handleDeleteFilter"
        />
      <div class="filter-container">
        <Select
          id="input-find-startup-by-ods"
          label="Buscar startup por ODS"
          :options="goals"
          v-model="filter.goal"
        />
        <Button
          :disabled="loading"
          label="Buscar"
          @handleClick="handleFindStartupByOds"
        />
      </div>
      <span v-if="filter.isGoalFilterEnabled" class="filter-advice">Filtro por ODS aplicado</span>
        <Button
          v-if="filter.isGoalFilterEnabled"
          label="Remover filtro"
          @handleClick="handleDeleteFilter"
        />
    </section>
    <LoadingSpinner v-if="loading" />
    <section class="startups-container">
      <StartupCard 
        v-for="(startup, index) in startups"
        :key="index"
        :src="startup.logo"
        :name="startup.name"
        :description="startup.description"
        :website="startup.website"
      />
      <span
        v-if="startups.length === 0"
        class="result-advice"
      >
        Nenhum resultado foi encontrado, tente novamente.
      </span>
    </section>
  </main>
</template>

<script>
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';
import Select from '../components/Select.vue';
import StartupCard from '../components/StartupCard.vue'
import LoadingSpinner from '../components/LoadingSpinner';
import goalsList from '../helpers/goalsList';
import { apiRequest } from '../services/apiRequest';

export default {
  components: {
    StartupCard,
    Input,
    Button,
    Select,
    LoadingSpinner,
  },
  methods: {
    async handleFindStartupByName() {
      this.loading = true;
      const data = await apiRequest('get', `/startup/search/name?q=${this.filter.startupName}`);

      this.filter.isGoalFilterEnabled = false;
      this.filter.isNameFilterEnabled = true;
      this.loading = false;
      this.startups = data;
    },
    async handleFindStartupByOds() {
      const goal = this.filter.goal.split('')[0];
      this.loading = true;
      const data = await apiRequest('get', `/startup/search/goal?id=${goal}`);

      this.filter.isGoalFilterEnabled = true;
      this.filter.isNameFilterEnabled = false;
      this.loading = false;
      this.startups = data;
    },
    async getStartupsNoFilter() {
      this.loading = true;
      const data = await apiRequest('get', '/startup');
      this.loading = false;
      this.startups = data;
    },
    async handleDeleteFilter() {
      this.filter.isGoalFilterEnabled = false;
      this.filter.isNameFilterEnabled = false;
      await this.getStartupsNoFilter();
    }
  },
  async created() {
    await this.getStartupsNoFilter();
  },
  data() {
    return {
      startups: [],
      goals: goalsList.map((goal) => goal.name),
      filter: {
        isNameFilterEnabled: false,
        isGoalFilterEnabled: false,
        startupName: '',
        goal: '1. Erradicação da Pobreza',
      },
      loading: true,
    }
  }
}
</script>

<style>
  .page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .input-container {
    margin: 0px;
  }

  .select-container {
    margin: 0px;
  }

  .input {
    margin-top: 12px;
  }

  .select {
    margin-top: 12px;
  }

  .filters-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
  }

  .filter-container {
    width: 80%;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    padding: 12px;
  }

  .input {
    margin-right: 16px;
  }

  .select {
    margin-right: 16px;
  }

  .label {
    font-size: 16px;
    font-weight: bold;
  }

  .button {
    font-size: 14px;
  }

  .startups-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 95%;
  }

  .filter-advice {
    font-size: 12px;
    color: grey;
    width: 80%;
    text-align: center;
    margin-bottom: 20px;
  }

  .result-advice {
    width: 95%;
    margin: 0px;
    color: grey;
    font-size: 16px;
    text-align: center;
  }

  @media all and (max-width: 768px) {
    .filter-container {
      width: 95%;
      flex-direction: column;
      align-items: flex-start;
    }

    .input-container {
      width: 100%;
    }

    .select-container {
      width: 100%;
    }

    .button {
      margin-top: 16px;
    }

    .filter-advice {
      margin-bottom: 0px;
    }
  }
</style>