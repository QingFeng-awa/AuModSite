import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "home",
    link: "/"
  },
  {
    text: "H系模组",
    icon: "HostOnly",
    link: "/HostOnly/",
    exact: false
  }
]);
