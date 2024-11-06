import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "../src/components/Main.vue"
import MapComponent from "../src/components/Map.vue"
import NewsComponet from '../src/components/News.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        name : 'main',
        path: '/',
        component: MainPage
    },
    {
        name : 'map',
        path: '/map',
        component: MapComponent
    },
    {
         name:'news',
         path:'/news',
         component: NewsComponet
    }
]
});
export default router