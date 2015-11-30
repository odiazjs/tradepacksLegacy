var packResultsModel = require('./packResultsVM');
var appSettings = require("application-settings");
var http = require('http');
var utils = require('../shared/utils');
var view = require("ui/core/view");
var dialogs = require("ui/dialogs");
var urlConfig = require('../shared/urlConfiguration');
var frames = require('ui/frame');
var topmost = frames.topmost();

var platform = require("platform");
var application = require("application");
var dialog = require("nativescript-dialog");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = packResultsModel;
    page.addCssFile("packResults.css");
       
    page.on("navigatedTo", function () {
        packResultsModel.cards = formatCards(page.navigationContext);
    });
}

function formatCards(cards) {

    var result = [];

    cards.forEach(function (card) {

        var formattedCard = {
            attributes: {}
        };

        formattedCard.rating = card.rating;
        formattedCard.position = card.position;
        formattedCard.clubBadgeUrl = card.club_image;
        formattedCard.nationFlagUrl = card.nation_image;
        formattedCard.headShotImgUrl = card.headshot_image;
        formattedCard.name = card.name != null ? card.name.toUpperCase() : card.name;
        formattedCard.color = card.color;
        formattedCard.id = card.id;
        formattedCard.discardprice = card.discardprice;

        if (card.position == "GK") {
            formattedCard.attributes["div"] = card.attributes["fut.attribute.DIV"];
            formattedCard.attributes["han"] = card.attributes["fut.attribute.HAN"];
            formattedCard.attributes["kic"] = card.attributes["fut.attribute.KIC"];
            formattedCard.attributes["ref"] = card.attributes["fut.attribute.REF"];
            formattedCard.attributes["spd"] = card.attributes["fut.attribute.SPD"];
            formattedCard.attributes["pos"] = card.attributes["fut.attribute.POS"];

        } else {
            formattedCard.attributes["pac"] = card.attributes["fut.attribute.PAC"];
            formattedCard.attributes["sho"] = card.attributes["fut.attribute.SHO"];
            formattedCard.attributes["pas"] = card.attributes["fut.attribute.PAS"];
            formattedCard.attributes["dri"] = card.attributes["fut.attribute.DRI"];
            formattedCard.attributes["def"] = card.attributes["fut.attribute.DEF"];
            formattedCard.attributes["phy"] = card.attributes["fut.attribute.PHY"];
        }

        result.push(formattedCard);
    });

    return result;
}

exports.storePlayerInClub = function (args) {
    var item = args.object.bindingContext;
    var parent = args.object.parent.parent;
    var card = view.getViewById(parent, item.id);
        
    //setTimeout(function () {
    //    card.animate({
    //        translate: {
    //            x: -500,
    //            y: 0
    //        }, duration: 400
    //    });
    //}, 1000);
        

        setTimeout(function () {
            var cards = packResultsModel.cards.filter(function (card) {
                return card.id != item.id
            });
            packResultsModel.set("cards", cards);
        }, 400);

};

function discardOne(args) {
    var item = args.object.bindingContext;

    dialogs.confirm({
        title: "Discard Player",
        message: "Are you sure you want to discard this player? You will receive " + item.discardprice + " coins.",
        okButtonText: "Discard",
        cancelButtonText: "Cancel"
    }).then(function (result) {
        if (result) {
            var url = urlConfig.getUrl('discard_one_player');
            var model = { 
                user: 1, 
                id: item.id 
            };

            utils.postJSON(url, model).then(function (response) {
                if (response.mensaje == 'ok') {
                    var cards = packResultsModel.cards.filter(function (card) {
                        return card.id != item.id
                    });
                    packResultsModel.set("cards", cards);
                } else {
                    throw new 'Couldnt discard player at this time.';
                }
            });
        }
    });

}

function discardAll(args) {
    var item = args.object.bindingContext;
    var url = urlConfig.getUrl('discard_all');
    var model = {
        user: 1
    };

    utils.postJSON(url, model).then(function (response) {
        if (response.mensaje == 'ok') {
            packResultsModel.set("cards", []);
            frames.topmost().navigate({
                moduleName: "./main-page"
            });
        } else {
            frames.topmost().navigate({
                moduleName: "./main-page"
            });
            throw new 'Couldnt discard all players at this time.';
        }
    });

}

exports.pageLoaded = pageLoaded;
exports.discardOne = discardOne;
exports.discardAll = discardAll;