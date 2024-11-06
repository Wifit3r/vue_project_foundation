<template>
  <div class="container">
    <div>
      <h2 class="title">Новини про роботу фонду</h2>
    </div>
    
    <ul class="container-news">
      <CardVue v-for="(newsItem, index) in news" :key="index" :text="newsItem.text" :title="newsItem.title">
        <button @click="editNews(newsItem)">Редагувати</button>
        <button @click="deleteNews(newsItem.id)">Видалити</button>
      </CardVue>
    </ul>

    <h3>Додати новину</h3>
    <form @submit.prevent="addNews">
      <label for="titleNews">Заголовок Новини:</label> 
      <input type="text" v-model="titelNews" id="titleNews" required />
      <label for="newNews">Нова новина:</label>
      <input type="text" v-model="newNews" id="newNews" required />
      <button type="submit">Додати</button>
    </form>

    <h3>Редагувати новину</h3>
    <form @submit.prevent="updateNewsByTitle">
      <label for="editTitle">Заголовок Новини:</label>
      <select v-model="newNewsTitle" required>
          <option disabled value="">Select title</option>
          <option v-for="news in news" :key="news.id" :value="news.title">{{ news.title }}</option>
        </select>     
         <label for="editText">Новий Текст Новини:</label>

      <input type="text" v-model="editText" id="editText" required />
      <button type="submit">Редагувати</button>
    </form>

    <h3>Видалити новину</h3>
    <form @submit.prevent="deleteNewsByTitle">
      <label for="deleteTitle">Заголовок Новини:</label>
      <input type="text" v-model="deleteTitle" id="deleteTitle" required />
      <button type="submit">Видалити</button>
    </form>
  </div>
</template>

<script>
import CardVue from './Card.vue';
import { useStore } from '@/store/store'; 

export default {
  name: "NewsComponent",
  components: {
    CardVue
  },
  async created() {
    const store = useStore();
    this.news = await store.fetchNews();
  },
  data() {
    return {
      news: [],
      newNews: "",
      titelNews: "",
      editTitle: "",
      editText: "",
      deleteTitle: "",
      newNewsTitle:"",
    };
  },
  
  methods: {
    async addNews() {
      const store = useStore();
      if (this.newNews.trim() !== "") {
        await store.addNews({ text: this.newNews, title: this.titelNews });
        this.news = await store.fetchNews();
        this.newNews = "";
        this.titelNews = "";
      }
    },
    async updateNewsByTitle() {
      const store = useStore();
      const newsItem = this.news.find(news => news.title === this.editTitle);
      if (newsItem) {
        if (this.editTitle.trim() === "" || this.editText.trim() === "") {
          console.log("Поля не можуть бути порожніми");
          return;
        }
        newsItem.text = this.editText;
        await store.updateNews(newsItem);
        this.news = await store.fetchNews();
        this.editTitle = "";
        this.editText = "";
      } else {
        console.log("Новина з таким заголовком не знайдена");
      }
    },
    async deleteNewsByTitle() {
      const store = useStore();
      const newsItem = this.news.find(news => news.title === this.deleteTitle);
      if (newsItem) {
        await store.deleteNews(newsItem.id);
        this.news = await store.fetchNews();
        this.deleteTitle = "";
      } else {
        console.log("Новина з таким заголовком не знайдена");
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-left: 26vw;
}

.title {
  display: flex;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

.container-news {
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
  width: 40%;
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
