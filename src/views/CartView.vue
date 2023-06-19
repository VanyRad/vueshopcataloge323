<template>
    <div class="cart-item-card__container">
       <h1> Корзина</h1>
  <CartItemCard
      v-for="product in items" 
      :key="product.id"
      :product="product"
  />

    </div>
</template>

<script>
import CartItemCard from "../components/products/CartItemCard.vue"  

export default{
    components:{
        CartItemCard
    },
    computed:{
        items(){
            return this.$store.getters.cartItems
        }
    }
}

</script>