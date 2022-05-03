import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// 需放在 'virtual:generated-pages' 前，确保 顺序在 element-plus 按需引入前
import '@unocss/reset/tailwind.css'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
