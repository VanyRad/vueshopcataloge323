<template>
  <div class="home">
    <ProductDescription
    :product="product"
    :active="active.product_drawer"
    v-on:close_product_drawer="closeProductDrawer()"
    />
    <h1>Каталог</h1>

  
      <div class="product-cards-container">
        
        <ProductCards
        v-for="product in items"
        :key="product.id"
        v-bind:product="product"
        v-on:view-product="viewProduct($event)"
        />


      </div>
      <CategoriesProducts/>
  </div>
</template>

<script>


// @ is an alias to /src
import ProductDescription from '@/components/products/ProductDescription.vue';
import ProductCards from '@/components/products/ProductCards.vue';
import items from '@/data/item';
import CategoriesProducts from '@/components/products/CategoriesProducts.vue';

export default {
  name: 'HomeView',
  components: {
    ProductCards,
    ProductDescription,
    CategoriesProducts
},
data(){
  return{
    items:items,
    product:0,
    active:{
      product_drawer:false
    }
  }
},
methods:{
  viewProduct(product){
    this.product=product
    this.active.product_drawer=true
    console.log(this.product)
  },
  closeProductDrawer(){
    this.active.product_drawer=false
  }
}
}
</script>

<style lang="less">
.product-cards-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &__card{
    border: none;
    margin-right: 50px;
    border-radius: 5px;
    background-color: rgb(204, 203, 202);
    box-shadow: 0 0 5px lavender;
  }
}


</style>