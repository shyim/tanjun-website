import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { createMetaManager } from 'vue-meta'
import { appName, appTitle, appUrl, repoUrl } from '@/config.js'
import App from './App.vue'
import './assets/main.css'

const vueapp = createApp(App)
const metaManager = createMetaManager()

vueapp.config.globalProperties.$appName = appName
vueapp.config.globalProperties.$appTitle = appTitle
vueapp.config.globalProperties.$appUrl = appUrl
vueapp.config.globalProperties.$repoUrl = repoUrl

vueapp.use(MotionPlugin)
vueapp.use(metaManager)
vueapp.mount('#app')
