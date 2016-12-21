var ko = require('knockout');
var qwest = require('qwest');
var postbox = require('knockout-postbox');
// var radioTower = require('./utils/radioTower');

module.exports = ko.components.register('nav', {
    viewModel: function () {
        var self = this;
        self.pages = [
            {text: '最热', link: '/#/hot'},
            {text: '最新', link: '/#/latest'}
        ];

        self.getArticleList = function (data) {
            qwest.get('/api/topics/' + data.href)
                .then(function(xhr, response) {
                   ko.postbox.publish('v2ex',response);
                }); 
        };
    },
    template: __inline('./nav.html')
});
