var observableModule = require('data/observable');

var openPackModel = {
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
    packIsOpening: false,
    showPackWrapper: true,
    packHasOpened: false
};

var openPackVM = new observableModule.Observable(openPackModel);
module.exports = openPackVM;
