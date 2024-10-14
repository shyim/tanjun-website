<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden bg-indigo-50 -top-36">
      <img
        width="918"
        height="1495"
        class="absolute blur top-0 left-0 translate-x-[-55%] translate-y-[-10%] sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-145%]"
        style="color: transparent"
        src="/images/bbblurry.svg"
      />
      <img
        width="918"
        height="1495"
        class="absolute blur bottom-0 right-0 translate-x-[55%] translate-y-[10%] sm:right-1/2 sm:translate-x-[98%] sm:translate-y-[6%] lg:translate-x-[106%] xl:translate-x-[145%]"
        style="color: transparent"
        src="/images/bbblurry.svg"
      />
      <div
        class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white"
      ></div>
      <div
        class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"
      ></div>
    </div>
    <div
      class="pt-28 md:pt-36 2xl:pt-52 pb-44 px-2 md:px-3 text-center relative"
    >
      <div class="relative z-10">
        <h1
          class="mx-auto max-w-4xl font-display text-4xl text-slate-900 sm:text-6xl xl:text-7xl"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :delay="100"
          :duration="1000"
        >
          Streamline your Dockerized
          <span class="md:block">
            application
            <span
              class="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#4240B2] to-[#ca09db]"
            >
              Deployments</span
            >
          </span>
        </h1>
        <p
          class="mx-auto mt-4 md:mt-6 max-w-2xl px-5 md:px-0 text-lg sm:text-2xl tracking-tight text-slate-700"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :delay="200"
          :duration="1000"
        >
          {{ $appName }} gives you the tools to deploy apps to servers and cloud
          providers with ease, keeping everything simple.
        </p>
        <div
          class="flex justify-center gap-5 mt-8"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :delay="300"
          :duration="1000"
        >
          <button
            type="button"
            class="inline-flex justify-center font-display items-center space-x-2 rounded-lg px-6 py-3 text-base md:text-lg font-medium bg-accent text-white shadow-lg shadow-violet-500/50 border border-accent button-1"
          >
            Get Started
          </button>
          <button
            type="button"
            class="flex text-accent justify-center space-x-2 rounded-lg px-6 py-3 text-base md:text-lg font-medium bg-white border border-gray-100 shadow-lg"
          >
            Download Now
          </button>
        </div>
      </div>
      <div
        class="max-w-6xl mx-auto mt-12 px-4 flex items-center justify-center text-left"
      >
        <div
          class="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center opacity-10"
          style="mask-image: radial-gradient(black, transparent 50%)"
        >
          <img src="/images/grid.svg" draggable="false" class="w-full" />
        </div>
        <Terminal
          :style="terminalStyle"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :delay="400"
          :duration="1000"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useScroll } from '@vueuse/core'
import Terminal from '../Elements/TerminalView.vue'

const { y } = useScroll(window)

const scale = computed(() => {
  const minScale = 1
  const maxScale = 1.2
  const scrollRange = 1000

  const scaleFactor =
    1 + Math.min(y.value / scrollRange, 1) * (maxScale / minScale - 1)
  return Math.min(maxScale, Math.max(minScale, scaleFactor))
})

const terminalStyle = computed(() => ({
  transform: `scale(${scale.value}) translateY(${scale.value * 20}px)`,
  transition: 'transform 0.6s cubic-bezier(.34,1.8,.64,1)',
}))
</script>

<style scoped></style>
