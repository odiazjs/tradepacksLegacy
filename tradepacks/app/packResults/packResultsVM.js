var observableModule = require('data/observable');

var packResultModel = {
    cards: []
};

var packResultVM = new observableModule.Observable(packResultModel);
module.exports = packResultVM;
