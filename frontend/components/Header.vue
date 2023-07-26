<template>
  <header class="header-container">
    <nav>
      <NuxtLink to="/">Logo</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/">Buscar Startup</NuxtLink>
          <NuxtLink to="/">Cadastrar Startup</NuxtLink>
          <NuxtLink to="/">Sobre</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header-container {
    border: 1px solid red;
    font-family: 'MuseoSansRounded-300';
  }
</style>