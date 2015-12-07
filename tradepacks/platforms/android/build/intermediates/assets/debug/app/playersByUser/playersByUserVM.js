var observableModule = require('data/observable');

var playersByUserModel = {
    id: 0,
    rating: 0,
    position: '',
    club: '',
    clubBadgeUrl: '',
    nation: '',
    nationFlagUrl: '',
    headShotImgUrl: '',
    name: '',
    color: '',
    attributes: [],
    packType: '',
    discardprice: 15,
    packIsOpening: false,
    showPackWrapper: true,
    packHasOpened: false
};

var playersByUserVM = new observableModule.Observable(playersByUserModel);
module.exports = playersByUserVM;