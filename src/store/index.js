import { createStore } from 'vuex'

import Cities from './modules/cities'
import Books from './modules/books'

export const modules = {
  Cities,
  Books,
}

export default createStore({
  modules,
})
