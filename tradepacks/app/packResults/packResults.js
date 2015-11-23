var packResultsModel = require('./packResultsVM');
var appSettings = require("application-settings");
var http = require('http');
var utils = require('../shared/utils');
var view = require("ui/core/view");

function pageLoaded(args) {
    var page = args.object;
    var sender = args.object;
    var parent = sender.parent;

    page.bindingContext = packResultsModel;
    page.addCssFile("packResults.css");

    page.on("navigatedTo", function (eventData) {
        packResultsModel.cards = formatCards(page.navigationContext);
    });
}

function formatCards(cards) {

    var result = [];

    cards.forEach(function (card) {
            
        var formattedCard = {
            attributes: []
        };

        formattedCard.rating = card.rating;
        formattedCard.position = card.position;
        formattedCard.clubBadgeUrl = card.club_image;
        formattedCard.nationFlagUrl = card.nation_image;
        formattedCard.headShotImgUrl = card.headshot_image;
        formattedCard.name = card.name != null ? card.name.toUpperCase() : card.name;
        formattedCard.color = card.color;

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
    })

    return result;
}

exports.pageLoaded = pageLoaded;