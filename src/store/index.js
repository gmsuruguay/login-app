import Vue from 'vue'
import Vuex from 'vuex'

import {auth} from '../firebase'
import route from '../router'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null
  },
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    }
  },
  actions: {
    crearUsuario({commit}, usuario){
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
      .then(res=>{
        console.log(res)
        const user = {
          email: res.user.email,
          id: res.user.uid
        }
        commit('setUsuario', user)
        router.push('/')
      })
      .catch(error=>{
        console.log(error)
        commit('setError', error)
      })
    },

    loginUsuario({commit}, usuario){
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
      .then(res =>{
        console.log(res)
        const user = {
          email: res.user.email,
          id: res.user.uid
        }
        commit('setUsuario', user)
        router.push('/')
      })
      .catch(error =>{
        console.log(error)
        commit('setError', error)
      })
    },
    logout({commit}){
      auth.signOut()
      .then(()=>{
        router.push('/login')
      })
    },
    detectUser({commit}, user){
      commit('setUsuario', user)
    } 
  },
  modules: {
  }
})
