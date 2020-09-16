<template>
  <section class="entice-section-top">
    <div class="inner right drinks-range">
      <div class="titles">
        <div class="title-sub">Flavoured milk</div>
        <div class="main-title">in disguise</div>
      </div>
      <router-link to="/" class="nav-link">View our range of flavours</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="css" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inner {
  max-width: 1200px;
  width: 100%;
  padding: 50px 25px;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right {
  background-position: right;
}
.entice-section-top .inner .title-sub {
  font-size: 52px;
}
.entice-section-top .inner .main-title {
  font-size: 96px;
  font-weight: 900;
}
.titles {
  margin-bottom: 40px;
}
.nav-link {
  font-weight: 600;
  font-size: 22px;
  color: var(--nav-link)
}
.nav-link:before {
  content: '>';
  margin-right: 10px;
}
.drinks-range {
  background-image: url('../assets/bottle.png');
  height: 350px;
}
</style>
