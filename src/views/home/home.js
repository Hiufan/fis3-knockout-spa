// http://knockoutjs.site/
// http://www.markyou.cn/Article/16/Singal%20Page%20App%EF%BC%9A%E4%BD%BF%E7%94%A8Knockout%E5%92%8CRequireJS%E5%88%9B%E5%BB%BA%E9%AB%98%E5%BA%A6%E6%A8%A1%E5%9D%97%E5%8C%96%E7%9A%84%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8%E5%BC%95%E6%93%8E
var ko = require('knockout');

require('nav/nav');
require('list/list');

module.exports = ko.components.register('home', {
    template: __inline('./home.html')
});
