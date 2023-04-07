const secureConf = require('./secureinfo.js');

module.exports = {
    'vuepress-plugin-comment': { //使用Valine配置评论功能
        choosen: 'valine',
        // options选项中的所有参数，会传给Valine的配置
        options: {
            el: '#valine-vuepress-comment',
            appId: secureConf.leancloud_appId,
            appKey: secureConf.leancloud_appKey,
            placeholder: '同道中人，文明留言...', // 评论框占位提示符
            lang: 'zh-cn', // 支持中文
        }
    }
}