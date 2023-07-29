<router>
  {
    path: '/find-startup'
  }
</router>


<template>
  <section>
    <StartupCard 
      title="Nome da empresa"
      description="Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis."
      src='https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png'
      website="https://www.google.com.br"
    />
    <StartupCard 
      title="Nome da empresa"
      description="Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis."
      src='https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png'
      website="https://www.google.com.br"
    />
    <StartupCard 
      title="Nome da empresa"
      description="Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis."
      src='https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png'
      website="https://www.google.com.br"
    />
    <StartupCard 
      title="Nome da empresa"
      description="Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis."
      src='https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png'
      website="https://www.google.com.br"
    />
    <StartupCard 
      title="Nome da empresa"
      description="Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis."
      src='https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png'
      website="https://www.google.com.br"
    />
  </section>
  
</template>

<script>
import StartupCard from '../components/StartupCard.vue'

export default {
  comments: {
    StartupCard,
  }
}
</script>

<style>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>