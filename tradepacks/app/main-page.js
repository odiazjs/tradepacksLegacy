var packOptionVM = require("./main-view-model");
var vibrator = require("nativescript-vibrate");
var frames = require('ui/frame');

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
