import { defineConfig } from 'vitepress'

export default defineConfig({
  cleanUrls: true,
  locales: {
    root: {
      title: "Among Us Mod",
      description: "一个记录所有模组的网站",
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      title: "Among Us Mod",
      description: "A website to record all mods and authors",
      label: 'English',
      lang: 'en-US',
      link: '/en/'
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '模组', link: '/mods' },
      { text: '作者', link: '/authors'},
      { text: '打赏', link: '/donate'}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/QingFeng-awa/AuModSite' }
    ]
  }
})
