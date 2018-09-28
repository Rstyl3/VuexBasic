<template>
  <div class="home">
     <product-list-one :products="products" ></product-list-one>
     <product-list-two :products="products" ></product-list-two>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductListOne from '@/components/ProductListOne.vue'
import ProductListTwo from '@/components/ProductListTwo.vue'

export default {
  name: 'home',
  components: {
    ProductListOne,
    ProductListTwo
  },
  props: ['products'],
  data(){
    return{
    }
  }

}
</script>
