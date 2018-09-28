import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //strict: true   //this stops direct editing of data in components
  //responsible for storing data
  state: {
    products:[
      {name:'Banana Skin',price:20},
      {name:'Shiny Star',price:40},
      {name:'Green Shells',price:60},
      {name:'Red Shells',price:80},
    ]
  },
  getters:{
    saleProducts: state => {
      let saleProducts = state.products.map(product => {
        return {
          name: '**'+ product.name + '**',
          price: product.price/2
        }
      })
      return saleProducts;
    }
  },
  //Responsible for editing data
  //using async would not work properly here
  mutations: {
    reducePrice: (state, payload)=> {
        state.products.forEach(product =>{
          product.price -= payload
        })
    }
  },
  //this handles asyncronous code to keep track of events
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function(){
        context.commit('reducePrice',payload)
      },2000)
    }
  }
})
