var openPackModel = require('./openPackVM');
var appSettings = require("application-settings");
var http = require('http');

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = openPackModel;
    page.addCssFile("openPack.css");

    var message = page.getViewById("goldPack");
    message.animate({
        translate: { x: 0, y: 300 },
        scale: { x: 2.5, y: 2.5 },
        duration: 800
    });

}

exports.openPackEvent = function() {
    openPackModel.set("packIsOpening", true);
};

exports.pageLoaded = pageLoaded;