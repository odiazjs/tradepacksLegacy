var packOptionVM = require("./main-view-model");
var userInfoVM = require("./shared/userInfo");
var vibrator = require("nativescript-vibrate");
var frames = require('ui/frame');
var actionBarModule = require("ui/action-bar");
var utils = require('./shared/utils');
var http = require('http');
var urlConfig = require('./shared/urlConfiguration');

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = packOptionVM;

    page.on("navigatedTo", function () {
        page.bindingContext = packOptionVM;
    });

    var url = urlConfig.getUrl('user_info');
    var model = { user: 1 };

    utils.postJSON(url, model).then(function (response) {
        if (typeof response != "undefined") {
            userInfoVM.username = response["FIRST_NAME"] + " " + response["LAST_NAME"];
            userInfoVM.coins = utils.parseThousand(response["COINS"]);
            userInfoVM.lastPackNo = response["PACK_NO"];
            packOptionVM.userInfo = userInfoVM;
        } else {
            $(function (ex) {
                console.log("Error " + ex);
            });
        }
    });
}

exports.selectPack = function (args) {

    var item =  args.object.bindingContext;
    
    frames.topmost().navigate({
        moduleName: "./openPack/openPack",
        context: item.id
    });
};

function getUserInfo(userId) {

    
};

exports.pageLoaded = pageLoaded;
