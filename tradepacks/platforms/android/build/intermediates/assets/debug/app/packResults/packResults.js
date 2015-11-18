var packResultsModel = require('./packResultsVM');
var appSettings = require("application-settings");
var http = require('http');
var utils = require('../shared/utils');
var view = require("ui/core/view");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = packResultsModel;
    page.addCssFile("packResults.css");

    var sender = args.object;
    var parent = sender.parent;
    if (parent) {
        var pack = page.getViewById("packResult");
        if (pack) {
            pack.animate({
                translate: { x: 0, y: -25 },
                scale: { x: 1.2, y: 1.2 },
                duration: 100,
                opacity: 1
            });
        }
    }
}

exports.pageLoaded = pageLoaded;