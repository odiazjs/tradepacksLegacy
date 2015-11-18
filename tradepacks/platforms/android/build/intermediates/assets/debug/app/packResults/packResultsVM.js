var observableModule = require('data/observable');

var packResultModel = {
    rating: 0,
    position: '',
    club: '',
    clubBadgeUrl: '',
    nation: '',
    nationFlagUrl: '',
    headShotImgUrl: '',
    name: '',
    attributes: [{
        pac: 0,
        sho: 0,
        pas: 0,
        dri: 0,
        def: 0,
        phy: 0
    }],
    packHasOpened: true
};

var packResultVM = new observableModule.Observable(packResultModel);
module.exports = packResultVM;
