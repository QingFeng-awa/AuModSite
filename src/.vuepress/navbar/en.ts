import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Home",
    icon: "home",
    link: "/en/"
  },
  {
    text: "About",
    icon: "about",
    link: "/en/about",
  },
  {
    text: "Mod",
    icon: "project",
    children: [
      {
        text: "HostOnly",
        icon: "project",
        link: "/en/HostOnly/",
        exact: false
      },
      {
        text: "AllClient",
        icon: "project",
        link: "/en/AllClient/",
        exact: false
      }
    ]
  },
  {
    text: "Tool",
    icon: "tool",
    link: "/en/Tool/",
    exact: false
  },
  {
    text: "Guide",
    icon: "guide",
    link: "/en/guide/",
    exact: false
  },
  /*{
    text: "活动",
    icon: "temporary",
    link: "/temporary/",
    exact: false
  },*/
  {
    text: "Donate",
    icon: "afdian",
    link: "/en/donate"
  }
]);