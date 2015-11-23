var packOptionVM = require("./main-view-model");
var view = require("ui/core/view");
var platform = require("platform");
var application = require("application");
var vibrator = require("nativescript-vibrate");
var dialog = require("nativescript-dialog");
var frames = require('ui/frame');
var obervableArrayModule = require('data/observable-array');
var model = new obervableArrayModule.ObservableArray();

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = packOptionVM;
}

exports.selectPack = function (args) {

    var packType = args['object']['packType'];
    
    frames.topmost().navigate({
        moduleName: "./openPack/openPack",
        context: packType
    });
};

exports.pageLoaded = pageLoaded;
