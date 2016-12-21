var ko = require('knockout');
require('knockout-postbox');

module.exports = ko.components.register('list', {
    viewModel: function () {
        var self = this;
        self.items = ko.observableArray([]);
        ko.postbox.subscribe('v2ex', function (data) {  
            console.log(data);      
            self.items(data);
        });  
    },
    template: __inline('./list.html')
});
