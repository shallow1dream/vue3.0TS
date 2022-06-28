import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
export type State ={
  count:number
}
export const key: InjectionKey<Store<State>> = Symbol()
export default createStore({
  state: {
    count:147
  },
  mutations: {
   add:(state)=>state.count++,
  },
  actions: {
  },
  modules: {
  }
})
