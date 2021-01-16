import { config } from '@/config'
import Vue from "vue"
import Vuex from "vuex"
import Axios from 'axios'

Vue.use(Vuex)

const state = {
	status: 'logout',
	token: '',
	user: '',
	isAdmin: false
}

const getters = {
	isLoggedIn: state => !!state.token,
	authStatus: state => state.status,
}

const actions = {
	logout({commit}) {
		return new Promise((resolve, reject) => {
		    commit('logout')
		    localStorage.removeItem('token')
		    delete Axios.defaults.headers.common['Authorization']
		    resolve()
		  })
	},
	login({commit}, user_data){
	    return new Promise((resolve, reject) => {
	      commit('auth_request')
	      var formDataLogin = new FormData()
	      formDataLogin.append('request', user_data.request)
	      formDataLogin.append('email', user_data.email)
	      formDataLogin.append('password', user_data.password)
	      Axios.post(config.$api_url + '/Pegawai', formDataLogin)
	      .then(resp => {
	        const token = resp.response_token
	        const user = user_data.email
	        localStorage.setItem('token', token)
	        Axios.defaults.headers.common['Authorization'] = token
	        commit('auth_success', token, user)
	        resolve(resp)
	      })
	      .catch(err => {
	      	console.log(err)
	      	commit('auth_error')
	        localStorage.removeItem('token')
	        reject(err)
	      })
	    })
	}
}

const mutations = {
	auth_request(state) {
		state.status = 'loading'
	},
	auth_success(state, token, user) {
		state.status = 'success'
		state.token = token
		state.user = user
	},
	auth_error(state) {
		state.status = 'error'
	},
	logout(state) {
		state.status = ''
		state.token = ''
	}
}

const pegawai = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default pegawai;