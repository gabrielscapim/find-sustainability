<router>
  {
    path: '/find-startup'
  }
</router>


<template>
  <main class="page-container">
    <section class="filters-container">
      <div class="name-filter-container">
        <Input 
          id="input-find-startup-by-name"
          label="Procurar startup por nome"
          placeholder="Digite o nome da startup que deseja procurar"
          v-model="test"
        />
        <Button 
          label="Procurar"
        />
      </div>
      <div class="goal-filter-container">

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
import StartupCard from '../components/StartupCard.vue'
import mockStartups from '../helpers/mockStartups';

export default {
  comments: {
    StartupCard,
    Input,
    Button,
  },
  data() {
    return {
      mockStartups,
      test: '',
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

  .label {
    font-weight: bold;
    font-size: 24px;
  }

  .input {
    font-size: 18px;
  }

  .filters-container {
    width: 100%;
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .name-filter-container {
    width: 45%;
  }

  .goal-filter-container {
    width: 45%;
  }

  .startups-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 95%;
  }
</style>