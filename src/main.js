var ko = require('knockout');
var router = require('router');

function appViewModel() {
    // Data
    var self = this;
    self.pages = ['page0', 'page1', 'page2', 'page3'];
    self.chosenPageId = ko.observable();
    self.chosenPageData = ko.observable();
    self.currentView = ko.observable('page0');

    // Behavior
    router(self);
};

var vm = new appViewModel(); 

ko.applyBindings(vm);

