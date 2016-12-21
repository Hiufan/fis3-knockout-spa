var ko = require('knockout');
require('knockout-postbox');
var router = require('router');

function appViewModel() {
    // Data
    var self = this;
    // self.pages = ['最新', '最热'];
    self.chosenPageId = ko.observable();
    self.chosenPageData = ko.observable();
    self.currentView = ko.observable('page0');

    // Behavior
    router(self);
};

var vm = new appViewModel(); 

ko.applyBindings(vm);
