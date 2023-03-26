export const defaultState = () => {
  return [
    'san jose',
    'santiago',
    'san francisco',
    'santa rosa',
    'san juan',
    'sabadell',
    'salamanca',
    'salt lake city',
    'salinas',
    'salem',
    'sausalito',
    'taipei',
    'tel aviv',
    'tempe',
    'termez',
    'temuco',
    'tiajuna',
    'tieling',
    'thousand oaks',
    'thunder bay',
    'tokyo',
    'tulsa',
  ]
}

export default {
  state: {
    cities: defaultState(),
  },
  getters: {
    getCities: (state) => state.cities,
  },
  mutations: {
    setCities(state, cities) {
      state.cities = cities
    },
  },
  actions: {
    loadCities({ commit }, searchTerm) {
      let cities = defaultState()

      if (searchTerm.length >= 3) {
        cities = cities.filter((city) => city.indexOf(searchTerm) !== -1)
      }
      commit('setCities', cities)
    },
  },
}
