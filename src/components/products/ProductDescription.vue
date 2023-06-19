<!-- <template>
    <div class="drawer-background" :class="{show: active}">
    
            <div class="drawer" :class="{show: active}">
                <div class="drawer-close" @click="$emit('close_product_drawer') ">X</div>
                <div class="product">
                    <h3>{{product.name}}</h3>
                    <p>{{product.description}}</p>
                    <h3>{{product.price}}</h3>
                </div>
                

                <div>
                    <h3>Количество в корзине</h3>
                    <h4>{{ product_total }}</h4>
                </div>







                <div class="button-container">
                    <button class="add" @click="addToCart()">Add</button>
                    <button class="remove" @click="removeToCart()">Remove</button>
                    
                </div>



            </div>
    </div>
    
    </template>
    
    <script>


    export default{
        props:['product', 'active', ],
        computed:{
            product_total(){
                return this.$store.getters.productQuantity(this.product)
            }
        },


        methods: {
            addToCart(){
                this.$store.commit('addtoCart', this.product)
            },

            removeToCart(){
                this.$store.commit('addtoCart', this.product)
            },


        }



    }
    
    </script>
     -->

     <template>
        <div class="drawer-background" :class="{show: active}" >
        
                <div class="drawer" :class="{show: active}">
                    <div class="drawer-close" @click="$emit('close_product_drawer') ">X</div>
                    <div class="product">
                        <h3>{{product.name}}</h3>
                        <p>{{product.description}}</p>
                        <h3>{{product.price}}</h3>
                    </div>
        
                    <div>
                        <h3>Количесвто в корзине</h3>
                        <h4>{{product_total}}</h4>
                    </div>
        
                    <div class="button-container">
                        <button class="add" @click="addToCart()">Add</button>
                        <button class="remove" @click="removeToCart()">Remove</button>
        
                    </div>
                </div>
        </div>
        
        </template>
        
        <script>
        export default{
            props:['product', 'active', ],
            computed:{
                    product_total(){
                    return  this.$store.getters.productQuantity(this.product)
                    }
                 },
        
            methods: {
                addToCart(){
                    this.$store.commit('addToCart', this.product)
        
                },
        
                removeToCart(){
                    this.$store.commit('removeToCart', this.product)
        
                },
                
            },
        }
        
        </script>
    <style>
    .drawer-background{
        height: 1000px;
        width: 300px;
        background-color: rgba(144, 98, 39, 0.872);
        z-index: 100;
        position: fixed;
        left: 0;
        top: 0;
        display: none;
        transition: display .5s;
    }
    
    .drawer-background.show{
        display: block;
        transition: display .5s;
    }
    
    .drawer{
        width: 300px;
        height: 1000px;
        z-index: 101;
        position: fixed;
        transition: 2s;
        cursor: pointer;
    }
    
    .show{
        left: 0;
    }
    .drawer-close{
        color: black;
        width: 15px;
        padding: 5px;
        float:right;
    }
    
    .drawer-close:hover{
     background-color: aqua;
    }
    
    .button{
        width: 150px;
        border: none;
        padding: 150px;
        cursor: pointer;
        margin: 5px;
    }




    </style>