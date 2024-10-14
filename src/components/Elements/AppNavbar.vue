<template>
  <nav
    class="backdrop-blur-md border bg-indigo-50/70 border-gray-300 dark:bg-gray-900 fixed z-20 w-full"
  >
    <div
      class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a
        :href="$appUrl"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="/images/logo_dark.svg"
          class="h-8"
          :alt="`${$appName} Logo`"
        />
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <a
          class="hidden md:flex gap-1 justify-center p-2 mr-5"
          :href="$repoUrl"
          target="_blank"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="size-6 fill-slate-900"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
            ></path>
          </svg>
          {{ starCount }}
        </a>
        <button
          type="button"
          class="text-white bg-accent font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-accent dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get started
        </button>
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-accent md:dark:text-blue-500"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const starCount = ref(0)

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/repos/shyim/tanjun')
    const data = await response.json()
    starCount.value = data.stargazers_count
  } catch (error) {
    console.error('Error fetching GitHub stars:', error)
  }
})
</script>

<style scoped></style>
