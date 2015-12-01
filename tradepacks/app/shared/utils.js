var observableModule = require('data/observable');
var obervableArrayModule = require('data/observable-array');
var utils = new observableModule.Observable();
var http = require('http');
var model = new obervableArrayModule.ObservableArray();
var frames = require('ui/frame');
var topmost = frames.topmost();

utils.getJSON = function (url) {

    if (model.length > 0) {
        model.splice(0, model.length);
    }

    http.getJSON(url).then(function (response) {

        if (typeof response != "undefined" && response != null) {
            response.forEach(function (item) {
                model.push(item);
            });
        }

    }, function (ex) {
        alert(ex);
        console.log(e);
    });

    return model;
};

utils.makeRequest = function (url, model, method) {

    var request = http.request({
        url: url,
        method: method,
        headers: { "Content-Type": "application/json; charset=utf-8" },
        content: JSON.stringify(model)
    });

    var promise = request.then(handleRequest);
    return (promise);

};

function handleRequest(result) {

    if (typeof result != "undefined" && result != null && result.statusCode == 200) {
        result = JSON.stringify(result);
        result = JSON.parse(result);
        return result.content;
    } else {
        topmost.navigate("main-page");
    }

    return (result);
};

utils.getProperties = function (obj) {

    var out = '';
    for (var i in obj) {
        out = out + obj[i] + "-";
    }
    return out;
};

utils.parseDate = function (date) {

    date = date.year + "-" + date.month + "-" + date.day;
    return date;
};

utils.parseThousand = function (str) {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

module.exports = utils;
