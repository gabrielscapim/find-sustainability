<template>
  <div class="loading-spinner">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    width: 25px;
    height: 25px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #91B31E;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 16px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
