import { defineConfig } from "vitepress";
import { bili } from "../public/svgs";

export default defineConfig({
  base: "/docs/",
  description: "源于幻想,活于影中.",
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    darkModeSwitchLabel: "外观切换",
    docFooter: {
      next: "下一篇",
      prev: "上一篇",
    },
    editLink: {
      pattern: "https://github.com/racespeedtime/docs/edit/main/docs/:path",
      text: "编辑此页",
    },
    footer: {
      copyright: "Copyright © 2014-present RaceSpeedTime团队",
      message: "始于2014/5/31，由 VitePress 强力驱动",
    },
    lastUpdatedText: "最后一次更新",
    logo: "/logo2018.png",
    outlineTitle: "在此页面上",
    returnToTopLabel: "回到顶部",
    sidebar: [
      {
        items: [
          {
            link: "/guide/",
            text: "起步",
          },
          {
            link: "/guide/history",
            text: "发展史",
          },
          {
            link: "/guide/member",
            text: "成员",
          },
        ],
        text: "介绍",
      },
      {
        items: [
          {
            link: "/server/system",
            text: "体系",
          },
          {
            link: "/server/directory",
            text: "目录结构",
          },
          {
            link: "/server/run",
            text: "运行",
          },
          {
            link: "/server/deploy",
            text: "部署",
          },
          {
            link: "/server/credits",
            text: "致谢",
          },
        ],
        text: "游戏服",
      },
    ],
    sidebarMenuLabel: "菜单",
    siteTitle: "骇速之时",
    socialLinks: [
      {
        icon: { svg: bili },
        link: "https://space.bilibili.com/6667765",
      },
      {
        icon: "github",
        link: "https://github.com/racespeedtime",
      },
    ],
  },
  titleTemplate: ":title - RaceSpeedTime Docs",
});
