<template>
  <header class="header-container">
    <nav>
      <div class="header-line-1">
        <a href="/">Logo</a>
      </div>
      <div class="header-line-2">
        <a class="header-option" href="/">Sobre</a>
        <a class="header-option" href="/">Buscar Startup</a>
        <a class="header-option" href="/">Cadastrar Startup</a>
      </div>
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
    padding: 24px 20px 24px 20px;
  }

  .header-line-2 {
    margin-left: 10%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .header-container nav {
    display: flex;
  }

  .header-option {
    color: black;
    text-decoration: none;
    font-weight: 600;
    margin-right: 5%;
  }

  .header-option:hover {
    color: #6A0FB2;
  }

  @media all and (max-width: 768px) {
    .header-container nav {
      flex-direction: column;
    }

    .header-line-1 {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header-line-2 {
      margin-left: 0%;
      margin-top: 24px;
      width: 100%;
      display: flex;
      justify-content: center;
      overflow: auto;
      white-space: nowrap;
      overflow-x: scroll;
    }

}
</style>