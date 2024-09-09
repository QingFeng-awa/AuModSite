import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/HostOnly/": [
    {
      text: "HostOnly",
      icon: "project",
      link: "/en/HostOnly/",
      activeMatch: "^/en/HostOnly/$",
      children: [
        { text: 'TownOfHost', link: '/en/HostOnly/TownOfHost' },
        { text: 'TownOfNewEpic_Xtreme', link: '/en/HostOnly/TownOfNewEpic_Xtreme'},
        { text: 'TownOfHostEdited', link: '/en/HostOnly/TownOfHostEdited'},
        { text: 'TownOfHostPlus', link: '/en/HostOnly/TownOfHostPlus'},
        { text: 'TownOfNext', link: '/en/HostOnly/TownOfNext'},
        { text: 'TownOfHostEnhanced', icon:"star", link: '/en/HostOnly/TownOfHostEnhanced'},
        { text: 'EndlessHostRoles', link: '/en/HostOnly/EndlessHostRoles'},
        { text: 'TownOfPlus', link: '/en/HostOnly/TownOfPlus'},
        { text: 'TownOfHost_Y', link: '/en/HostOnly/TownOfHost_Y'},
        { text: 'TownOfChaos', link: '/en/HostOnly/TownOfChaos' },
        { text: 'TheOtherHostRoles', link: '/en/HostOnly/TheOtherHostRoles' },
        { text: 'TownOfHostReEdited', link: '/en/HostOnly/TownOfHostReEdited'}
      ]
    }
  ],
  "/en/AllClient/": [
    {
      text: "AllClient",
      icon: "project",
      link: "/en/AllClient/",
      activeMatch: "^/en/AllClient/$",
      children: [
        { text: 'TownOfUs', link: '/en/AllClient/TownOfUs' },
        { text: 'TheOtherRoles', link: '/en/AllClient/TheOtherRoles' },
        { text: 'SuperNewRoles', link: '/en/AllClient/SuperNewRoles' },
        { text: 'LasMonjas', link: '/en/AllClient/LasMonjas' },
        { text: 'ExtremeRoles', link: '/en/AllClient/ExtremeRoles' },
        { text: 'Nebula on the Ship', icon:"star", link: '/en/AllClient/NebulaOnTheShip' },
        { text: 'TownOfUsR', link: '/en/AllClient/TownOfUsR' },
        { text: 'StellarRoles', link: '/en/AllClient/StellarRoles' },
        { text: 'AllTheRoles', link: '/en/AllClient/AllTheRoles' },
        { text: 'CrowdedMod', link: '/en/AllClient/CrowdedMod' }
      ]
    }
  ],
  "/en/Tool/": [
    {
      text: "Tool",
      icon: "tool",
      link: "/en/Tool/",
      collapsible: true,
      expanded: true,
      children: [
        { text: "BetterCrewLink", link: "/en/Tool/BetterCrewLink" },
        { text: "ModManager", link: "/en/Tool/ModManager"}
      ]
    },
    {
      text: "Plugin",
      icon: "plugin",
      link: "/en/Tool/plugin/",
      collapsible: true,
      children: [
        { text: "YuEzTools", link: "/en/Tool/plugin/YuEzTools" },
        { text: "FinalSuspect_Xtreme", link: "/en/Tool/plugin/FinalSuspect_Xtreme"}
      ]
    }
  ],
  "/en/guide/": [
    {
      text: "Guide",
      icon: "guide",
      link: "/en/guide/",
      children: [
        {
          text: "Mod Install",
          icon: "install",
          children: [
            { text: "Steam", icon: "Steam", link: "/en/guide/install/Steam" },
            { text: "Epic", icon: "Epic", link: "/en/guide/install/Epic" },
          ]
        },
        {
          text: "FAQ",
          icon: "FAQ",
          children: [
            { text: "First Start Mod Not-Response", link: "/en/guide/FAQ/FirstRunMod"},
          ]
        }
      ]
    },
  ],
  "/en/temporary/": [
    {
      text: "Temporary",
      icon: "temporary",
      children: [
        { 
          text: "For Developer",
          icon: "developer",
          children: [
            { text: "Free Cloud Service", link: "/en/temporary/developer/Cloud" }
          ]
        }
      ]
    }
  ]
});
