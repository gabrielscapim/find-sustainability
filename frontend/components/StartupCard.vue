<template>
  <div class="card-container">
    <img
      :src="src"
      :alt="name"
      class="image"
    >
    <div class="info-container">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
    </div>
    <Button 
      label="Saiba mais"
      @handleClick="handleClick"
    />
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  components: {
    Button,
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    }
  },
  methods: {
    handleClick() {
      window.open(this.website, "_blank");
    }
  }
}
</script>

<style>
  .card-container {
    border: 1px solid #e6e5e1;
    width: 350px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1%;
    margin-bottom: 36px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-container h3 {
    width: 70%;
    margin-bottom: 16px;
    text-align: center;
  }

  .card-container p {
    margin: 16px 16px 32px 16px;
    line-height: 1.5;
    text-align: justify;
  }

  .card-container button {
    font-size: 14px;
  }

  .image {
    max-width: 200px;
  }
</style>