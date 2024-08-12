import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://aumod.site",
  logo: "/AuModDocs.png",
  favicon: "/AuModDocs.png",
  iconAssets: "https://at.alicdn.com/t/c/font_4649910_6ca6cfc71ig.css",
  repo: "QingFeng-awa/AuModSite",
  //页面在配置后仍未显示最后编辑时间与贡献者,需要解决。
  docsRepo: "QingFeng-awa/AuModSite",
  docsDir: "src",
  docsBranch: "v2",
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