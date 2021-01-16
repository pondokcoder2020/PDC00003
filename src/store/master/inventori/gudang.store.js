import { config } from '@/config.js'
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

}

const actions = {
    get_data({commit}, APIData){
        return new Promise((resolve, reject) => {
            Axios.get(config.$api_url + '/Inventori/get_gudang', {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
                .then(resp => {
                    const token = resp.response_token
                    const user = user_data.email
                    localStorage.setItem('token', token)
                    Axios.defaults.headers.common['Authorization'] = token
                    resolve(resp)
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }
}

const mutations = {

}

const gudang = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

export default gudang;