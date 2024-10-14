<template>
  <div
    class="bg-[#030712] py-20 sm:py-32 rounded-[2.2rem] relative overflow-hidden mt-20"
  >
    <GlowGradient />
    <div class="absolute inset-0">
      <div v-for="i in 100" :key="i" class="star" :style="starStyle(i)"></div>
    </div>
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <div class="flex flex-col items-center gap-3">
        <StarField />
        <h2
          class="text-center text-base/7 w-fit px-3 rounded-md border border-accent/40 text-accent"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :delay="100"
          :duration="1000"
        >
          How it Works
        </h2>
        <p
          class="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-white sm:text-6xl"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :delay="200"
          :duration="1000"
        >
          Deployment Made Simple
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-28">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative bg-[#0F0C1D] bg-opacity-50 border border-white/10 rounded-3xl p-10 backdrop-filter backdrop-blur-sm overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :delay="300 + index * 150"
          :duration="1000"
        >
          <div class="flex flex-col items-center mb-4">
            <img
              :src="step.icon"
              class="w-64 h-64 text-white -mt-24 -mb-12"
              :alt="step.title"
            />
            <h3 class="text-2xl text-center text-white">
              {{ step.title }}
            </h3>
          </div>
          <p class="text-gray-400 text-center">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GlowGradient from '../Elements/GlowGradient.vue'
import StarField from '../Elements/StarField.vue'

const steps = ref([
  {
    icon: '/images/icons/Cpu.png',
    title: 'Initialization',
    description:
      'Kickstart your project effortlessly with our intuitive CLI. One command sets up everything you need to begin.',
  },
  {
    icon: '/images/icons/home.png',
    title: 'Server Setup',
    description:
      'Prepare your server in minutes, not hours. Our streamlined process handles the complex configuration for you.',
  },
  {
    icon: '/images/icons/layer.png',
    title: 'Configuration',
    description:
      'Customize your deployment with ease. Our flexible config file puts you in control without the headaches.',
  },
  {
    icon: '/images/icons/plant.png',
    title: 'Deployment',
    description:
      'Launch your app with confidence. Our one-step deploy command takes care of building, pushing, and going live.',
  },
  {
    icon: '/images/icons/heart.png',
    title: 'Monitoring',
    description: `Stay on top of your application's performance. Access logs, containers, and create secure tunnels with simple commands.`,
  },
  {
    icon: '/images/icons/document.png',
    title: 'Scaling & Updates',
    description:
      'Grow and evolve without fear. Tanjun makes scaling up and deploying updates a breeze, ensuring zero downtime.',
  },
])

const starStyle = () => {
  const size = Math.random() * 0.5 + 0.5
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 3 + 2}s`,
  }
}
</script>

<style scoped>
.star {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  animation: twinkle 3s infinite ease-in-out;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
