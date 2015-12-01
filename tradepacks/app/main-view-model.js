var observable = require("data/observable");
var frames = require('ui/frame');

var packOptionModel = {
    packOptions: [
        {
            id: 'bronze',
            display: 'BRONZE PACKS',
            img: 'res://bronzerare',
            desc1: '6 PLAYERS AT LEAST 1 RARE',
            desc2: '250 COINS'
        },
        {
            id: 'silver',
            display: 'SILVER PACKS',
            img: 'res://silverare',
            desc1: '6 PLAYERS AT LEAST 1 RARE',
            desc2: '500 COINS'
        },
        {
            id: 'gold',
            display: 'GOLD PACKS',
            img: 'res://goldrare',
            desc1: '6 PLAYERS AT LEAST 1 RARE',
            desc2: '750 COINS'
        },
        {
            id: 'special',
            display: 'SPECIAL PACKS',
            img: 'res://special',
            desc1: '9 PLAYERS AT LEAST 1 RARE',
            desc2: '1000 COINS'
        }
    ],
    userInfo: {}
};

var packOptionVM = new observable.Observable(packOptionModel);
module.exports = packOptionVM;
