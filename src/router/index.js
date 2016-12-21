var Router = require('director').Router;
var qwest = require('qwest');
var postbox = require('knockout-postbox');

// http://stackoverflow.com/a/23608416/4652609
require('home/home');
require('page0/page0');
require('page1/page1');
require('page2/page2');
require('page3/page3');

module.exports = function(vm){
    var routes = {
        '/hot': 'loadHot',
        '/latest': 'loadLatest',
    };

    var container = {
        loadHot: function(ctx){
            console.log(ctx);
            qwest.get('/api/topics/hot.json')
                .then(function(xhr, response) {
                   ko.postbox.publish('v2ex',response);
                }); 
        },
        loadLatest: function(){
            qwest.get('/api/topics/latest.json')
                .then(function(xhr, response) {
                   ko.postbox.publish('v2ex',response);
                }); 
        },
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

    Router(routes).configure({resource: container}).init('/home');
}