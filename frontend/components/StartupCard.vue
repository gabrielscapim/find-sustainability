<template>
  <div class="card-container">
    <img :src="src" :alt="title" >
    <div>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
    <Button label="Saiba mais" />
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
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  }
}
</script>

<style>
  .card-container {
    border: 1px solid red;
  }
</style>