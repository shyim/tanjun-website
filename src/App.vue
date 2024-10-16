<script setup>
import { useHead } from '@unhead/vue'

import Hero from './components/Sections/HeroSection.vue'
import Bento from './components/Sections/BentoSection.vue'
import Navbar from './components/Elements/AppNavbar.vue'
import AppFooter from './components/Elements/AppFooter.vue'
import HiwSection from './components/Sections/HiwSection.vue'

useHead({
  title: 'Tanjun - Simple Dockerized Deployment Tool',
  meta: [
    {
      name: 'description',
      content:
        'Tanjun is a Dockerized Deployment Tool to deploy applications to external servers and cloud providers. It is designed to be straightforward to use and keep everything simple for the user.',
    },
    {
      name: 'keywords',
      content: 'Tanjun, Docker, Deployment, Cloud, Server, Simple',
    },
    {
      property: 'og:title',
      content: 'Tanjun - Simple Dockerized Deployment Tool',
    },
    {
      property: 'og:description',
      content:
        'Deploy applications easily with Tanjun, a simple Dockerized deployment tool for external servers and cloud providers.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://tanjun.sh' },
    {
      property: 'og:image',
      content: 'https://tanjun.sh/images/meta-image.png',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Tanjun - Simple Dockerized Deployment Tool',
    },
    {
      name: 'twitter:description',
      content:
        'Deploy applications easily with Tanjun, a simple Dockerized deployment tool for external servers and cloud providers.',
    },
    {
      name: 'twitter:image',
      content: 'https://tanjun.sh/images/meta-image.png',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://tanjun.sh' }],
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
