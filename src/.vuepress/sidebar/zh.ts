import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/HostOnly/": [
    {
      text: "H系模组",
      icon: "Project",
      link: "/HostOnly/",
      activeMatch: "^/HostOnly/$",
      children: [
        { text: 'TownOfHost', link: '/HostOnly/TownOfHost' },
        { text: 'TownOfNewEpic_Xtreme', link: '/HostOnly/TownOfNewEpic_Xtreme'},
        { text: 'TownOfHostEdited', link: '/HostOnly/TownOfHostEdited'},
        { text: 'TownOfHostPlus', link: '/HostOnly/TownOfHostPlus'},
        { text: 'TownOfNext', link: '/HostOnly/TownOfNext'},
        { text: 'TownOfHostEnhanced', icon:"Star", link: '/HostOnly/TownOfHostEnhanced'},
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
      icon: "Project",
      link: "/AllClient/",
      activeMatch: "^/AllClient/$",
      children: [
        { text: 'TownOfUs', link: '/AllClient/TownOfUs' },
        { text: 'TheOtherRoles', link: '/AllClient/TheOtherRoles' },
        { text: 'SuperNewRoles', link: '/AllClient/SuperNewRoles' },
        { text: 'LasMonjas', link: '/AllClient/LasMonjas' },
        { text: 'ExtremeRoles', link: '/AllClient/ExtremeRoles' },
        { text: 'Nebula on the Ship', icon:"Star", link: '/AllClient/NebulaOnTheShip' },
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
      icon: "Tool",
      link: "/Tool/",
      collapsible: true,
      expanded: true,
      children: [
        { text: "BetterCrewLink", link: "/Tool/BetterCrewLink" },
        { text: "ModManager", link: "/Tool/ModManager"}
      ]
    },
    {
      text: "插件",
      icon: "Plugin",
      link: "/Tool/plugin/",
      collapsible: true,
      children: [
        { text: "YuEzTools", link: "/Tool/plugin/YuEzTools" },
        { text: "FinalSuspect_Xtreme", link: "/Tool/plugin/FinalSuspect_Xtreme"}
      ]
    }
  ],
  "/guide/": [
    {
      text: "指南",
      icon: "Guide",
      link: "/guide/",
      children: [
        {
          text: "模组安装",
          icon: "install",
          collapsible: true,
          expanded: true,
          children: [
            { text: "Steam", icon: "Steam", link: "/guide/install/Steam" },
            { text: "Epic", icon: "Epic", link: "/guide/install/Epic" },
          ]
        },
        {
          text: "疑难解答",
          icon: "FAQ",
          collapsible: true,
          expanded: true,
          children: [
            { text: "首次启动模组无反应", link: "/guide/FAQ/FirstRunMod"},
            { text: "GitHub无法访问", link: "/guide/FAQ/GithubTimeOut"},
            { text: "更新检查失败", link: "/guide/FAQ/CheckUpdateErr"}
          ]
        }
      ]
    },
  ],
  "/Cup/": [
    {
      text: "赛事",
      icon: "Cup",
      children: [
        { 
          text: "The Airship杯",
          icon: "Hot",
          link: "/Cup/TheAirship/",
          children: [
            { text: "赛事规则", link: "/Cup/TheAirship/Rules" },
            { text: "选手信息", link: "/Cup/TheAirship/PlayerInfo" },
            { text: "赛事进度", link: "/Cup/TheAirship/CupProgress" }
          ]
        },
        {
          text: "MIRA杯",
          link: "/Cup/MIRA/"
        }
      ]
    },
  ]
});
