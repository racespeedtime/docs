import UnoCSS from "unocss/vite";
import components from "unplugin-vue-components/vite";
import autoImport from "unplugin-auto-import/vite";
import { VarletUIResolver } from "unplugin-vue-components/resolvers";
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
      copyright: "Copyright © 2014-此刻 RaceSpeedTime团队",
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
            link: "/server/dev",
            text: "运维",
          },
          {
            link: "/server/credits",
            text: "致谢",
          },
          {
            link: "/server/changelog",
            text: "更新日志",
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
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
  },
  titleTemplate: ":title - RaceSpeedTime Docs",
  vite: {
    ssr: { noExternal: ["@varlet/ui"] },
    plugins: [
      UnoCSS(),
      components({
        resolvers: [VarletUIResolver()],
      }),
      autoImport({
        resolvers: [VarletUIResolver({ autoImport: true })],
      }),
    ],
  },
});
