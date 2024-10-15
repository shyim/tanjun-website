<template>
  <div class="bg-gray-50 pt-20 pb-96 sm:py-24 overflow-hidden">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <div class="flex flex-col items-center gap-3">
        <h2
          class="text-center text-base/7 w-fit px-3 rounded-md border border-accent/40 text-accent"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :delay="100"
          :duration="1000"
        >
          Deploy faster
        </h2>
        <p
          class="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-6xl"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :delay="200"
          :duration="1000"
        >
          Everything you need to deploy your app.
        </p>
      </div>
      <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <div
          class="relative lg:row-span-2"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, scale: 1 }"
          :delay="300"
          :duration="1000"
        >
          <div
            class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"
          />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]"
          >
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p
                class="text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center"
              >
                One-Command Deploy
              </p>
              <p
                class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center"
              >
                Deploy your entire stack with a single command
              </p>
            </div>
            <div class="relative min-h-[30rem] w-full grow">
              <div
                class="absolute bottom-0 right-10 left-0 top-10 overflow-hidden rounded-r-xl bg-[#121314] shadow-2xl h-fit"
              >
                <div class="flex bg-black ring-1 ring-white/5">
                  <div
                    class="-mb-px pl-2 flex items-center space-x-2 text-sm font-medium leading-6 text-gray-400"
                  >
                    <div class="w-2 h-2 rounded-full bg-red-500"></div>
                    <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <div class="py-2 font-mono ml-2">tanjun@workflow:~$</div>
                  </div>
                </div>
                <div class="px-6 pb-14 pt-6 text-white">
                  <span class="text-green-400">tanjun@workflow:~$</span> tanjun
                  init<br />
                  <div class="ml-4">
                    <span class="text-blue-400">Project Name</span><br />
                    <span class="text-gray-500">Name of the project</span><br />
                    <span class="text-white"
                      ><span class="text-pink-400">></span>
                      MyAmazingProject</span
                    >
                  </div>
                  <div class="ml-4 mt-4">
                    <span class="text-blue-400">Image Name</span><br />
                    <span class="text-gray-500">Name of the Docker Image</span
                    ><br />
                    <span class="text-white"
                      ><span class="text-pink-400">></span> ghcr.io/shyim/test
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"
          />
        </div>
        <div
          class="relative max-lg:row-start-1"
          v-motion
          :initial="{ opacity: 0, y: -50 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :delay="300"
          :duration="1000"
        >
          <div
            class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"
          />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"
          >
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p
                class="text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center"
              >
                Multi-App Support
              </p>
              <p
                class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center"
              >
                Manage multiple applications on one server effortlessly
              </p>
            </div>
            <div
              class="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2"
            >
              <img
                class="w-full max-lg:max-w-xs"
                src="/images/platforms.png"
                alt=""
              />
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"
          />
        </div>
        <div
          class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :delay="100"
          :duration="1000"
        >
          <div class="absolute inset-px rounded-lg bg-white" />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]"
          >
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p
                class="text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center"
              >
                Service Integration
              </p>
              <p
                class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center"
              >
                Easily integrate databases, caches, and more
              </p>
            </div>
            <div
              class="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2"
            >
              <img
                class="h-[min(152px,40cqw)] object-cover object-center"
                src="/images/service.png"
                alt=""
              />
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"
          />
        </div>
        <div
          class="relative lg:row-span-2"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, scale: 1 }"
          :delay="300"
          :duration="1000"
        >
          <div
            class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
          />
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]"
          >
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p
                class="text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center"
              >
                Flexible Configuration
              </p>
              <p
                class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center"
              >
                Customize your deployment to fit your exact needs
              </p>
            </div>
            <div class="relative min-h-[30rem] w-full grow">
              <div
                class="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl"
              >
                <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div
                    class="-mb-px flex text-sm font-medium leading-6 text-gray-400"
                  >
                    <div
                      class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white"
                    >
                      .tanjun.yml
                    </div>
                    <div class="border-r border-gray-600/10 px-4 py-2">
                      App.vue
                    </div>
                  </div>
                </div>
                <div class="px-6">
                  <pre class="text-sm font-mono leading-relaxed">
                      <div v-for="(line, index) in highlightedYaml" :key="index" v-html="line"></div>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const yaml = `
server:
  # IP to your server
  address: 127.0.0.1
  port: 22
  username: root

# The name of the application, one server...
name: app-name

# The image name to use to push and pull...
image: "ghcr.io/shyim/test"

proxy:
  # The external reachable domain
  host: localhost
  # A healthcheck url to check if the app...
  healthcheck:
    path: /admin

  # Read the Readme for more options
    `

const highlightYaml = code => {
  return code.split('\n').map(line => {
    if (line.trim().startsWith('#')) {
      return `<span class="text-gray-500 truncate">${line}</span>`
    }

    const parts = line.split(':')
    if (parts.length > 1) {
      const [key, ...valueParts] = parts
      const value = valueParts.join(':').trim()
      const indent = line.match(/^\s*/)?.[0] || ''

      return `${indent}<span class="text-blue-400 truncate">${key}</span><span class="text-gray-300">:</span>${
        value ? ` <span class="text-green-400">${value}</span>` : ''
      }`
    }

    return line
  })
}

const highlightedYaml = computed(() => highlightYaml(yaml))
</script>
