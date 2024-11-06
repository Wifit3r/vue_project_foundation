
<script>
/* eslint-disable */
import HeaderVue from './components/Header.vue';
import MyFooter from './components/Footer.vue'

export default {
  components:{
    HeaderVue,
    MyFooter
  }
};
</script>

<template>
  
  <HeaderVue></HeaderVue>
  <div class="container">
    <RouterView></RouterView>  
  </div>
  <MyFooter></MyFooter>
</template>

<style>
.container{
  margin-top: 170px;
}
</style>
