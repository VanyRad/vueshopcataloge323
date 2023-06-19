<template>
<div class="cart-item-card">
 <div class="header">
    <h3>{{product.name}}</h3>
    <h4> {{product.description}}</h4>
    <h3> Цена: {{product.price}}</h3>
    <h4> Количество: {{product.quantity}}</h4>
    <h4> Общая стоимость продукта: {{item__cost.toFixed(2)}}</h4>
 </div>   




</div>




</template>

<script>
export default{

    props:['product'],
    computed:{
        item__cost(){
            return this.product.price * this.product.quantity
        }
    }
}
</script>

<style>
.cart-item-card{
    width: 300px;
    margin: 5px;
    background-color: aquamarine;
    border-radius: 5px;
    padding: 5px;
    text-align: left;
    display: flex;
}

.cart-item-card_container{
    display: flex;
    justify-content: center;
}

</style>
