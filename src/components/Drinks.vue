<template>
  <div class="wrapper">
    <section class="wide title">
      <h1>Drinks</h1>
      <p>We offer a wide range of flavours and milks!</p>
    </section>
    <section class="ex-wide flavours">
      <section class="chocolate">
        <div class="flavour-wrapper">
          <div class="flavour-title">Iced Chocolate</div>
        </div>
      </section>
      <section class="coffee">
        <div class="flavour-wrapper">
          <div class="flavour-title">Iced Coffee</div>
        </div>
      </section>
      <section class="caramel">
        <div class="flavour-wrapper">
          <div class="flavour-title">Caramel</div>
        </div>
      </section>
      <section class="strawberry">
        <div class="flavour-wrapper">
          <div class="flavour-title">Strawberry</div>
        </div>
      </section>
      <section class="vanilla">
        <div class="flavour-wrapper">
          <div class="flavour-title">Vanilla</div>
        </div>
      </section>
      <section class="mocha">
        <div class="flavour-wrapper">
          <div class="flavour-title">Mocha</div>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
section.wide {
  width: 100%;
  max-width: 1200px;
}
section.title {
  margin-bottom: 40px;
}
section.title h1 {
  font-size: 58px;
  font-weight: 800;
  margin-bottom: 10px;
}
section.title p {
  font-size: 20px;
}
section.ex-wide {
  width: 100%;
}
section.flavours {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
}
section.flavours section {
  width: 50%;
  height: 500px;
  transition: 0.2s;
}
section.flavours section:hover {
  transform: scale(1.05);
  z-index: 2;
  box-shadow: 0px 5px 30px rgba(0,0,0,.25);
}
.flavour-wrapper {
  padding: 30px 40px;
}
.flavour-title {
  font-size: 56px;
  font-weight: 800;
}
.chocolate {
  background: #63412b;
  color: #fff;
}
.coffee {
  background: #eccfa6;
}
.caramel {
  background: #eba958;
}
.strawberry {
  background: #ffb9c2;
}
.vanilla {
  background: #faedc9;
}
.mocha {
  background: #8c5bb9;
  color: #fff;
}
</style>
