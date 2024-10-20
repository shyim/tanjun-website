import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tanjun Docs',
  description: 'Tanjun Documentation',
  outDir: '../dist/docs',
  base: '/docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/install' },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Installation', link: '/install' },
          { text: 'Requirements', link: '/requirements' },
          { text: 'Deploying a Hello World', link: '/deploy-hello-world' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shyim/tanjun' },
    ],
  },
})
