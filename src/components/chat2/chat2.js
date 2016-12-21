var ko = require('knockout');

module.exports = ko.components.register('chat2', {
    viewModel: function(){
        var self = this;
        self.subscribeOn = 'chat1';
        self.publishOn = 'chat2';
        self.message = ko.observable();  
        self.messages = ko.observableArray([])
        
        ko.postbox.subscribe(self.subscribeOn, function (message) {        
            self.messages.push(message);       
        })          
    },    
    template: __inline('./chat2.html')
});
