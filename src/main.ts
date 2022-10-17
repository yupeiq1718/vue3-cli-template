import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { useIcon } from '@/assets/icons/index'
import '@/assets/styles/index.css'

const app = createApp(App)
app.use(router)
app.use(useIcon)
app.use(VueAxios, axios)
app.mount('#app')
