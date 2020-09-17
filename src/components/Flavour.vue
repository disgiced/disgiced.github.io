<template>
  <div class="wrapper">
    <section class="wide title">
      <div class="description">
        <h1>{{ flavours[flavour].name }}</h1>
        <p>{{ flavours[flavour].desc }}</p>
      </div>
      <div class="bottle-img">
        <img draggable="false" class="bottle" :src="'/static/' + flavour + '-bottle.png'"/>
        <img draggable="false" class="bottle-part" :src="'/static/' + flavour + '.png'"/>
      </div>
    </section>
    <section class="sustainable normal wider" :class="flavour + '-bg'">
      <div class="inner left">
        <div class="titles">
          <div class="main-title normal">100% sustainable</div>
          <div class="title-sub normal">Our {{ flavours[flavour].ingredient }} comes from 100% sustainable sources, so you can be sure you're not contributing to your carbon footprint. We care about the environment, just like you! Thank you for looking after our planet.</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['flavour'],
  mounted () {
    console.log(this)
  },
  data () {
    return {
      flavours: {
        chocolate: {
          name: 'Iced Chocolate',
          desc: `Made using 100% sustainable cocoa, our Iced Chocolate flavour is unlike anything in the market.
              Enjoy a sweet, creamy, rich chocolate flavour with our range of alternative milks!`,
          ingredient: 'cocoa'
        },
        coffee: {
          name: 'Iced Coffee',
          desc: `Sourced from 100% sustainable farms, our Arabica coffee beans truly blend in beautifuly to create a unique Iced Coffee flavour.
              Enjoy a sweet, creamy, rich coffee flavour with our range of alternative milks!`,
          ingredient: 'coffee beans'
        },
        caramel: {
          name: 'Caramel',
          desc: `Have a sweet tooth? You'll love our unique caramel flavour, made using 100% sustainable sugars!
              Enjoy a sweet, creamy, rich caramel flavour with our range of alternative milks!`,
          ingredient: 'sugar'
        },
        strawberry: {
          name: 'Strawberry',
          desc: `Craving a sweet berry flavour? Our strawberry flavour will satisfy you, using 100% Australian strawberries from 100% sustainable farms.
              Enjoy a sweet, creamy, rich strawberry flavour with our range of alternative milks!`,
          ingredient: 'strawberries'
        },
        vanilla: {
          name: 'Vanilla',
          desc: `Looking for something mild but pleasantly sweet? Try our vanilla flavour, sourced from 100% sustainable vanilla beans!
              Enjoy a sweet, creamy, rich vanilla flavour with our range of alternative milks!`,
          ingredient: 'vanilla'
        },
        mocha: {
          name: 'Mocha',
          desc: `Want a smooth blend of coffee and chocolate? Look no further than our mocha flavour! Using 100% sustainable cocoa and Arabica coffee beans, you'll be sure to love the combination.
              Enjoy a sweet, creamy, rich mocha flavour with our range of alternative milks!`,
          ingredient: 'cocoa and coffee beans'
        }
      }
    }
  }
}
</script>

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
  display: flex;
  align-items: center;
  height: 500px;
}
section.normal {
  display: flex;
  flex-direction: column;
  align-items: center;
}
section.title h1 {
  font-size: 58px;
  font-weight: 800;
  margin-bottom: 10px;
}
section.title p {
  font-size: 20px;
}
.bottle-img {
  display: flex;
  align-items: flex-end;
  transform: translateX(50px);
}
.bottle {
  width: 500px;
  height: 500px;
}
.bottle-part {
  position: absolute;
  width: 200px;
  transform: translateX(60px);
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
  height: 300px;
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
.inner .title-sub.normal {
  font-size: 18px;
  margin-top: 25px;
  max-width: 640px;
}
.inner .main-title.normal {
  font-size: 56px;
  font-weight: 900;
}
.wider {
  width: 100%;
}
.chocolate-bg {
  background-image: linear-gradient(to left, rgba(0,0,0,.85), rgba(0,0,0,.3)), url('../assets/cocoa.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
}
.coffee-bg {
  background-image: linear-gradient(to left, rgba(0,0,0,.85), rgba(0,0,0,.3)), url('../assets/coffeebeans.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
}
.mocha-bg {
  background-image: linear-gradient(to left, rgba(0,0,0,.85), rgba(0,0,0,.3)), url('../assets/coffeebeans.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
}
.caramel-bg {
  background-image: linear-gradient(to left, rgba(0,0,0,.85), rgba(0,0,0,.3)), url('../assets/sugarcane.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
}
.strawberry-bg {
  background-image: linear-gradient(to left, rgba(0,0,0,.85), rgba(0,0,0,.3)), url('../assets/strawberries.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
}
.vanilla-bg {
  background-image: linear-gradient(to left, rgba(0,0,0,.85), rgba(0,0,0,.3)), url('../assets/vanilla.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
}
</style>
