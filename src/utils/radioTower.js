;(function(ko){
    var radioTower = new ko.subscribable();

    ko.subscribable.fn.pub = function(topic) {
        this.subscribe(function(newValue) {
            radioTower.notifySubscribers(newValue, topic);
        });
        return this; //support chaining
    };
    ko.subscribable.fn.sub = function(topic,call,vm) {
        var target = vm || null;
        var cb = call || this; //如果没有call，那么直接捆绑原始数据
        radioTower.subscribe(cb, target, topic);

        return this;  //support chaining
    };
})(ko);