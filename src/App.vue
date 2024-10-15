<script setup>
import Hero from './components/Sections/HeroSection.vue'
import Bento from './components/Sections/BentoSection.vue'
import Navbar from './components/Elements/AppNavbar.vue'
import AppFooter from './components/Elements/AppFooter.vue'
import HiwSection from './components/Sections/HiwSection.vue'

defineOptions({
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Default Title',
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome Webapp',
  },
})
</script>

<template>
  <header></header>
  <Navbar />
  <main class="min-h-screen bg-gray-50">
    <Hero />
    <Bento />
    <HiwSection />
  </main>
  <AppFooter />
</template>

<style scoped></style>
