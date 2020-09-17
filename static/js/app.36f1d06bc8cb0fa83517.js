webpackJsonp([0],{"0mpW":function(t,e){},"6QX4":function(t,e){},Ctiv:function(t,e){},DuRT:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={computed:{topClass:function(){return this.topBar}},data:function(){return{topBar:"top"}},mounted:function(){var t=this;window.addEventListener("scroll",function(e){e.target.scrollingElement.scrollTop<=30?t.topBar="top":t.topBar="scrolling"})}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top-bar",class:this.topClass},[e("div",{staticClass:"inner"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"logo"})]),this._v(" "),e("div",{staticClass:"links"},[e("router-link",{attrs:{to:"/drinks"}},[this._v("Drinks")]),this._v(" "),e("router-link",{attrs:{to:"/about"}},[this._v("About")]),this._v(" "),e("router-link",{attrs:{to:"/environment"}},[this._v("Environment")])],1)],1)])},staticRenderFns:[]};var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"company-info"},[e("div",{staticClass:"logo"}),this._v(" "),e("div",{staticClass:"copyright"},[this._v("Copyright © 2020 Disgiced")])]),this._v(" "),e("div",{staticClass:"footer-text"},[this._v("Website designed and developed by Joshua Walker")])])}]};var o={name:"App",components:{TopBar:s("VU/8")(i,r,!1,function(t){s("cAPo")},"data-v-6f91e7b9",null).exports,Footer:s("VU/8")(null,n,!1,function(t){s("6QX4")},"data-v-54eb8f3c",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("TopBar"),this._v(" "),e("router-view",{staticClass:"router-top"}),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var c=s("VU/8")(o,l,!1,function(t){s("0mpW")},null,null).exports,u=s("/ocq"),v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("section",{staticClass:"entice-section-top"},[s("div",{staticClass:"inner right drinks-range"},[t._m(0),t._v(" "),s("router-link",{staticClass:"nav-link",attrs:{to:"/drinks"}},[t._v("View our range of flavours")])],1)]),t._v(" "),s("section",{staticClass:"alt-milks-section"},[s("div",{staticClass:"inner left alt-milks"},[t._m(1),t._v(" "),s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("Learn more")])],1)]),t._v(" "),s("section",{staticClass:"eco-friendly-section"},[s("div",{staticClass:"inner right eco-friendly"},[t._m(2),t._v(" "),s("router-link",{staticClass:"nav-link",attrs:{to:"/environment"}},[t._v("Learn more")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titles"},[e("div",{staticClass:"title-sub"},[this._v("Flavoured milk")]),this._v(" "),e("div",{staticClass:"main-title"},[this._v("in disguise")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titles"},[e("div",{staticClass:"main-title normal"},[this._v("Tastes like regular milk")]),this._v(" "),e("div",{staticClass:"title-sub normal right-sub"},[this._v("Our drinks taste just like regular cow's milk, even though we use alternatives like almond milk.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titles"},[e("div",{staticClass:"main-title normal"},[this._v("We're eco-friendly")]),this._v(" "),e("div",{staticClass:"title-sub normal"},[this._v("We actually care about the environment, just like you! We strive to make our products as low-impact as possible by using 100% recycled materials for our packaging and sourcing ingredients from sustainable farms.")])])}]};var d=s("VU/8")({name:"Home"},v,!1,function(t){s("pGDc"),s("UI5R")},"data-v-e5e8a4c2",null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),s("section",{staticClass:"ex-wide flavours"},[s("section",{staticClass:"chocolate"},[s("router-link",{attrs:{to:"/drinks/chocolate"}},[s("div",{staticClass:"flavour-wrapper"},[s("div",{staticClass:"flavour-title"},[t._v("Iced Chocolate")])])])],1),t._v(" "),s("section",{staticClass:"coffee"},[s("router-link",{attrs:{to:"/drinks/coffee"}},[s("div",{staticClass:"flavour-wrapper"},[s("div",{staticClass:"flavour-title"},[t._v("Iced Coffee")])])])],1),t._v(" "),s("section",{staticClass:"caramel"},[s("router-link",{attrs:{to:"/drinks/caramel"}},[s("div",{staticClass:"flavour-wrapper"},[s("div",{staticClass:"flavour-title"},[t._v("Caramel")])])])],1),t._v(" "),s("section",{staticClass:"strawberry"},[s("router-link",{attrs:{to:"/drinks/strawberry"}},[s("div",{staticClass:"flavour-wrapper"},[s("div",{staticClass:"flavour-title"},[t._v("Strawberry")])])])],1),t._v(" "),s("section",{staticClass:"vanilla"},[s("router-link",{attrs:{to:"/drinks/vanilla"}},[s("div",{staticClass:"flavour-wrapper"},[s("div",{staticClass:"flavour-title"},[t._v("Vanilla")])])])],1),t._v(" "),s("section",{staticClass:"mocha"},[s("router-link",{attrs:{to:"/drinks/mocha"}},[s("div",{staticClass:"flavour-wrapper"},[s("div",{staticClass:"flavour-title"},[t._v("Mocha")])])])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section-top"},[e("h1",[this._v("Drinks")]),this._v(" "),e("p",[this._v("We offer a wide range of flavours and milks!")])])}]};var m=s("VU/8")(null,f,!1,function(t){s("l2YF")},"data-v-70958016",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("404")])},staticRenderFns:[]},_=s("VU/8")(null,h,!1,null,null,null).exports,p={props:["flavour"],mounted:function(){console.log(this)},data:function(){return{flavours:{chocolate:{name:"Iced Chocolate",desc:"Made using 100% sustainable cocoa, our Iced Chocolate flavour is unlike anything in the market.\n              Enjoy a sweet, creamy, rich chocolate flavour with our range of alternative milks!",ingredient:"cocoa"},coffee:{name:"Iced Coffee",desc:"Sourced from 100% sustainable farms, our Arabica coffee beans truly blend in beautifuly to create a unique Iced Coffee flavour.\n              Enjoy a sweet, creamy, rich coffee flavour with our range of alternative milks!",ingredient:"coffee beans"},caramel:{name:"Caramel",desc:"Have a sweet tooth? You'll love our unique caramel flavour, made using 100% sustainable sugars!\n              Enjoy a sweet, creamy, rich caramel flavour with our range of alternative milks!",ingredient:"sugar"},strawberry:{name:"Strawberry",desc:"Craving a sweet berry flavour? Our strawberry flavour will satisfy you, using 100% Australian strawberries from 100% sustainable farms.\n              Enjoy a sweet, creamy, rich strawberry flavour with our range of alternative milks!",ingredient:"strawberries"},vanilla:{name:"Vanilla",desc:"Looking for something mild but pleasantly sweet? Try our vanilla flavour, sourced from 100% sustainable vanilla beans!\n              Enjoy a sweet, creamy, rich vanilla flavour with our range of alternative milks!",ingredient:"vanilla"},mocha:{name:"Mocha",desc:"Want a smooth blend of coffee and chocolate? Look no further than our mocha flavour! Using 100% sustainable cocoa and Arabica coffee beans, you'll be sure to love the combination.\n              Enjoy a sweet, creamy, rich mocha flavour with our range of alternative milks!",ingredient:"cocoa and coffee beans"}}}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("section",{staticClass:"wide title"},[s("div",{staticClass:"description"},[s("h1",[t._v(t._s(t.flavours[t.flavour].name))]),t._v(" "),s("p",[t._v(t._s(t.flavours[t.flavour].desc))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"hint"},[t._v("*Recommended retail price. Same price for all milk types.")])]),t._v(" "),s("div",{staticClass:"bottle-img"},[s("img",{staticClass:"bottle",attrs:{draggable:"false",src:"/static/"+t.flavour+"-bottle.png"}}),t._v(" "),s("img",{staticClass:"bottle-part",attrs:{draggable:"false",src:"/static/"+t.flavour+".png"}})])]),t._v(" "),t._m(1),t._v(" "),s("section",{staticClass:"sustainable normal wider",class:t.flavour+"-bg"},[s("div",{staticClass:"inner right"},[s("div",{staticClass:"titles"},[s("div",{staticClass:"main-title normal"},[t._v("100% sustainable")]),t._v(" "),s("div",{staticClass:"title-sub normal"},[t._v("Our "+t._s(t.flavours[t.flavour].ingredient)+" comes from 100% sustainable sources, so you can be sure you're not contributing to your carbon footprint. We care about the environment, just like you! Thank you for looking after our planet.")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"price"},[this._v("$2.99"),e("span",{staticClass:"asterisk"},[this._v("*")]),this._v(" - 500mL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"milk normal wider"},[e("div",{staticClass:"inner left milks"},[e("div",{staticClass:"titles"},[e("div",{staticClass:"main-title normal"},[this._v("Non-dairy milk? Yes.")]),this._v(" "),e("div",{staticClass:"title-sub normal"},[this._v("Our drinks come in a few types of alternative milks: Almond milk, Soy milk & Coconut milk. No matter what you choose, you'll receive a tasty drink!")])])])])}]};var b=s("VU/8")(p,C,!1,function(t){s("Ctiv")},"data-v-019c6b2d",null).exports,k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),s("section",{staticClass:"points"},[t._m(1),t._v(" "),s("section",{staticClass:"block environment"},[s("h1",[t._v("Eco-friendly")]),t._v(" "),s("p",[t._v("We care deeply about the planet's environment. All products we make are sustainable and we contribute to our carbon footprints as little as possible.")]),t._v(" "),s("router-link",{staticClass:"nav-link",attrs:{to:"/environment"}},[t._v("Learn more")])],1),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section-top"},[e("h1",[this._v("We are Disgiced.")]),this._v(" "),e("p",[this._v("Located in Melbourne, Australia, we are a small 3-person group with a goal of providing a way for everyone to enjoy flavoured milk, regardless of whether you cannot drink or dislike cow's milk, all while putting our precious planet's environment first.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"block no-dairy"},[e("h1",[this._v("Non-dairy milk")]),this._v(" "),e("p",[this._v("Our drinks contain no dairy, instead using non-dairy milks such as Almond milk, Soy milk and Coconut milk. Now everyone can enjoy flavoured milk.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"block australia"},[e("h1",[this._v("Australian Made")]),this._v(" "),e("p",[this._v("Our products are manufactured here in Australia, with majority of ingredients sourced from Australian farmers and businesses.")])])}]};var y=s("VU/8")(null,k,!1,function(t){s("lb3D")},"data-v-d9c33d26",null).exports,g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("section",{staticClass:"section-top"},[s("h1",[t._v("Our eco-friendly strategy")]),t._v(" "),s("p",[t._v("Like you, we believe our precious planet's environment is important and is in need of everyone's care. Here at Disgiced, we especially prioritise lowering our carbon footprint as much as possible. Here's how we're doing it.")])]),t._v(" "),s("section",{staticClass:"sources-section"},[s("div",{staticClass:"inner right eco-friendly"},[s("div",{staticClass:"titles"},[s("div",{staticClass:"main-title normal"},[t._v("100% sustainable sources")]),t._v(" "),s("div",{staticClass:"title-sub normal"},[t._v("Our ingredients comes from 100% sustainable sources, so you can be sure you're not contributing to your carbon footprint. We care about the environment, just like you! Thank you for looking after our planet.")])])])]),t._v(" "),s("section",{staticClass:"eco-friendly-section"},[s("div",{staticClass:"inner left eco-friendly"},[s("div",{staticClass:"titles"},[s("div",{staticClass:"main-title normal"},[t._v("100% recycled materials")]),t._v(" "),s("div",{staticClass:"title-sub normal"},[t._v("Our packaging is made of 100% recycled materials. This includes the bottles, labeling, lid, you name it. It's all made of recycled materials, ready to be recycled again once finished.")])])])]),t._v(" "),s("section",{staticClass:"neutral-section"},[s("div",{staticClass:"inner right eco-friendly"},[s("div",{staticClass:"titles"},[s("div",{staticClass:"main-title normal"},[t._v("100% carbon neutral")]),t._v(" "),s("div",{staticClass:"title-sub normal"},[t._v("Disgiced is a carbon neutral business. Our office and manufacturing plants are 100% carbon neutral.")])])])])])}]};var w=s("VU/8")({name:"Home"},g,!1,function(t){s("UpER"),s("DuRT")},"data-v-480b85a2",null).exports;a.a.use(u.a);var E=new u.a({mode:"hash",routes:[{path:"/",name:"Home",component:d},{path:"/drinks",name:"Drinks",component:m},{path:"/drinks/:flavour",name:"Flavour",component:b,props:!0},{path:"/about",name:"About",component:y},{path:"/environment",name:"Environment",component:w},{path:"/:pathMatch(.*)",component:_}],scrollBehavior:function(t,e,s){return s||{x:0,y:0}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:E,components:{App:c},template:"<App/>"})},UI5R:function(t,e){},UpER:function(t,e){},cAPo:function(t,e){},l2YF:function(t,e){},lb3D:function(t,e){},pGDc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.36f1d06bc8cb0fa83517.js.map