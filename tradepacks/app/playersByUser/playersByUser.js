var playerByUserModel = require('./playersByUserVM');
var layout = require("ui/layouts/grid-layout");
var frames = require('ui/frame');
var topmost = frames.topmost();


function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = playerByUserModel;
}

exports.changeTab = function (args) {
    alert(this);
};

exports.pageLoaded = pageLoaded;