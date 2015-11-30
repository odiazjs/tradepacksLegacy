var observableModule = require('data/observable');

var openPackModel = {
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

var openPackVM = new observableModule.Observable(openPackModel);
module.exports = openPackVM;
