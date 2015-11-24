var observable = require("data/observable");
var frames = require('ui/frame');

var packOptionModel = {
    packTypes: ['Standard', 'Premium'],
    userInfo: {}
};

var packOptionVM = new observable.Observable(packOptionModel);
module.exports = packOptionVM;
