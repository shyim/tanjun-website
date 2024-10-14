<template>
  <div
    class="w-full max-w-5xl bg-[#121314] border-2 border-white/50 rounded-lg shadow-xl overflow-hidden"
  >
    <div class="bg-black p-2 flex items-center space-x-2">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
      <div class="text-gray-400 text-sm font-mono ml-2">tanjun@workflow:~$</div>
    </div>
    <div
      class="md:h-[33rem] overflow-y-scroll font-mono text-lg text-gray-300 terminal-content"
    >
      <div id="player" ref="player"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as AsciinemaPlayer from 'asciinema-player'
import 'asciinema-player/dist/bundle/asciinema-player.css'

const player = ref(null)

onMounted(() => {
  AsciinemaPlayer.create('/images/680722.cast', player.value, {
    controls: false,
    autoplay: true,
    cols: 90,
    rows: 18,
  })
})
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s step-end infinite;
}

.terminal-content::-webkit-scrollbar {
  background-color: transparent;
  width: 0.3125rem;
}

.terminal-content::-webkit-scrollbar-thumb {
  background-color: #babac08c;
  border-radius: 1rem;
  transition: background-color ease 0.2s;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #dddde6b4;
}
</style>
