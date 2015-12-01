var mainMenuModel = require('./mainMenuVM');
var layout = require("ui/layouts/grid-layout");
var absoluteLayoutModule = require("ui/layouts/absolute-layout");
var frames = require('ui/frame');
var topmost = frames.topmost();


function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = mainMenuModel;
}

exports.browsePacks = function (args) {
    frames.topmost().navigate({
        moduleName: "./main-page"
    });
};

exports.pageLoaded = pageLoaded;