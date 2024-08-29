import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "home",
    link: "/"
  },
  {
    text: "关于",
    icon: "about",
    link: "/about",
  },
  {
    text: "模组",
    icon: "project",
    children: [
      {
        text: "H系模组",
        icon: "project",
        link: "/HostOnly/",
        exact: false
      },
      {
        text: "全客户端模组",
        icon: "project",
        link: "/AllClient/",
        exact: false
      }
    ]
  },
  {
    text: "实用工具",
    icon: "tool",
    link: "/Tool/",
    exact: false
  },
  {
    text: "指南",
    icon: "guide",
    link: "/guide/",
    exact: false
  },
  {
    text: "赛事",
    icon: "Cup",
    children: [
      {
        text: "TheAirship杯",
        icon: "Cup",
        link: "/Cup/TheAirship/",
        exact: false
      }
    ]
  },
  {
    text: "赞赏",
    icon: "afdian",
    link: "/donate"
  }
]);