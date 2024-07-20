import { defineConfig } from 'vitepress'

export default defineConfig({
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-Hans',
      title: 'Among Us模组档案',
      titleTemplate: ':title - Among Us模组档案',
      description: '一个记录所有模组与作者的网站。',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          {
            text: '模组',
            items: [
              { text: 'H系模组', link: '/Mods/Host/' },
              { text: '非H系模组', link: '/Mods/NoHost/' }
            ]
          },
          { text: '作者', link: '/Authors/' },
          { text: '贡献', link: '/Contributing'}
        ],
        sidebar: {
          '/Mods/Host/': [
            {
              text: 'H系模组',
              items: [
                { text: 'TownOfHost', link: '/Mods/Host/TownOfHost' },
              ]
            }
          ],
          '/Mods/NoHost/': [
            {
              text: '非H系模组',
              items: [
                { text: 'TownOfUs', link: '/Mods/NoHost/TownOfUs' },
              ]
            }
          ],
          '/Authors/': [
            {
              text: '作者',
              items: [
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/QingFeng-awa/AuModSite/blob/main/:path',
          text: '在GitHub上查看此页'
        },
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Among Us Mod Archives',
      titleTemplate: ':title - Among Us Mod Archives',
      description: 'A website to record all mods and authors.',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Mods',
            items: [
              { text: 'Host Mod', link: '/en/Mods/Host/' },
              //{ text: 'NoHost Mod', link: '/en/Mods/NoHost/' }
            ]
          },
          { text: 'Authors', link: '/en/Authors/' },
          { text: 'Contributing', link: '/en/Contributing'}
        ],
        sidebar: {
          '/en/Mods/': [
            {
              text: 'Mods',
              items: [
                { text: 'TownOfHost', link: '/en/Mods/Host/TownOfHost' },
              ]
            }
          ],
          '/en/Authors/': [
            {
              text: 'Authors',
              items: [
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/QingFeng-awa/AuModSite/blob/main/:path',
          text: 'See this Page on GitHub'
        },
        sidebarMenuLabel: "Menu",
        darkModeSwitchLabel: "ColorMode",
        lightModeSwitchTitle: "Now is dark mode",
        darkModeSwitchTitle: "Now is light mode",
        returnToTopLabel: "Go to top",
        docFooter: {
          prev: false,
          next: false
        },
      }
    }
  },
  lastUpdated: false,
  themeConfig: {
    logo: '/favicon.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/QingFeng-awa/AuModSite' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    footer: {
      copyright: 'Copyright © 2024 <a href="https://qingfengawa.me">QingFeng</a>'
    }
  },
})