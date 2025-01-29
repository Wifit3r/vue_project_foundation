<template>
  <div class="container">
    <div>
      <h2 class="title">Новини про роботу фонду</h2>
    </div>
    
    <ul class="container-news">
      <CardVue v-for="(newsItem, index) in news" :key="index" :text="newsItem" :title=titles[index] />
    </ul>

    <h3>Додати новину</h3>
    <form @submit.prevent="addNews">
      <label for="newNews">Нова новина:</label>
      <label for="titleNews">Заголовок Новини</label> 
      <input type="text" v-model="titelNews" id="titleNews" required>
      <input type="text" v-model="newNews" id="newNews" required>
      <button type="submit">Додати</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import { createApp } from 'vue';
import CardVue from './Card.vue';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import toastr from "toastr";

const firebaseConfig = {
  apiKey: "AIzaSyCnN2KBDhgpVXOot9zsZubvlbN_aXXyLpI",
  authDomain: "project-11-226f7.firebaseapp.com",
  projectId: "project-11-226f7",
  storageBucket: "project-11-226f7.firebasestorage.app",
  messagingSenderId: "4589284462",
  appId: "1:4589284462:web:b4833c742984dbdd8e0a7f",
  measurementId: "G-BSY7N6PLXQ"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Отримання посилання на Firestore
const db = getFirestore(app);

// Отримання посилань на колекції
const titlesRef = collection(db, 'titles');
const newsRef = collection(db, 'news');

// Приклад запису даних у Firestore
const addData = async (ref, data) => {
  const newDocRef = doc(ref);
  await setDoc(newDocRef, data);
};


export default {
  name: "NewsComponent",
  firebase:{
    titles: titlesRef,
    news: newsRef,
  },
  
  components: {
    CardVue
  },
  data() {
    return {
      titles: [
        "Програма підтримки малого бізнесу", 
        "Грант на розвиток екологічних проектів", 
        "Міжнародний форум з соціальної відповідальності"
      ],
      news: [
        "Фонд XYZ запускає нову програму підтримки малого бізнесу",
        "Фонд XYZ отримав грант на розвиток екологічних проектів",
        "Фонд XYZ організує міжнародний форум з питань соціальної відповідальності"
      ],
      newNews: "",
      titelNews:""
    };
  },
  methods: {
    addNews() {
      if (this.newNews.trim() !== "") {
        newsRef.push(this.newNews);
        titlesRef.push(this.titelNews)
        this.newNews = "";
        this.titelNews = ""
        toastr.success("Додано")
      }
    }
  }
};
</script>

<style scoped>


.container{
  margin-left: 35vw;
  margin-top: 60px;
}

.title{
  display: flex ;
  text-align: center;
  
}

ul {
  list-style-type: none;
  padding: 0;
}
.container-news{
  margin-top: 30px;
  margin-bottom: 30px;
}

form {
  width: 40%;
  margin-top: 20px;
  display: block;
}

form label {
  margin-top: 10px;
  width: 40% ;
}

input {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
}

form button:hover {
  background-color: #45a049;
}
</style>
