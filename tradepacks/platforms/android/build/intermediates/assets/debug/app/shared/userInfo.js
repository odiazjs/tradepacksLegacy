var observable = require("data/observable");
var frames = require('ui/frame');
var http = require('http');

var userInfoModel = {
    userId: 1,
    username: "",
    email: "",
    coins: 0,
    lastPackNo: 0,
    players: []
};

var userInfoVM = new observable.Observable(userInfoModel);
module.exports = userInfoVM;