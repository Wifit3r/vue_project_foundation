import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import './assets/null.css'
import router from '../routers'
import { createPinia } from 'pinia';







const pinia = createPinia();
createApp(App).use(pinia)
.use(router)
.mount('#app')
