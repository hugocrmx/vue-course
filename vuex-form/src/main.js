import Vue from 'vue'
import App from './App.vue'
import userStore from "./store"
import  Vuex from "vuex";
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Vuelidate)

const store = new Vuex.Store(userStore)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
