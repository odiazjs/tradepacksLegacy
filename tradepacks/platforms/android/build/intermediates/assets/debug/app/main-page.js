var packOptionVM = require("./main-view-model");
var userInfoVM = require("./shared/userInfo");
var vibrator = require("nativescript-vibrate");
var frames = require('ui/frame');
var actionBarModule = require("ui/action-bar");
var utils = require('./shared/utils');
var http = require('http');

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = packOptionVM;

    var url = "http://gdsgt.net/getjson/api/get_user.php?user=" + 1;

    http.getJSON(url).then(function (response) {
        if (typeof response != "undefined" && response != null) {
            userInfoVM.username = response["FIRST_NAME"] + " " + response["LAST_NAME"];
            userInfoVM.coins = response["COINS"];
            userInfoVM.lastPackNo = response["PACK_NO"];
            packOptionVM.userInfo = userInfoVM;
        }
    });
}

exports.selectPack = function (args) {

    var packType = args['object']['packType'];
    
    frames.topmost().navigate({
        moduleName: "./openPack/openPack",
        context: packType
    });
};

function getUserInfo(userId) {

    
};

exports.pageLoaded = pageLoaded;
