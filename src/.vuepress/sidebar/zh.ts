import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/HostOnly/": [
    {
      text: "H系模组",
      icon: "project",
      link: "/HostOnly/",
      activeMatch: "^/HostOnly/$",
      children: [
        { text: 'TownOfHost', link: '/HostOnly/TownOfHost' },
        { text: 'TownOfNewEpic_Xtreme', link: '/HostOnly/TownOfNewEpic_Xtreme'},
        { text: 'TownOfHostEdited', link: '/HostOnly/TownOfHostEdited'},
        { text: 'TownOfHostPlus', link: '/HostOnly/TownOfHostPlus'},
        { text: 'TownOfNext', link: '/HostOnly/TownOfNext'},
        { text: 'TownOfHostEnhanced', link: '/HostOnly/TownOfHostEnhanced'},
        { text: 'EndlessHostRoles', link: '/HostOnly/EndlessHostRoles'},
        { text: 'TownOfPlus', link: '/HostOnly/TownOfPlus'},
        { text: 'TownOfHost_Y', link: '/HostOnly/TownOfHost_Y'},
        { text: 'TownOfChaos', link: '/HostOnly/TownOfChaos' },
        { text: 'TheOtherHostRoles', link: '/HostOnly/TheOtherHostRoles' },
        { text: 'TownOfHostReEdited', link: '/HostOnly/TownOfHostReEdited'}
      ]
    }
  ],
  "/AllClient/": [
    {
      text: "全客户端模组",
      icon: "project",
      link: "/AllClient/",
      activeMatch: "^/AllClient/$",
      children: [
        { text: 'TownOfUs', link: '/AllClient/TownOfUs' },
        { text: 'TheOtherRoles', link: '/AllClient/TheOtherRoles' },
        { text: 'SuperNewRoles', link: '/AllClient/SuperNewRoles' },
        { text: 'LasMonjas', link: '/AllClient/LasMonjas' },
        { text: 'ExtremeRoles', link: '/AllClient/ExtremeRoles' },
        { text: 'Nebula on the Ship', link: '/AllClient/NebulaOnTheShip' },
        { text: 'TownOfUsR', link: '/AllClient/TownOfUsR' },
        { text: 'StellarRoles', link: '/AllClient/StellarRoles' },
        { text: 'AllTheRoles', link: '/AllClient/AllTheRoles' },
        { text: 'CrowdedMod', link: '/AllClient/CrowdedMod' }
      ]
    }
  ],
  "/Tool/": [
    {
      text: "工具",
      icon: "tool",
      link: "/Tool/",
      children: [
        { text: "BetterCrewLink", link: "/Tool/BetterCrewLink" }
      ]
    }
  ],
  "/guide/": [
    {
      text: "指南",
      icon: "guide",
      link: "/guide/",
      children: [
        {
          text: "模组安装",
          icon: "install",
          children: [
            { text: "Steam", icon: "Steam", link: "/guide/install/Steam" },
            { text: "Epic", icon: "Epic", link: "/guide/install/Epic" },
          ]
        },
        {
          text: "疑难解答",
          icon: "FAQ",
          children: [
            { text: "首次启动模组无反应", link: "/guide/FAQ/FirstRunMod"},
            { text: "GitHub无法访问", link: "/guide/FAQ/GithubTimeOut"}
          ]
        }
      ]
    }
  ]
});
