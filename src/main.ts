import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store'

import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.use(store, key)
app.use(router)
app.mount('#app')
