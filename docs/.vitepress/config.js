import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tanjun Docs',
  description: 'Tanjun Documentation',
  outDir: '../dist/docs',
  base: '/docs/',
  sitemap: {
    hostname: 'https://tanjun.sh/docs/'
  },
  editLink: {
    pattern: 'https://github.com/shyim/tanjun-website/edit/main/docs/:path'
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/getting-started/install' },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Installation', link: '/getting-started/install' },
          { text: 'Requirements', link: '/getting-started/requirements' },
          { text: 'Deploying a Hello World', link: '/getting-started/deploy-hello-world' },
          { text: 'Commands', link: '/getting-started/commands' },
          { text: 'Version Managment', link: '/getting-started/version-managment' },
        ],
      },
      {
        text: "Configuration",
        items: [
          { text: 'Image', link: '/configuration/image' },
          { text: 'Build Configuration', link: '/configuration/build' },
          { text: 'Server Configuration', link: '/configuration/server' },
          { text: 'Application Configuration', link: '/configuration/app' },
          { text: 'Service Configuration', link: '/configuration/service' },
          { text: 'Proxy Configuration', link: '/configuration/proxy' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shyim/tanjun' },
    ],
  },
  
})
