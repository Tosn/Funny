import { createApp } from 'vue'
import App from './App.vue'
import components from './components/index'
import '@/scss/index.scss'
import store from './store'
import router from './route'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
createApp(App)
  .use(components)
  .use(router)
  .use(store)
  .use(VueHighlightJS)
  .mount('#app')
