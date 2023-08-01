<template>
  <header class="header-container">
    <nav>
      <div class="header-line-1">
        <a href="/">
          <img 
            src="../static/images/logo-header.png"
            alt="logo"
            class="logo-image"
          >
        </a>
      </div>
      <div class="header-line-2">
        <a class="header-option" href="/#about">Sobre</a>
        <a class="header-option" href="/find-startup">Buscar Startup</a>
        <a class="header-option" href="/add-startup">Cadastrar Startup</a>
        <a class="header-option" href="/login">Login</a>
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
    align-items: center;
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
    color: #91B31E;
  }

  .logo-image {
    width: 300px;
  }

  @media all and (max-width: 828px) {
    .header-container nav {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .header-line-1 {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header-line-2 {
      margin-top: 24px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  @media all and (max-width: 524px) {
    .header-line-2 {
      margin-left: 0%;
      width: 95%;
      display: inline;
      overflow: auto;
      white-space: nowrap;
    }

    .header-option {
      display: inline-block;
      text-align: center;
      padding: 14px;
      margin-right: 0%;
    }
  }
</style>