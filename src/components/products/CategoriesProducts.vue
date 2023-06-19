<template>
    <div>
       <CategoriesItem
       v-for="button in categories"
       :key="button.id"
       v-bind:categories_data="button"
       
       />
    </div>
   
   
   </template>
   <script>
   import CategoriesItem from './CategoriesItem.vue';
   
   
   export default{
       components:{
           CategoriesItem
       },
       data(){
           return{
               categories:[
                  { id:10,
                   title:"тапки"
                  },
                  { id:20,
                   title:"шапки"
                  },
                  { id:30,
                   title:"все"
                  }
               ]
           }
       }
   
   
   }
   
   
   
   
   </script>
   <style>
   
   
   button{
       color: black;
       }
   
   </style>