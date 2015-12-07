var utils = require('../shared/utils');
var urlConfig = require('../shared/urlConfiguration');
var playersByUserModel = require('../playersByUser/playersByUserVM');

var Service = (function () {
    function Service() {
    }

    Service.prototype.getPlayersByColor = function (color) {

        var colors = [
            { id: 0, name: 'bronze' },
            { id: 1, name: 'silver' },
            { id: 2, name: 'gold' },
            { id: 3, name: 'special' }
        ];

        return new Promise(function (resolve, reject) {

            var playersList = [];
            var url = urlConfig.getUrl('players_by_user');
            var model = {
                user: 1,
                color: colors[color].name
            }

            utils.makeRequest(url, model, 'POST').then(function (response) {
                
                if (typeof response != "undefined" && response != null) {
                    response = formatCards(response);
                    resolve(response);
                }

            }, function (error) {
                Service.showErrorAndReject(error, reject);
            });
        });
    }

    return Service;
})();

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

exports.Service = Service;
exports.service = new Service();