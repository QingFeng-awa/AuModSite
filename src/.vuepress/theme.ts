import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://aumod.site",
  logo: "/AuModDocs.png",
  favicon: "/AuModDocs.png",
  iconAssets: "https://at.alicdn.com/t/c/font_4649910_u4yea0vy3s.css",
  repo: "QingFeng-awa/AuModSite",
  docsRepo: "QingFeng-awa/AuModSite",
  docsDir: "src",
  docsBranch: "v2",
  author: false,
  date: false,
  lastUpdated: true,
  contributors: true,
  copyright: false,
  toc: false,
  /*隐藏上下一页的Config似乎不起作用,需要其他解决方案。
  文档链接: https://theme-hope.vuejs.press/zh/config/intro.html
  prev: false,
  next: false,*/
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "© 2024 By <a href='https://qingfengawa.me' target='_blank'>QingFeng</a>",
      displayFooter: true,
    }
  },
  plugins: {
    searchPro: {
      autoSuggestions: true,
      queryHistoryCount: "0",
      resultHistoryCount: "10",
      SearchProHotKeyOptions: [
        {
          key: "k",
          ctrl: true
        }
      ]
    },
    photoSwipe: {
      download: false
    },
    readingTime: false,
    /*comment: {
      provider: "Giscus",
      repo: "QingFeng-awa/AuModSite",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },*/
    components: {
      components: ["Badge", "VPCard"],
    },
    notice: [
      {
        path: "/",
        title: "网站尚未完成开发",
        content: "由于v2版本站点编写较为仓促,导致部分v1原有功能未完成。<br>非常抱歉,我们将尽快完成。",
        actions: [
          {
            text: "回到v1版本",
            link: "https://v1.aumod.site",
            type: "primary",
          },
          { 
            text: "支持我的开发",
            link: "https://afdian.com/a/aumodsite"
          }
        ]
      }
    ],
    sitemap: [
      {
        sitemapFilename: "/sitemap.xml",
        changefreq: "hourly"
      }
    ],
    mdEnhance: {
      align: true,
      component: true,
      imgLazyload: true,
      footnote: true
    },
  },
});