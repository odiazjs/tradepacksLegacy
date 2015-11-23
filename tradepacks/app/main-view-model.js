var observable = require("data/observable");
var frames = require('ui/frame');

var packOptionModel = {
    packTypes: ['Standard', 'Premium']
};

var packOptionVM = new observable.Observable(packOptionModel);
module.exports = packOptionVM;
