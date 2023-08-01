<template>
  <footer class="footer-container">
    <div class="signature">
      <span>Developed by</span>
      <a 
        href="https://www.linkedin.com/in/gabrielscapim/"
        target="_blank"
      >
        Gabriel Scapim
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .footer-container {
    border-top: 1px solid #e6e5e1;
    display: flex;
    justify-content: center;
    margin-top: 24px;
    padding: 24px;
  }

  .signature a {
    color: black;
    text-decoration: none;
  }
</style>