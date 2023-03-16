import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcon from '@element-plus/icons-vue'
// import axios from 'axios'
// import httpRequest from '@/utils/request'


const app = createApp(App)
 
for (let iconName in ElIcon){
  app.component(iconName, ElIcon[iconName])
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')


// app.prototype.$axios = axios
// Vue.prototype.$http = httpRequest