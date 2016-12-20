var ko = require('knockout');
var qwest = require('qwest');

module.exports = ko.components.register('page1', {
    viewModel: function() {
        var self = this;
    
        self.items = ko.observableArray();

        qwest.get('/api/topics/hot.json')
            .then(function(xhr, response) {
                console.log(response);
                self.items(response);
            }); 
    },
    template: __inline('./page1.html')
});
