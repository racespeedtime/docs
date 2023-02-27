import { defineConfig } from "vitepress";
import { bili } from "../public/svgs";

export default defineConfig({
  base: "/docs/",
  description: "源于幻想,活于影中.",
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    algolia: {
      appId: "M6AMR0JWRB",
      apiKey: "686d4e93a74c204736dfdfafee35d35c",
      indexName: "racespeedtimeio",
      locales: {
        root: {
          label: "简体中文",
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },
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
      message: "始于2014/5/31，由 VitePress 和 Algolia DocSearch 强力驱动",
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
  },
  titleTemplate: ":title - RaceSpeedTime Docs",
});
