import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updateText(state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        getters: {
          textPlus(state, getters, rootState) {
            return state.text + rootState.b.text
          }
        },
        actions: {
          add({ state, commit, rootState }) {
            // commit('updateText', rootState.count, { root: true })
            commit('updateCount', { num: '1244' }, { root: true })
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 2
        },
        actions: {
          testAction({commit}) {
            commit('a/updateText', 'text text', { root: true })
          }
        }
      }
    }
  })
}
