<template>
  <nav>
    <router-link :class="{active:$route.name==='home'}" to="/home">Главная</router-link> |
    <router-link :class="{active:$route.name==='CartView'}" to="/cart">Корзина</router-link>
  </nav>
  
  <router-view/>
</template>

<script>
export default{
  mounted(){
    this.$store.commit('updateCartf')
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.active {
      color: #42b983;
    }
  }
}


html,body{
  margin: 0;
  padding: 0;

}
</style>
