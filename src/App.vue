<template>
  <div id="app">
    <TopBar/>
    <router-view class="router-top"/>
    <Footer/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    TopBar,
    Footer
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  color: var(--text);
}

body {
  margin: 0;
}

:root {
  --text: #272727;
  --border: #b7b7b7;
  --nav-link: #007adf;
}

a {
  color: var(--text);
  text-decoration: none;
}

.router-top {
  padding-top: 105px;
}
</style>
