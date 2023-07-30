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
  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input-container {
    margin: 0px;
    width: 25%;
  }

  .button {
    background-color: #1A614F;
    border: 1px solid #1A614F;
  }

  .button:hover {
    background-color: #91B31E;
    border: 1px solid #91B31E;
  }

  .label {
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 16px;
  }

  .input {
    font-size: 18px;
  }

  .filters-container {
    width: 100%;
    margin-bottom: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid #e6e5e1;
  }

  .filter-container {
    width: 45%;
    padding: 0px 12px 12px 12px;
  }

  .startups-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 95%;
  }

  @media all and (max-width: 1024px) {
    .filters-container {
      flex-direction: column;
    }

    .filter-container {
      width: 100%;
      padding: 0px;
    }

    .label {
      font-size: 20px;
    }

    .input {
      font-size: 14px;
    }
  }
</style>