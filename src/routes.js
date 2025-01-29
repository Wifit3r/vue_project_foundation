import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../src/components/Main.vue';
import MapComponent from '../src/components/Map.vue';
import NewsComponent from '../src/components/News.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'main', path: '/', component: MainPage },
  { name: 'map', path: '/map', component: MapComponent },
  { name: 'news', path: '/news', component: NewsComponent },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
