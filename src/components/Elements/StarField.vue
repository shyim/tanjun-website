<template>
  <svg
    viewBox="0 0 881 211"
    fill="white"
    aria-hidden="true"
    ref="starfieldContainer"
    class="pointer-events-none absolute w-[55.0625rem] top-20 origin-top-right rotate-[10deg] overflow-visible opacity-70"
  >
    <defs>
      <filter :id="blurId">
        <feGaussianBlur in="SourceGraphic" stdDeviation=".5" />
      </filter>
    </defs>
    <g
      v-for="(points, index) in constellations"
      :key="`constellation-${index}`"
    >
      <path
        stroke="white"
        :stroke-opacity="constellationStates[index].pathOpacity"
        stroke-width="0.5"
        fill="transparent"
        :d="`M ${points.join('L')}`"
        :style="{
          strokeDasharray: constellationStates[index].pathLength,
          strokeDashoffset: constellationStates[index].pathOffset,
        }"
      />
      <circle
        v-for="(point, pointIndex) in points"
        :key="`constellation-star-${index}-${pointIndex}`"
        :cx="point[0]"
        :cy="point[1]"
        r="1"
        :style="getStarStyle(point, index, pointIndex)"
        :filter="point[3] ? `url(#${blurId})` : undefined"
      />
    </g>
    <circle
      v-for="(point, index) in stars"
      :key="`star-${index}`"
      :cx="point[0]"
      :cy="point[1]"
      r="1"
      :style="getStarStyle(point, -1, index)"
      :filter="point[3] ? `url(#${blurId})` : undefined"
    />
  </svg>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTimeoutFn, useRafFn } from '@vueuse/core'

const starfieldContainer = ref(null)

const blurId = computed(() => `blur-${Math.random().toString(36).substr(2, 9)}`)

const stars = [
  [4, 4, true, true],
  [4, 44, true],
  [36, 22],
  [50, 146, true, true],
  [64, 43, true, true],
  [76, 30, true],
  [101, 116],
  [140, 36, true],
  [149, 134],
  [162, 74, true],
  [171, 96, true, true],
  [210, 56, true, true],
  [235, 90],
  [275, 82, true, true],
  [306, 6],
  [307, 64, true, true],
  [380, 68, true],
  [380, 108, true, true],
  [391, 148, true, true],
  [405, 18, true],
  [412, 86, true, true],
  [426, 210, true, true],
  [427, 56, true, true],
  [538, 138],
  [563, 88, true, true],
  [611, 154, true, true],
  [637, 150],
  [651, 146, true],
  [682, 70, true, true],
  [683, 128],
  [781, 82, true, true],
  [785, 158, true],
  [832, 146, true, true],
  [852, 89],
]

const constellations = [
  [
    [247, 103],
    [261, 86],
    [307, 104],
    [357, 36],
  ],
  [
    [586, 120],
    [516, 100],
    [491, 62],
    [440, 107],
    [477, 180],
    [516, 100],
  ],
  [
    [733, 100],
    [803, 120],
    [879, 113],
    [823, 164],
    [803, 120],
  ],
]

const totalStars =
  stars.length +
  constellations.reduce((acc, constellation) => acc + constellation.length, 0)

const starStates = ref(
  Array(totalStars)
    .fill()
    .map(() => ({ opacity: 0, scale: 1 })),
)
const constellationStates = ref(
  constellations.map(points => {
    const length = calculatePathLength(points)
    return {
      pathOpacity: 0,
      pathLength: length,
      pathOffset: length,
      fillOpacity: 0,
    }
  }),
)

function calculatePathLength(points) {
  let length = 0
  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1]
    const [x2, y2] = points[i]
    length += Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }
  return length
}

const getStarStyle = (point, constellationIndex, starIndex) => {
  let stateIndex
  if (constellationIndex === -1) {
    stateIndex = starIndex
  } else {
    stateIndex =
      stars.length +
      constellations
        .slice(0, constellationIndex)
        .reduce((acc, c) => acc + c.length, 0) +
      starIndex
  }
  const state = starStates.value[stateIndex]
  const [cx, cy] = point
  return {
    transformOrigin: `${cx / 16}rem ${cy / 16}rem`,
    opacity: state.opacity,
    transform: `scale(${state.scale})`,
    transition: 'opacity 2s',
  }
}

onMounted(() => {
  stars.forEach((_, index) => {
    animateStar(index, stars[index][2])
  })

  constellations.forEach((constellation, constellationIndex) => {
    animateConstellation(constellationIndex)
    constellation.forEach((_, starIndex) => {
      const globalIndex =
        stars.length +
        constellations
          .slice(0, constellationIndex)
          .reduce((acc, c) => acc + c.length, 0) +
        starIndex
      animateStar(globalIndex, false)
    })
  })
})

const animateStar = (index, dim) => {
  useTimeoutFn(() => {
    starStates.value[index].opacity = dim ? 0.5 : 0.8 // Start with a higher opacity
    useRafFn(() => {
      const t = (Date.now() % 4000) / 4000
      // Adjust the opacity range to ensure stars are always visible
      starStates.value[index].opacity = dim
        ? 0.3 + 0.2 * Math.sin(t * Math.PI * 2) // Range: 0.1 to 0.5 for dim stars
        : 0.6 + 0.2 * Math.sin(t * Math.PI * 2) // Range: 0.4 to 0.8 for bright stars
      starStates.value[index].scale = dim
        ? 1 + 0.2 * Math.sin(t * Math.PI * 2) // Range: 0.8 to 1.2 for dim stars
        : 1.1 + 0.1 * Math.sin(t * Math.PI * 2) // Range: 1.0 to 1.2 for bright stars
    })
  }, Math.random() * 2000)
}

const animateConstellation = index => {
  useTimeoutFn(
    () => {
      constellationStates.value[index].pathOpacity = 0.2
      const animationDuration = 3000 // 3 seconds for the drawing animation
      const startTime = Date.now()

      useRafFn(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / animationDuration, 1)
        constellationStates.value[index].pathOffset =
          constellationStates.value[index].pathLength * (1 - progress)

        if (
          progress === 1 &&
          constellations[index].length !==
            new Set(constellations[index].map(String)).size
        ) {
          constellationStates.value[index].fillOpacity = Math.min(
            0.02,
            constellationStates.value[index].fillOpacity + 0.001,
          )
        }
      })
    },
    Math.random() * 3000 + 2000,
  )
}
</script>
