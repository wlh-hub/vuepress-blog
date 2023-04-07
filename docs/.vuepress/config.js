module.exports = {
    title: '个人主页', //网站标题
    description: '泼猴的琐碎博客记录', //网站描述
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/favicon.ico'
        }],
    ], //额外的需要被注入到当前页面的HTML"head"中的标签，其中路径的"/"就是public资源目录。
    locales:{
        '/':{
            lang:'zh-CN', //指定使用中文
        }
    },
    port: 8081, //端口号设置
    markdown: {
        lineNumbers: true, //代码显示行号
    },
    plugins: [
        [
          'vuepress-plugin-comment', //使用Valine配置评论功能
          {
            choosen: 'valine', 
            // options选项中的所有参数，会传给Valine的配置
            options: {
              el: '#valine-vuepress-comment',
              appId: 'jM6HMokrZqUuR3MVxEgA7bAA-gzGzoHsz',
              appKey: 'wHHqTftB0affWPsgsvFZWuMH',
              placeholder: '同道中人，文明留言...',  // 评论框占位提示符
              lang: 'zh-cn', // 支持中文
            }
          }
        ]
      ],
    themeConfig: { //导航栏配置
        logo:'/img/favicon.ico', //导航栏左侧的logo,不写就不显示
        lastUpdated:'上次更新', //会在每篇文章最后显示上次更新的时间  注意：只有将构建过程中的代码存放在基于git版本管理的GitHub或GitLab网站上面才能正常显示出页面的上次更新时间。
        repo: 'https://www.cnblogs.com/mmit/',  // 链接的地址
        repoLabel: '博客园',  // 链接的名称
        nav: [{
                text: '首页',
                link: '/'
            }, //默认是根目录（docs目录）下的README.md
            {
                text: '博文',
                items: [{
                        text: 'Vue',
                        link: '/vue/'
                    },
                    {
                        text: 'Javascript',
                        link: '/javascript/'
                    },

                ] //准备博文或关于页面的基础数据，在docs目录下面新建vue,javascript,about等文件夹，并在各文件夹下面创建README.md文件。
            },
            {
                text: '关于',
                link: '/about/'
            }, //链接到根目录docs下面的about文件夹下的README.md文件
            {
                text: '博客园',
                link: 'https://www.cnblogs.com/mmit/'
            }
        ],
        sidebar: {  //用于设置侧边栏
            '/vue/': [
                {
                    title: 'vue示例',
                    collapsable: false,  // 是否可折叠，默认可折叠true 
                    children: [
                        "vue1",
                        "vue2",
                    ]
                },
            ],
        },
        sidebarDepth: 2, // 侧边栏显示深度，默认为1，即显示一级标题
    },

}