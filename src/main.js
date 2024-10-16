import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { appName, appUrl, repoUrl } from '@/config.js'
import App from './App.vue'
import './assets/main.css'

const vueapp = createApp(App)
const head = createHead()

vueapp.config.globalProperties.$appName = appName
vueapp.config.globalProperties.$appUrl = appUrl
vueapp.config.globalProperties.$repoUrl = repoUrl

vueapp.use(MotionPlugin)
vueapp.use(head)
vueapp.mount('#app')
