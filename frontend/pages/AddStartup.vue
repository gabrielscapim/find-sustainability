<router>
  {
    path: '/add-startup'
  }
</router>

<template>
  <section class="page-container">
    <img 
      src="../static/images/add-startup-image-1.jpeg" alt="add-startup"
      class="image"
    >
    <form class="form">
      Hello World
    </form>
  </section>
</template>

<script>
export default {

}
</script>

<style>
  .page-container {
    width: 100%;
    display: flex;
  }
  .image {
    width: 60%;
  }
  .form {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>