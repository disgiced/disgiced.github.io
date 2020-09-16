<template>
  <div class="top-bar">
    <div class="inner">
      <div class="logo"/>
      <div class="links">
        <router-link to="/">Drinks</router-link>
        <router-link to="/">About</router-link>
        <router-link to="/">Other links here?</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .top-bar {
    width: 100vw;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    box-shadow: 0px 1px 10px rgba(0,0,0,.15);
  }
  .inner {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;
  }
  .logo {
    width: 65px;
    height: 65px;
    background-image: url('../assets/logo-single.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  div a {
    padding: 0 15px;
    font-size: 18px;
  }
</style>
