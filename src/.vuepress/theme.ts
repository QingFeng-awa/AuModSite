import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://aumod.site",
  logo: "/AuModDocs.png",
  favicon: "/AuModDocs.png",
  iconAssets: "https://at.alicdn.com/t/c/font_4649910_hmaeryiegy.css",
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
      footer: "WSV: v2.2.2.0000 (Pc: a2e1aea)<br>由<a href='https://www.rainyun.com/QingFeng_?s=WebSite' target='_blank'>雨云</a>提供云服务&技术支持",
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
      components: ["VPCard","SiteInfo","Badge"],
    },
    sitemap: [
      {
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