var observableModule = require('data/observable');

var openPackModel = {
    rating: 0,
    position: '',
    club: '',
    clubBadgeUrl:'',
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
    
    packIsOpening: false
};

var openPackVM = new observableModule.Observable(openPackModel);
module.exports = openPackVM;
