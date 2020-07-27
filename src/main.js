import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {auth} from './firebase'

Vue.config.productionTip = false

auth.onAuthStateChanged(user => { // Observador para detectar si el usuario esta logueado
  if (user) {
    console.info(user)
    const userDetected = {
      email : user.email,
      uid : user.uid
    }
    store.dispatch('detectUser', userDetected)
  } else {
    console.info(user)
    store.dispatch('detectUser', user)
  }
  
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
