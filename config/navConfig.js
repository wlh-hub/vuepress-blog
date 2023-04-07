module.exports = [{
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
]