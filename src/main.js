import Vue from 'vue'
import App from './App'
import { request } from './network/request'
import router from './router'
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    router
}).$mount('#app')
request({
    url: '/home/multidata'
}).then(res => {
    // console.log(res);
}).catch(err => {
    console.log(err);
})