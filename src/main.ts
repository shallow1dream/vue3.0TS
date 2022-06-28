import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import http from './api/http'
import {AxiosInstance } from "axios";
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $http: AxiosInstance;
    }
}
const app=createApp(App)
app.config.globalProperties.$http=http
app.use(store,key).use(router).mount('#app')
