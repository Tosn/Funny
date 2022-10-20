import { createApp } from 'vue'
import App from './App.vue'
import components from './components/index'
import '@/scss/index.scss'
import store from './store'
import router from './route'

createApp(App)
  .use(components)
  .use(router)
  .use(store)
  .mount('#app')
