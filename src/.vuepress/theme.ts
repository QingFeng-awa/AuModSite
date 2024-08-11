import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://aumod.site",
  author: {
    name: "QingFeng",
    url: "https://qingfengawa.me",
  },
  iconAssets: "https://at.alicdn.com/t/c/font_4649910_6ca6cfc71ig.css",
  logo: "/AuModDocs.png",
  repo: "QingFeng-awa/AuModSite",
  docsDir: "src",
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      copyright: false,
      footer: "© 2024 By QingFeng",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      }
    }
  },
  plugins: {
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
                attrs: { type: "tip" },
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
