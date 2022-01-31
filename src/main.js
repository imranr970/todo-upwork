import { createApp } from 'vue'
import App from './App.vue'
import Router from './Router'
import Store from './Store'

import '@/assets/css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faTrash, 
    faPen, 
    faTimes, 
    faSpinner,
    faCircleNotch 
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( 
    faTrash,
    faPen,
    faTimes,
    faSpinner,
    faCircleNotch
)

const app = createApp(App)
app.use(Router)
app.use(Store)
app.component('FontIcon', FontAwesomeIcon)
app.mount('#app')
