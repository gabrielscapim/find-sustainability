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
          v-model="test"
        />
        <Button 
          label="Buscar"
          @handleClick="handleFindStartupByName"
        />
      </div>
      <div class="filter-container">
        <Select
          id="input-find-startup-by-ods"
          label="Buscar startup por ODS"
          :options="goals"
          v-model="goal"
        />
        <Button 
          label="Buscar"
          @handleClick="handleFindStartupByOds"
        />
      </div>
    </section>
    <section class="startups-container">
      <StartupCard 
        v-for="startup in mockStartups"
        :key="startup.name"
        :src="startup.logo"
        :name="startup.name"
        :description="startup.description"
        :website="startup.website"
      />
    </section>
  </main>
</template>

<script>
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';
import Select from '../components/Select.vue';
import StartupCard from '../components/StartupCard.vue'
import mockStartups from '../helpers/mockStartups';
import goalsList from '../helpers/goalsList';

export default {
  comments: {
    StartupCard,
    Input,
    Button,
    Select,
  },
  methods: {
    handleFindStartupByName() {
      console.log('clicou');
    },
    handleFindStartupByOds() {
      console.log('clicou');
    },
  },
  data() {
    return {
      mockStartups,
      test: '',
      goals: goalsList.map((goal) => goal.name),
      goal: '1. Erradicação da Pobreza',
    }
  }
}
</script>

<style>
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
    margin-bottom: 20px;
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
  }
</style>