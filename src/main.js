import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/main.scss'

const app = createApp(App)

app.use(store).use(router)

router.isReady().then(() => app.mount('#app'))
