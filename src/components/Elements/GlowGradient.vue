<template>
  <svg
    class="absolute top-0 left-1/2 transform -translate-x-1/2 h-[40rem] w-full"
    aria-hidden="true"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <defs>
      <radialGradient
        id="top-blue-fade-desktop"
        cy="0%"
        cx="50%"
        r="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stop-color="rgba(225, 57, 250, 0.3)"></stop>
        <stop offset="53.95%" stop-color="rgba(94, 0, 255, 0.09)"></stop>
        <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
      </radialGradient>
      <radialGradient
        id="top-blue-fade-mobile"
        cy="0%"
        cx="50%"
        r="100%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stop-color="rgba(225, 57, 250, 0.3)"></stop>
        <stop offset="53.95%" stop-color="rgba(94, 0, 255, 0.09)"></stop>
        <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
      </radialGradient>
    </defs>
    <rect
      width="100"
      height="100"
      fill="url(#top-blue-fade-desktop)"
      class="hidden lg:block"
    ></rect>
    <rect
      width="100"
      height="100"
      fill="url(#top-blue-fade-mobile)"
      class="lg:hidden"
    ></rect>
  </svg>
</template>
<script setup></script>
