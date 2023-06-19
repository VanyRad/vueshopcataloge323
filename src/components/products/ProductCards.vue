<template>
    <div>
            <div class="product-cards-container__card">
                <img :src="require('@/assets/images/' + product.image)">
                <h3>{{product.name}}</h3>
                <h5>{{product.price}}</h5>
                <p>{{product.description}}</p>
                <button class="view-product-button" @click="$emit('view-product' ,product)">Просмотр</button>
            </div>
    </div>


</template>

<script>
export default{
    props:['product']
}

</script>
<style>
.view-product-button{
    padding: 10px;
    background-color: rgb(40, 70, 47);
    border: none;
    border-radius: 5px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
}
.product-cards-container__card img{
width: 300px;
}




</style>