import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//Temporario!!!
// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6Ikxlb25hcmRvIiwiZW1haWwiOiJsZW9uYXJkb0BnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTg4OTY5ODYwLCJleHAiOjE1ODkyMjkwNjB9.H34vr4RA9Z7Xt1mFuwy-_y7M6QM6jAPDggWSiG70iaw'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')