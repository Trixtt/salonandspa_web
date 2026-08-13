import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import reveal from './directives/reveal'
import './assets/main.css'

createApp(App).directive('reveal', reveal).use(router).mount('#app')
