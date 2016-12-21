var ko = require('knockout');
var qwest = require('qwest');

module.exports = ko.components.register('chat1', {
    viewModel: function(){
        var self = this;
        self.subscribeOn = 'chat2';
        self.publishOn = 'chat1';
        self.message = ko.observable('Hello,world!');  
        self.messages = ko.observableArray([]);
        
        self.send = function(){
            qwest.get('/api/topics/hot.json')
                .then(function(xhr, response) {
                    ko.postbox.publish(self.publishOn,response);    
                    self.message('');
                }); 
        }    
    },
    template: __inline('./chat1.html')
});

