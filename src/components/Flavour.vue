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
              Enjoy a sweet, creamy, rich chocolate flavour with our range of alternative milks!`
        },
        coffee: {
          name: 'Iced Coffee',
          desc: `Sourced from 100% sustainable farms, our Arabica coffee beans truly blend in beautifuly to create a unique Iced Coffee flavour.
              Enjoy a sweet, creamy, rich coffee flavour with our range of alternative milks!`
        },
        caramel: {
          name: 'Caramel',
          desc: `Have a sweet tooth? You'll love our unique caramel flavour, made using 100% sustainable sugars!
              Enjoy a sweet, creamy, rich caramel flavour with our range of alternative milks!`
        },
        strawberry: {
          name: 'Strawberry',
          desc: `Craving a sweet berry flavour? Our strawberry flavour will satisfy you, using 100% Australian strawberries from 100% sustainable farms.
              Enjoy a sweet, creamy, rich strawberry flavour with our range of alternative milks!`
        },
        vanilla: {
          name: 'Vanilla',
          desc: `Looking for something mild but pleasantly sweet? Try our vanilla flavour, sourced from 100% sustainable vanilla beans!
              Enjoy a sweet, creamy, rich vanilla flavour with our range of alternative milks!`
        },
        mocha: {
          name: 'Mocha',
          desc: `Want a smooth blend of coffee and chocolate? Look no further than our mocha flavour! Using 100% sustainable cocoa and Arabica coffee beans, you'll be sure to love the combination.
              Enjoy a sweet, creamy, rich mocha flavour with our range of alternative milks!`
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
</style>
