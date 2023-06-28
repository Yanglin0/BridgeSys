import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import store from './store'
import tab from './store/tab'
import ElementPlus from 'element-plus';
import '../node_modules/element-plus/theme-chalk/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(tab)
app.use(store)
app.use(router)
app.mount('#app')
