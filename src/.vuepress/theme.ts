import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://aumod.site",
  logo: "/AuModDocs.png",
  favicon: "/AuModDocs.png",
  iconAssets: "https://at.alicdn.com/t/c/font_4649910_cyn3htqhf8.css",
  repo: "QingFeng-awa/AuModSite",
  docsRepo: "QingFeng-awa/AuModSite",
  docsDir: "src",
  docsBranch: "v2",
  author: {
    name: "QingFeng",
    url: "https://qingfengawa.me",
    email: "qingfeng_awa@163.com"
  },
  license: "GPL-3.0",
  lastUpdated: true,
  toc: false,
  prevLink: false,
  nextLink: false,
  date: false,
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "本站由<a href='https://www.rainyun.com/QingFeng_?s=WebSite'>雨云</a>提供云计算服务",
      displayFooter: true,
    }
  },
  plugins: {
    linksCheck: {
      dev: false,
      build: "error"
    },
    git: {
      contributors: false
    },
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
    components: {
      components: ["VPCard","SiteInfo"],
    },
    /*激活评论系统会导致无法显示页面,需要解决。
    参考https://theme-hope.vuejs.press/zh/guide/feature/comment.html#waline
    与https://ecosystem.vuejs.press/zh/plugins/blog/comment/waline/config.html
    comment: {
      provider: "Waline",
      serverURL: "https://waline.aumod.site",
      dark: "auto",
      meta: [
        "nick",
        "mail"
      ],
      requiredMeta: [
        "mail"
      ],
      wordLimit: "200",
      pageSize: "20"
    },*/
    notice: [
      /*{
        path: "/",
        title: "网站尚未完成开发",
        content: "由于v2版本站点编写较为仓促,导致部分v1原有功能未完成。<br>非常抱歉,我将尽快恢复所有功能。",
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
      },*/
      {
        path: "/en/",
        title: "We use machine translation for this language localization.",
        content: "Due to the lack of a professional team to assist me and my limited skills, I had to use machine translation to localize this language.<br>I am very sorry for the bad experience."
      }
    ],
    sitemap: [
      {
        excludePaths: ["/temporary/"],
        sitemapFilename: "/sitemap.xml",
        sitemapXSLFilename: "/sitemap.xsl",
        changefreq: "hourly"
      }
    ],
    mdEnhance: {
      align: true,
      component: true,
      figure: true,
      imgLazyload: true,
      footnote: true
    },
  },
});