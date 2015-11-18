var openPackModel = require('./openPackVM');
var appSettings = require("application-settings");
var http = require('http');
var utils = require('../shared/utils');
var view = require("ui/core/view");
var frames = require('ui/frame');
var obervableArrayModule = require('data/observable-array');
var model = new obervableArrayModule.ObservableArray();

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = openPackModel;
    page.addCssFile("openPack.css");

    openPackModel.set("packIsOpening", false);
    openPackModel.set("showPackWrapper", true);
    openPackModel.set("packHasOpened", false);

    var pack = page.getViewById("packWrapper");
    pack.animate({
        translate: { x: 0, y: 50 },
        scale: { x: 1.1, y: 1.1 },
        duration: 400
    });
}

exports.openPackEvent = function (args) {

    openPackModel.set("packIsOpening", true);

    var url = "http://gdsgt.net/getjson/json2.php?user=1&pack=1";
    var playersList = [];

    http.getJSON(url).then(function (response) {

        if (typeof response != "undefined" && response != null) {
            response.forEach(function (item) {
                playersList.push(item);
            });

            var i = 0;

            openPackModel.rating = playersList[i].rating;
            openPackModel.position = playersList[i].position;
            openPackModel.clubBadgeUrl = playersList[i].club_image;
            openPackModel.nationFlagUrl = playersList[i].nation_image;
            openPackModel.headShotImgUrl = playersList[i].headshot_image;
            openPackModel.name = playersList[i].name.toUpperCase();

            if (playersList[i].position == "GK") {
                openPackModel.attributes["div"] = playersList[i].attributes["fut.attribute.DIV"];
                openPackModel.attributes["han"] = playersList[i].attributes["fut.attribute.HAN"];
                openPackModel.attributes["kic"] = playersList[i].attributes["fut.attribute.KIC"];
                openPackModel.attributes["ref"] = playersList[i].attributes["fut.attribute.REF"];
                openPackModel.attributes["spd"] = playersList[i].attributes["fut.attribute.SPD"];
                openPackModel.attributes["pos"] = playersList[i].attributes["fut.attribute.POS"];

            } else {
                openPackModel.attributes["pac"] = playersList[i].attributes["fut.attribute.PAC"];
                openPackModel.attributes["sho"] = playersList[i].attributes["fut.attribute.SHO"];
                openPackModel.attributes["pas"] = playersList[i].attributes["fut.attribute.PAS"];
                openPackModel.attributes["dri"] = playersList[i].attributes["fut.attribute.DRI"];
                openPackModel.attributes["def"] = playersList[i].attributes["fut.attribute.DEF"];
                openPackModel.attributes["phy"] = playersList[i].attributes["fut.attribute.PHY"];
            }

            handlePackAnimation(args);

        }

    }, function (ex) {
        console.log(ex);
    });
    
};

function handlePackAnimation(args) {

    var sender = args.object;
    var parent = sender.parent;
    if (parent) {
        var pack = view.getViewById(parent, "packWrapper");
        var openPackBtn = view.getViewById(parent, "openPackBtn");
        var rating = view.getViewById(parent, "rating");
        var position = view.getViewById(parent, "position");
        var clubBadge = view.getViewById(parent, "clubBadge");
        var nation = view.getViewById(parent, "nation");
        var headshot = view.getViewById(parent, "headshot");
        var name = view.getViewById(parent, "name");
        var attrsLeft = view.getViewById(parent, "attrsLeft");
        var attrsRight = view.getViewById(parent, "attrsRight");

        rating.animate({
            scale: { x: 2, y: 2 }
        });
        position.animate({
            scale: { x: 2, y: 2 }
        });
        clubBadge.animate({
            scale: { x: 2, y: 2 }
        });
        nation.animate({
            scale: { x: 1, y: 1 }
        });
        headshot.animate({
            scale: { x: 2, y: 2 }
        });
        name.animate({
            scale: { x: 2, y: 2 }
        });
        attrsLeft.animate({
            scale: { x: 2, y: 2 }
        });
        attrsRight.animate({
            scale: { x: 2, y: 2 }
        });

        if (openPackBtn) {
            openPackBtn.animate({
                scale: { x: 0, y: 0 },
                duration: 600,
                opacity: 0
            });
        }

        if (pack) {
            pack.animate({
                translate: { x: 0, y: -25 },
                scale: { x: 1.2, y: 1.2 },
                duration: 1500
            }).then(function () {
                pack.animate({
                    opacity: 0,
                    duration: 1000
                }).then(function () {
                    openPackModel.set("packIsOpening", false);
                    openPackModel.set("packHasOpened", true);
                    pack.animate({
                        opacity: 1,
                        duration: 1000
                    }).then(function () {
                        if (clubBadge) {
                            clubBadge.animate({
                                opacity: 1,
                                duration: 500,
                                scale: { x: 0.6, y: 0.6}
                            }).then(function(){
                              if (nation) {
                                  nation.animate({
                                    opacity: 1,
                                    duration: 500,
                                    scale: { x: 0.5, y: 0.5 }
                                }).then(function () {
                                    if (position) {
                                        position.animate({
                                            opacity: 1,
                                            duration: 500,
                                            scale: { x: 1, y: 1 }
                                        }).then(function () {
                                            if (rating) {
                                                rating.animate({
                                                    opacity: 1,
                                                    duration: 500,
                                                    scale: { x: 1, y: 1 }
                                                }).then(function () {
                                                    if (attrsLeft && attrsRight) {
                                                        attrsLeft.animate({
                                                            opacity: 1,
                                                            duration: 500,
                                                            scale: { x: 1, y: 1 }
                                                        })
                                                        attrsRight.animate({
                                                            opacity: 1,
                                                            duration: 500,
                                                            scale: { x: 1, y: 1 }
                                                        }).then(function () {
                                                            if (headshot && name) {
                                                                headshot.animate({
                                                                    opacity: 1,
                                                                    duration: 500,
                                                                    scale: { x: 1.3, y: 1.3 }
                                                                })
                                                                name.animate({
                                                                    opacity: 1,
                                                                    duration: 500,
                                                                    scale: { x: 1, y: 1 }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })

                    }
                  })
                })
            });
        }
    }
}

exports.pageLoaded = pageLoaded;