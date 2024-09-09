import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://aumod.site",
  logo: "/AuModDocs.png",
  favicon: "/AuModDocs.png",
  iconAssets: "https://at.alicdn.com/t/c/font_4649910_137wqn6xg8b.css",
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
      footer: "WSV: v2.2.8.005 (LCoG: 66788cd)",
      displayFooter: true,
    }
  },
  plugins: {
    notice: [
      {
        path: "/",
        title: "The Airship杯赛选手报名中",
        content: "参与赛事夺冠即可获得150元奖金!",
        actions: [
          {
            text: "立即报名",
            link: "https://docs.qq.com/form/page/DU1BoQUJiVVlSbUVR",
            type: "primary"
          },
          {
            text: "详细信息",
            link: "/Cup/TheAirship/"
          }
        ]
      },
      {
        path: "/Cup/TheAirship/",
        title: "该比赛可能不会开赛",
        content: "由于我们的比赛宣传片<del>又烂时长又短</del>没有流量,导致直至9月8日也仅有16人参赛。<br>如在开赛前3天仍没有到达要求选手人数,我们将<strong>取消此次赛事</strong>。<br>感谢您的理解与支持。"
      },
      {
        path: "/HostOnly/",
        title: "模组收录、维护频率减缓",
        content: "由于本人学业问题,我现在的精力不足以让我维护这些内容。<br>我在TheAirship杯赛结束前会将精力主要放在杯赛上,请您谅解。"
      },
      {
        path: "/AllClient/",
        title: "模组收录、维护频率减缓",
        content: "由于本人学业问题,我现在的精力不足以让我维护这些内容。<br>我在TheAirship杯赛结束前会将精力主要放在杯赛上,请您谅解。"
      },
      {
        path: "/Tool/",
        title: "工具收录、维护频率减缓",
        content: "由于本人学业问题,我现在的精力不足以让我维护这些内容。<br>我在TheAirship杯赛结束前会将精力主要放在杯赛上,请您谅解。"
      },
      {
        path: "/Tool/plugin/",
        title: "插件收录、维护频率减缓",
        content: "由于本人学业问题,我现在的精力不足以让我维护这些内容。<br>我在TheAirship杯赛结束前会将精力主要放在杯赛上,请您谅解。"
      },
    ],
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
      components: ["VPCard","SiteInfo","Badge","BiliBili"],
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
      footnote: true,
      tabs: true,
      hint: true,
      chart: true
    },
  },
});