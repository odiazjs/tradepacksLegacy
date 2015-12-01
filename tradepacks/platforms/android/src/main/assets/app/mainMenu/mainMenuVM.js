var observableModule = require('data/observable');

var mainMenutModel = {};

var mainMenuVM = new observableModule.Observable(mainMenutModel);
module.exports = mainMenuVM;