import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://aumod.site",
  logo: "/AuModDocs.png",
  favicon: "/AuModDocs.png",
  repo: "QingFeng-awa/AuModSite",
  iconAssets: "https://at.alicdn.com/t/c/font_4649910_6ca6cfc71ig.css",
  docsDir: "src",
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
      footer: "© 2024 By QingFeng",
      displayFooter: true,
    }
  },
  plugins: {
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
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      chart: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "note" },
                content: "Recommended",
              };
          },
        },
      ],
      sitemapPlugin: [
        {
          sitemapFilename: "/sitemap.xml",
          changefreq: "hourly"
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});