<template>
  <div class="top-bar">
    <div class="inner">
      <router-link to="/"><div class="logo"/></router-link>
      <div class="links">
        <router-link to="/drinks">Drinks</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/other">Environment</router-link>
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
    top: 0;
    z-index: 10;
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
  .logo:hover {
    transform: rotate(10deg) scale(1.1);
  }
  div a {
    padding: 0 15px;
    font-size: 18px;
  }
  .router-link-active {
    font-weight: bold;
  }
</style>
