<template>
    <li class="news-item">
      {{ newsItem }}
    </li>
  </template>
  
  <script>
  export default {
    name: "NewsItem",
    props: {
      newsItem: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .news-item {
    background: #f0f0f0;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  