var playersByUserModel = require('./playersByUserVM');
var layout = require("ui/layouts/grid-layout");
var frames = require('ui/frame');
var topmost = frames.topmost();
var serviceModule = require("../shared/serviceModule");
var playersByUserViewModel = require("./players-by-user-view-model");
var viewModel = new playersByUserViewModel.MyClubViewModel();

function pageLoaded(args) {
    var page = args.object;
    viewModel.refresh();
    page.bindingContext = viewModel;
}

exports.pageLoaded = pageLoaded;