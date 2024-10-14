import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { appName, appTitle, appUrl, repoUrl } from '@/config.js'
import App from './App.vue'
import './assets/main.css'

const vueapp = createApp(App)

vueapp.config.globalProperties.$appName = appName
vueapp.config.globalProperties.$appTitle = appTitle
vueapp.config.globalProperties.$appUrl = appUrl
vueapp.config.globalProperties.$repoUrl = repoUrl

vueapp.use(MotionPlugin)
vueapp.mount('#app')
