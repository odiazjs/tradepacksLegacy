var observable = require("data/observable");
var frames = require('ui/frame');

var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.counter = 42;
        this.set("message", this.counter + " taps left");
    }
    HelloWorldModel.prototype.tapAction = function () {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left");
        }
    };

    HelloWorldModel.prototype.openPack = function () {
        var topmost = frames.topmost();
        topmost.navigate("./openPack/openPack");
    };

    return HelloWorldModel;
})(observable.Observable);

exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();
