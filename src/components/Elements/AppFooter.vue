<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a :href="$appUrl" class="flex items-center">
            <img
              src="/images/logo_dark.svg"
              class="h-8 me-3"
              :alt="`${$appName} Logo`"
              loading="lazy"
            />
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2
              class="mb-6 text-sm font-medium text-gray-900 uppercase dark:text-white"
            >
              Resources
            </h2>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a :href="$appUrl = '/docs'" class="hover:underline">Docs</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-medium text-gray-900 uppercase dark:text-white"
            >
              Follow us
            </h2>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a :href="$repoUrl" class="hover:underline">Github</a>
              </li>
              <li>
                <a href="" class="hover:underline"
                  >Discord</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2024 <a :href="$appUrl" class="hover:underline">{{ $appName }}</a
          >. All Rights Reserved. | Website made with ❤️ by
          <a href="https://github.com/MnkyArts" target="_blank"
            >Liam Robinson</a
          >
        </span>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup></script>
