import { defineConfig } from 'vitepress'

const nav = [
  {
    text: '词汇',
    activeMatch: '/word/',
    link: '/word/noun'
  }
]

const sidebar = {
  '/word/': [
    {
      text: '词汇',
      link: '/word/noun',
      items: [
        { text: '名词', link: '/word/noun' },
        { text: '动词', link: '/word/verb' },
        { text: '形容词', link: '/word/adjective' },
        { text: '副词', link: '/word/adverb' },
        { text: '代词', link: '/word/pronoun' }
      ]
    }
  ]
}


export default defineConfig({
  title: 'ningdese',
  lastUpdated: true,
  srcDir: 'docs',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Shimada666/ningdese'
      }
    ],
    editLink: {
      pattern: 'https://github.com/shimada666/ningdese/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Shimada666'
    },
    nav,
    sidebar
  },
  vite: {

  },
  vue: {
    reactivityTransform: true
  }
})
