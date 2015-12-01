var observableModule = require('data/observable');
var urlConfig = new observableModule.Observable();

urlConfig.getUrl = function (key) {

    var urls = new Array();

    urls["open_pack"] = "http://gdsgt.net/getjson/api/get_players.php";
    urls["user_info"] = "http://gdsgt.net/getjson/api/get_user.php";
    urls["discard_one_player"] = "http://gdsgt.net/getjson/api/discard_one_player.php";
    urls["discard_all"] = "http://gdsgt.net/getjson/api/discard_players.php";
    urls['players_by_user'] = 'http://gdsgt.net/getjson/api/get_players_from_user.php';

    return urls[key];
};


module.exports = urlConfig;
