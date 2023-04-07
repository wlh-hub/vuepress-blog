const pluginConf = require('../../config/pluginConfig.js');
const navConf = require('../../config/navConfig.js');
const sidebarConf = require('../../config/sidebarConfig.js');

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
    plugins: pluginConf,
    themeConfig: { //导航栏配置
        logo:'/img/favicon.ico', //导航栏左侧的logo,不写就不显示
        lastUpdated:'上次更新', //会在每篇文章最后显示上次更新的时间  注意：只有将构建过程中的代码存放在基于git版本管理的GitHub或GitLab网站上面才能正常显示出页面的上次更新时间。
        repo: 'https://www.cnblogs.com/mmit/',  // 链接的地址
        repoLabel: '博客园',  // 链接的名称
        nav: navConf,
        sidebar:sidebarConf,
        sidebarDepth: 2, // 侧边栏显示深度，默认为1，即显示一级标题
    },

}