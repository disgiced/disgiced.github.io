<template>
  <div class="footer">
    <div class="company-info">
      <div class="logo"/>
      <div class="copyright">Copyright &copy; 2020 Disgiced</div>
    </div>
    <div class="footer-text">Website designed and developed by Joshua Walker</div>
  </div>
</template>

<style scoped>
  .footer {
    height: 50px;
    padding: 20px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .company-info {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 50px;
    height: 50px;
    background: no-repeat center url('../assets/logo-single.svg');
    background-size: contain;
  }
  .copyright {
    margin-left: 15px;
    font-size: 14px;
  }
  .footer-text {
    font-size: 14px;
  }
</style>
