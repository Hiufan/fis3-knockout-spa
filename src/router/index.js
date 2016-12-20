var Router = require('director').Router;

// http://stackoverflow.com/a/23608416/4652609
require('page0/page0');
require('page1/page1');
require('page2/page2');
require('page3/page3');

module.exports = function(vm){
    var routes = {
        '/page0': 'page0',
        '/page1': 'page1',
        '/page2': 'page2',
        '/page3': 'page3'
    };

    var container = {
        page0: function() {
            vm.chosenPageId('page0'); 
            vm.currentView('page0');
        },
        page1: function() {
            vm.chosenPageId('page1'); 
            vm.currentView('page1');           
        },
        page2: function() {
            vm.chosenPageId('page2'); 
            vm.currentView('page2');
        },
        page3: function() {
            console.log(arguments);
            vm.chosenPageId('page3'); 
            vm.currentView('page3');
        }
    };

    Router(routes).configure({resource: container}).init('/page0');
}