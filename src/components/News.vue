<template>
  <div class="container">
    <div class="header">
      <h2 class="title">Новини про роботу фонду</h2>
    </div>
    
    <ul class="container-news">
      <CardVue v-for="(newsItem, index) in news" :key="index" :text="newsItem.text" :title="newsItem.title">
        <div class="buttons">
          <button class="edit-button" @click="editNews(newsItem)">Редагувати</button>
          <button class="delete-button" @click="deleteNews(newsItem.id)">Видалити</button>
        </div>
      </CardVue>
    </ul>

    <div class="form-container">
      <h3>Додати новину</h3>
      <form @submit.prevent="addNews">
        <label for="titleNews">Заголовок Новини:</label> 
        <input type="text" v-model="titelNews" id="titleNews" required />
        <label for="newNews">Нова новина:</label>
        <input type="text" v-model="newNews" id="newNews" required />
        <button type="submit" class="submit-button">Додати</button>
      </form>
    </div>

    <div class="form-container">
      <h3>Редагувати новину</h3>
      <form @submit.prevent="updateNewsByTitle">
        <label for="editTitle">Заголовок Новини:</label>
        <select v-model="editTitle" required>
            <option disabled value="">Select title</option>
            <option v-for="news in news" :key="news.id" :value="news.title">{{ news.title }}</option>
        </select>
        <label for="editText">Новий Текст Новини:</label>
        <input type="text" v-model="editText" id="editText" required />
        <button type="submit" class="submit-button">Редагувати</button>
      </form>
    </div>

    <div class="form-container">
      <h3>Видалити новину</h3>
      <form @submit.prevent="deleteNewsByTitle">
        <label for="deleteTitle">Заголовок Новини:</label>
        <input type="text" v-model="deleteTitle" id="deleteTitle" required />
        <button type="submit" class="delete-button">Видалити</button>
      </form>
    </div>
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
      deleteTitle: ""
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
        if (this.editText.trim() === "") {
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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 2rem;
  color: #333;
}

.container-news {
  margin-top: 30px;
  margin-bottom: 30px;
  list-style: none;
  padding: 0;
  display: flex; justify-content: center; 
  align-items: center;
  flex-direction: column;
}

.card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.edit-button,
.delete-button,
.submit-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.edit-button {
  background-color: #4CAF50;
  color: white;
}

.edit-button:hover {
  background-color: #45a049;
}

.delete-button {
  background-color: #f44336;
  color: white;
}

.delete-button:hover {
  background-color: #e53935;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
}

.submit-button:hover {
  background-color: #45a049;
}

.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

form label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
}

form input,
form select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

form button {
  width: 100%;
}
</style>
