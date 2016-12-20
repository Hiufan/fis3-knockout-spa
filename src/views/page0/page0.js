var ko = require('knockout');

require('banner/banner');

module.exports = ko.components.register('page0', {
    template: __inline('./page0.html')
});

