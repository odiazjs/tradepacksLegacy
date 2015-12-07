var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var utils = require('../shared/utils');
var serviceModule = require('../shared/serviceModule');
var viewModelBaseModule = require("../shared/view-model-base");

var MyClubViewModel = (function (_super) {
    __extends(MyClubViewModel, _super);
    function MyClubViewModel() {
        _super.call(this);
        this._selectedPackType = 2;
    }

    Object.defineProperty(MyClubViewModel.prototype, "players", {
        get: function () {
            return this._players;
        },
        set: function (value) {
            if (this._players != value) {
                this._players = value;
                this.notifyPropertyChange("players", value);
            }
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(MyClubViewModel.prototype, "selectedPackType", {
        get: function () {
            return this._selectedPackType;
        },
        set: function (value) {
            if (this._selectedPackType != value) {
                this._selectedPackType = value;
                this.notifyPropertyChange("selectedPackType", value);
                this.refresh();
            }
        },
        enumerable: true,
        configurable: true
    });

    MyClubViewModel.prototype.refresh = function () {
        var _this = this;
        if (!this.beginLoading())
            return;
        var getPlayersMethod = getMethodByFilter(this.selectedPackType);
        getPlayersMethod.then(function (data) {
            _this.players = data;
            _this.endLoading();

        }, function (error) {
            _this.endLoading();
        });
    };

    return MyClubViewModel;
})(viewModelBaseModule.ViewModelBase);

function getMethodByFilter(selectedPackType) {
    return serviceModule.service.getPlayersByColor(selectedPackType);
}

exports.MyClubViewModel = MyClubViewModel;