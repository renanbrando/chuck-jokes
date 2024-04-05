import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { installVuetify } from '@/plugins/vuetify'

const app = createApp(App)

app.use(createPinia())
app.use(router)
installVuetify(app)
app.mount('#app')







