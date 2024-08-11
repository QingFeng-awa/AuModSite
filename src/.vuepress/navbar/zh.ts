import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "home",
    link: "/"
  },
  {
    text: "H系模组",
    link: "/HostOnly/",
    exact: false
  },
  {
    text: "全客户端模组",
    link: "/AllClient/",
    exact: false
  }
]);