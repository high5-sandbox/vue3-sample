import { createApp } from 'vue'
import App from './app.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "./router";  

loadFonts()

createApp(App).use(vuetify).use(router).mount('#app')
