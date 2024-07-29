import { defineConfig } from 'vitepress'

export default defineConfig({
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  sitemap: {
    hostname: 'https://aumod.site/',
    lastmodDateOnly: true
  },
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
                { text: 'H系模组', link: '/Mods/HostOnly/' },
                { text: '全客户端系模组', link: '/Mods/AllClient/' },
              { text: '功能性模组', link: '/Mods/Functional/' }
            ]
          },
          { text: '作者', link: '/Authors/' },
          { text: '贡献', link: '/Contributing'},
          { text: '赞赏', link: '/donate'}
        ],
        sidebar: {
          '/Mods/HostOnly/': [
            {
              text: 'H系模组',
              items: [
                  { text: 'TownOfHost', link: '/Mods/HostOnly/TownOfHost' },
                  { text: 'TownOfNewEpic_Xtreme', link: '/Mods/HostOnly/TownOfNewEpic_Xtreme'},
                  { text: 'TownOfHostEdited', link: '/Mods/HostOnly/TownOfHostEdited'},
                  { text: 'TownOfHostPlus', link: '/Mods/HostOnly/TownOfHostPlus'},
                  { text: 'TownOfNext', link: '/Mods/HostOnly/TownOfNext'},
                  { text: 'TownOfHostEnhanced', link: '/Mods/HostOnly/TownOfHostEnhanced'},
                  { text: 'EndlessHostRoles', link: '/Mods/HostOnly/EndlessHostRoles'},
                  //{ text: 'TownOfHostEditedXi', link: '/Mods/HostOnly/TownOfHostEditedXi'},
              ]
            }
          ],
          '/Mods/AllClient/': [
            {
              text: '全客户端系模组',
              items: [
                  { text: 'TownOfUs', link: '/Mods/AllClient/TownOfUs' },
                  { text: 'TheOtherRoles', link: '/Mods/AllClient/TheOtherRoles' },
                  { text: 'SuperNewRoles', link: '/Mods/AllClient/SuperNewRoles' },
                  { text: 'LasMonjas', link: '/Mods/AllClient/LasMonjas' }
              ]
            }
          ],
          '/Mods/Functional/': [
            {
              text: '功能性插件',
              items: [
                { text: 'YuAntiCheat', link: '/Mods/Functional/YuAntiCheat' },
                { text: 'MalumMenu', link: '/Mods/Functional/MalumMenu' },
              ]
            }
          ],
          '/Authors/': [
            {
              text: '作者',
              items: [
                { text: 'KARPED1EM', link: '/Authors/KARPED1EM' },
                { text: 'Moe', link: '/Authors/Moe' },
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/QingFeng-awa/AuModSite/blob/main/docs/:path',
          text: '在GitHub上查看此页'
        },
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "颜色模式",
        lightModeSwitchTitle: "点击切换至浅色模式",
        darkModeSwitchTitle: "点击切换至深色模式",
        returnToTopLabel: "回到顶部",
        lastUpdated: {
          text: '上次更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        }
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
                { text: 'HostOnly', link: '/en/Mods/HostOnly/' },
                { text: 'AllClient', link: '/en/Mods/AllClient/' }
            ]
          },
          { text: 'Authors', link: '/en/Authors/' },
          { text: 'Contributing', link: '/en/Contributing'},
          { text: 'Sponsorship', link: '/en/donate'}
        ],
        sidebar: {
          '/en/Mods/HostOnly/': [
            {
              text: 'HostOnly',
              items: [
                  { text: 'TownOfHost', link: '/en/Mods/HostOnly/TownOfHost' },
                  { text: 'TownOfNewEpic_Xtreme', link: '/en/Mods/HostOnly/TownOfNewEpic_Xtreme'},
                  { text: 'TownOfHostEdited', link: '/en/Mods/HostOnly/TownOfHostEdited'},
                  { text: 'TownOfHostPlus', link: '/en/Mods/HostOnly/TownOfHostPlus'},
                  { text: 'TownOfNext', link: '/en/Mods/HostOnly/TownOfNext'},
                  { text: 'TownOfHostEnhanced', link: '/en/Mods/HostOnly/TownOfHostEnhanced'},
              ]
            }
          ],
          '/en/Mods/AllClient/': [
            {
              text: 'AllClient',
              items: [
                  { text: 'TownOfUs', link: '/en/Mods/AllClient/TownOfUs' },
                  { text: 'TheOtherRoles', link: '/en/Mods/AllClient/TheOtherRoles' },
                  { text: 'SuperNewRoles', link: '/Mods/AllClient/SuperNewRoles' },
                  { text: 'LasMonjas', link: '/Mods/AllClient/LasMonjas' },
              ]
            }
          ],
          '/en/Mods/Functional/': [
            {
              text: 'Functional',
              items: [
                { text: 'YuAntiCheat', link: '/en/Mods/Functional/YuAntiCheat' }
              ]
            }
          ],
          '/en/Authors/': [
            {
              text: 'Authors',
              items: [
                { text: 'KARPED1EM', link: '/en/Authors/KARPED1EM' },
                { text: 'Moe', link: '/en/Authors/Moe' },
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/QingFeng-awa/AuModSite/blob/main/docs/:path',
          text: 'See this Page on GitHub'
        },
        sidebarMenuLabel: "Menu",
        darkModeSwitchLabel: "ColorMode",
        lightModeSwitchTitle: "Now is dark mode",
        darkModeSwitchTitle: "Now is light mode",
        returnToTopLabel: "Go to top",
        lastUpdated: {
          text: 'Last Updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        }
      }
    }
  },
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
    docFooter: {
      prev: false,
      next: false
    },
    lastUpdated: true,
    footer: {
      copyright: 'Copyright © 2024 By <a href="https://qingfengawa.me">QingFeng</a>'
    }
  },
})
