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
}
