// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { MotionPlugin } from '@vueuse/motion'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBuilding, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faDownload,faCode } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedin, faEnvelope, faPhone, faDownload, faCode, faBuilding, faCalendar, faInstagram,faGithub )

const app = createApp(App).use(AOS.init())
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(MotionPlugin)

app.mount('#app')
