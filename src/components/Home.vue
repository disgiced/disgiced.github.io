<template>
  <div class="wrapper">
    <section class="entice-section-top">
      <div class="inner right drinks-range">
        <div class="titles">
          <div class="title-sub">Flavoured milk</div>
          <div class="main-title">in disguise</div>
        </div>
        <router-link to="/" class="nav-link">View our range of flavours</router-link>
      </div>
    </section>
    <section class="alt-milks-section">
      <div class="inner left alt-milks">
        <div class="titles">
          <div class="main-title normal">Tastes like regular milk</div>
          <div class="title-sub normal">Our drinks taste just like regular cow's milk, even though we use alternatives like almond milk.</div>
        </div>
        <router-link to="/" class="nav-link">Learn more</router-link>
      </div>
    </section>
    <section class="eco-friendly-section">
      <div class="inner right eco-friendly">
        <div class="titles">
          <div class="main-title normal">We're eco-friendly</div>
          <div class="title-sub normal">We actually care about the environment, just like you! We strive to make our products as low-impact as possible by using 100% recycled materials for our packaging.</div>
        </div>
        <router-link to="/" class="nav-link">Learn more</router-link>
      </div>
    </section>
  </div>
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
.entice-section-top {
  background-color: #ffedd4;
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
  align-items: flex-start;
  text-align: left;
}
.left {
  background-position: left;
  align-items: flex-end;
  text-align: right;
}
.entice-section-top .inner .title-sub {
  font-size: 52px;
}
.entice-section-top .inner .main-title {
  font-size: 96px;
  font-weight: 900;
}
.inner .title-sub.normal {
  font-size: 18px;
  margin-top: 25px;
  max-width: 640px;
}
.inner .main-title.normal {
  font-size: 56px;
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
.nav-link:after {
  content: '>';
  margin-left: 10px;
}
.drinks-range {
  background-image: url('../assets/bottle.png');
  height: 425px;
}
.alt-milks {
  background-image: url('../assets/almond.png');
  height: 300px;
}
.eco-friendly {
  height: 300px;
  color: #fff;
}
.eco-friendly-section {
  background: linear-gradient(to right, rgba(0,0,0,.65), rgba(0,0,0,.1)), url('../assets/eco.jpg');
  background-size: cover;
  background-position: center;
}
.eco-friendly a {
  color: #84ec7a;
}
</style>
