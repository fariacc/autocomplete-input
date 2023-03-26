import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faCircleXmark)

const app = createApp({
  ...App,
})

app.use(store)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
