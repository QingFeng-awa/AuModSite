import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "Home",
    link: "/"
  },
  {
    text: "模组",
    icon: "Project",
    children: [
      {
        text: "H系模组",
        icon: "Project",
        link: "/HostOnly/",
        exact: false
      },
      {
        text: "全客户端模组",
        icon: "Project",
        link: "/AllClient/",
        exact: false
      }
    ]
  },
  {
    text: "实用工具",
    icon: "Tool",
    link: "/Tool/",
    exact: false
  },
  {
    text: "指南",
    icon: "Guide",
    link: "/guide/",
    exact: false
  }
]);