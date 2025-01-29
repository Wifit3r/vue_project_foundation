/* eslint-disable */
<script>
  export default {
    name: 'CardVue',
    props:{
      title:{
        type: String,
        Required: true
      },
      text:{
        type: String,
        Required: true,
      }
    }
  }
  
</script>

<template>
  <div class="card">
      <h3> {{ title }}</h3>
      <div class="spliter"></div>
      <p>{{ text }}</p>
    </div>
</template>

<style scoped>
.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 80%;
  max-width: 600px;
  min-height:100px;
  margin-top: 20px;
  margin-bottom: 20px
}

.card h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;  
  padding-left: 2vw;
}

.card p {
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.spliter{
  background-color: wheat;  
  width: 100%;
  height: 1vh;
  border-radius: 1vw;
  margin-bottom: 20px;
  margin-top: 20px;
}


</style>
