import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Among Us模组档案",
      description: "一个记录所有Au模组的网站。",
    },
    /*"/en/": {
      lang: "en-US",
      title: "Among Us Mod Archive",
      description: "A website to record all mods."
    }*/
  },
  port: "8000",
  theme,
});
