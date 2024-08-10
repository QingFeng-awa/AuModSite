import { defineConfig } from 'vitepress'

export default defineConfig({
  cleanUrls: true,
  head: [
    ['link', 
      { rel: 'shortcut icon', href: '/AuModDocs.png', type: 'image/x-icon'}
    ],
    [
      'script',
      { type: "text/javascript" },
      `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "nfuw1z0crm");`
    ]
  ],
  // So,这玩意到底有什么用?
  sitemap: {
    hostname: 'https://aumod.site/',
    lastmodDateOnly: false
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
          { text: '关于', link: '/about' },
          { text: '指南', link: '/guide/'},
          {
            text: '模组',
            items: [
                { text: 'H系模组', link: '/Mods/HostOnly/' },
                { text: '全客户端系模组', link: '/Mods/AllClient/' },
                { text: '功能性插件', link: '/Mods/Functional/' }
            ]
          },
          { text: '贡献', link: '/Contributing'},
          { text: '赞赏', link: '/donate'},
        ],
        sidebar: {
          '/guide/': [
            {
              text: '教程',
              collapsed: false,
              items: [
                {
                  text: '模组安装',
                  collapsed: false,
                  items: [
                    {text: 'Steam安装模组',link: '/guide/tutorial/install/Steam'},
                    {text: 'Epic安装模组',link: '/guide/tutorial/install/Epic'}
                  ]
                },
              ]
            },
            {
              text: '疑难',
              collapsed: true,
              items: [
                {text: '无法打开github.com',link: '/guide/FAQ/GithubTimeOut'},
                {text: '启动Among Us时无反应',link: '/guide/FAQ/FirstRunMod'}
              ]
            }
          ],
          '/Mods/': [
            {
              text: 'H系模组',
              collapsed: false,
              items:[
                { text: 'TownOfHost', link: '/Mods/HostOnly/TownOfHost' },
                { text: 'TownOfNewEpic_Xtreme', link: '/Mods/HostOnly/TownOfNewEpic_Xtreme'},
                { text: 'TownOfHostEdited', link: '/Mods/HostOnly/TownOfHostEdited'},
                { text: 'TownOfHostPlus', link: '/Mods/HostOnly/TownOfHostPlus'},
                { text: 'TownOfNext', link: '/Mods/HostOnly/TownOfNext'},
                { text: 'TownOfHostEnhanced', link: '/Mods/HostOnly/TownOfHostEnhanced'},
                { text: 'EndlessHostRoles', link: '/Mods/HostOnly/EndlessHostRoles'},
                { text: 'TownOfPlus', link: '/Mods/HostOnly/TownOfPlus'},
                { text: 'TownOfHost_Y', link: '/Mods/HostOnly/TownOfHost_Y'},
                { text: 'TownOfChaos', link: '/Mods/HostOnly/TownOfChaos' },
                { text: 'TheOtherHostRoles', link: '/Mods/HostOnly/TheOtherHostRoles' },
              ]
            },
            {
              text: '全客户端系模组',
              collapsed: false,
              items: [
                { text: 'TownOfUs', link: '/Mods/AllClient/TownOfUs' },
                { text: 'TheOtherRoles', link: '/Mods/AllClient/TheOtherRoles' },
                { text: 'SuperNewRoles', link: '/Mods/AllClient/SuperNewRoles' },
                { text: 'LasMonjas', link: '/Mods/AllClient/LasMonjas' },
                { text: 'StellarRoles', link: '/Mods/AllClient/StellarRoles' },
                { text: 'Nebula on the Ship', link: '/Mods/AllClient/NebulaOnTheShip' },
                { text: 'TownOfUsR', link: '/Mods/AllClient/TownOfUsR' },
                { text: 'StellarRoles', link: '/Mods/AllClient/StellarRoles' },
                { text: 'AllTheRoles', link: '/Mods/AllClient/AllTheRoles' },
              ]
            },
            {
              text: '功能性插件',
              collapsed: false,
              items: [
                { text: 'YuEzTools', link: '/Mods/Functional/YuEzTools' },
                { text: 'MalumMenu', link: '/Mods/Functional/MalumMenu' },
              ]
            }
          ],
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
          { text: 'Guide', link: '/en/guide/'},
          { text: 'Contributing', link: '/en/Contributing'},
          { text: 'Sponsorship', link: '/en/donate'},
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Tutorials',
              collapsed: false,
              items: [
                {
                  text: 'Mod Install',
                  collapsed: false,
                  items: [
                    {text: 'Steam Install Mod',link: '/en/guide/tutorial/install/Steam'}
                  ]
                },
              ]
            },
            {
              text: 'FAQ',
              collapsed: true,
              items: [
              ]
            }
          ],
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
                  { text: 'EndlessHostRoles', link: '/en/Mods/HostOnly/EndlessHostRoles'},
                  { text: 'TownOfPuls', link: '/en/Mods/HostOnly/TownOfPuls'},
                  { text: 'TownOfHost_Y', link: '/en/Mods/HostOnly/TownOfHost_Y'},
                  { text: 'TownOfChaos', link: '/en/Mods/HostOnly/TownOfChaos' },
              ]
            }
          ],
          '/en/Mods/AllClient/': [
            {
              text: 'AllClient',
              items: [
                  { text: 'TownOfUs', link: '/en/Mods/AllClient/TownOfUs' },
                  { text: 'TheOtherRoles', link: '/en/Mods/AllClient/TheOtherRoles' },
                  { text: 'SuperNewRoles', link: '/en/Mods/AllClient/SuperNewRoles' },
                  { text: 'LasMonjas', link: '/en/Mods/AllClient/LasMonjas' },
                  { text: 'StellarRoles', link: '/en/Mods/AllClient/StellarRoles' },
                  { text: 'Nebula on the Ship', link: '/en/Mods/AllClient/NebulaOnTheShip' },
                  { text: 'TownOfUsR', link: '/en/Mods/AllClient/TownOfUsR' },
              ]
            }
          ],
          '/en/Mods/Functional/': [
            {
              text: 'Functional',
              items: [
                { text: 'YuAntiCheat', link: '/en/Mods/Functional/YuAntiCheat' },
                { text: 'MalumMenu', link: '/en/Mods/Functional/MalumMenu' },
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
    logo: '/AuModDocs.png',
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
