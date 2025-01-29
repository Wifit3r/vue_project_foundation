
<template>
  <div>
    <HeaderVue></HeaderVue>
    <div class="container">
      <router-view></router-view>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
/* eslint-disable */
import HeaderVue from './components/Header.vue';
import MyFooter from './components/Footer.vue';

export default {
  components:{
    HeaderVue,
    MyFooter
  }
};
</script>

<style>
@import "./assets/null.css";
.container{
}
</style>
