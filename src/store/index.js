import Vue from 'vue'
import Vuex from 'vuex'
import Pegawai from './user.store.js'

//Master Inventori
import Gudang from './master/inventori/gudang.store'

Vue.use(Vuex)

const state = {
  status: '',
  token: localStorage.getItem('token') || '',
  user: {},
  sidebarShow: 'responsive',
  sidebarMinimize: false
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  }
}

export default new Vuex.Store({
  modules: {
    pegawai: Pegawai,
    gudang: Gudang
  },
  state,
  mutations
})