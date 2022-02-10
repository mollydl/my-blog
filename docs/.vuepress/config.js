module.exports = {
  base: "/my-blog-map/",
  dest: "dist",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  title: "Molly's blog",
  description: "海阔凭鱼跃，天高任鸟飞。Hey 你好！我是猫力",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    author: "molly",
    // 代码主题
    codeTheme: "tomorrow",
    nav: [
      { text: "主页", link: "/", icon: "reco-home" },
      { text: "时间轴", link: "/timeline/", icon: "reco-date" },
      {
        text: "工具推荐",
        icon: "reco-message",
        items: [
          {
            text: "mac软件大全",
            link: "https://macwk.com/soft/all/p1",
          },
          {
            text: "图片无损压缩",
            link: "https://tinypng.com",
          },
          {
            text: "色卡大全",
            link: "https://webgradients.com",
          },
          {
            text: "挖掘机配图",
            link: "https://www.logoly.pro",
          },
          {
            text: "正则可视化",
            link: "https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24",
          },
          {
            text: "数据结构/算法可视化",
            link: "https://visualgo.net/zh",
          },
        ],
      },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/mollydl",
            icon: "reco-github",
          },
          {
            text: "掘金",
            link: "https://juejin.cn/user/4107431174759256/posts",
            icon: "reco-juejin",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "道道里",
        desc: "宇宙真的好谦虚啊，明明拥有一切，却叫太空",
        logo: "https://daodaolee.cn/avatar.png",
        link: "https://daodaolee.cn/",
      },
      {
        title: "ryuurock",
        desc: "有一天就是今天，今天就是有一天",
        logo: "https://ryuurock.github.io/covers/common/userface.jpg",
        link: "https://ryuurock.github.io/",
      },
    ],
    logo: "/images/logo.jpg",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "最后更新时间",
    // 作者
    author: "猫力Molly",
    // 作者头像
    authorAvatar: "/images/logo.jpg",
    // 备案号
    record: "ICP备666666号-6 ",
    // 项目开始时间
    startYear: "2022",
    valineConfig: {
      appId: "uVX1RdW5NvC6zEnfjERU7mAb-gzGzoHsz", // your appId
      appKey: "DzzpF7cokBfNP107e5OjMKtQ", // your appKey
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      // 看板娘
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["koharu"],
        clean: true,
        width: 210,
        height: 322,
      },
    ],
    [
      //鼠标点击特效
      "cursor-effects",
      {
        size: 3,
        shape: ["circle"],
        zIndex: 999999999,
      },
    ],
    [
      //动态标题
      "dynamic-title",
      {
        showText: "",
        hideText: "天高任鸟飞",
      },
    ],
    [
      // vuepress复制粘贴提示插件
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功!",
        },
      },
    ],
  ],
};
