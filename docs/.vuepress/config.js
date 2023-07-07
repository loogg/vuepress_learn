module.exports = {
  title: '马龙伟', // 网站的标题
  description: '马龙伟测试网页', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  base:'/vuepress_learn/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/hero.png'
    }] // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  theme: 'vuepress-theme-maker',
  themeConfig: {
    logo: '/hero.png',
    nav: [
      // 直接跳转，'/'为不添加路由，跳转至首页，以/结尾的最终对应的都是/index.html,也就是README.md文件编译后的页面
      {
        text: 'Home',
        link: '/'
      },
      // 对应blog/fontend/README.md
      {
        text: '前端',
        link: '/blog/fontend/'
      },
      {
        text: '后端',
        link: '/blog/backend/'
      },
      // 对应/guide/guide.md
      {
        text: '导航',
        link: '/guide/guide'
      },
    ],
    // sidebar: 'auto',

    // sidebar: {
    //   //对象的默认路径
    //   '/blog/fontend/': [
    //     '', //侧边栏第一个页面是：/blog/fontend/README.md,、链接文字自动获取(页面的第一个header)，即h1(前端技术)
    //     'myhtml',  //侧边栏第二个页面是：/blog/fontend/myhtml.md,链接文字自动获取(页面的第一个header)，即h2(html 二级标题)
    //     ['myJavascript', 'js自定义的标题'] //侧边栏第三个页面是：/blog/fontend/myJavascript.md ,指定链接的文字，使用一个格式为 [link, text] 的数组。
    //   ]
    // },
    // sidebarDepth: 2,


    sidebar: [
      {
        title: '分组1 前端',
        collapsable: false,
        children: [
          '/blog/fontend/myhtml',
          ['/blog/fontend/myJavascript', 'js自定义的标题']
        ],
      },
      {
        title: '分组2 后端',
        collapsable: true,
        children: [
          '/blog/backend/myjava',
        ]
      }
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',

    searchMaxSuggestions: 10  // 搜索框显示的搜索结果数量
  }
}