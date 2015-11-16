var observableModule = require('data/observable');
var obervableArrayModule = require('data/observable-array');
var utils = new observableModule.Observable();
var http = require('http');
var model = new obervableArrayModule.ObservableArray();

utils.getJSON = function(url) {

    if (model.length > 0) {
        model.splice(0, model.length);
    }

    http.getJSON(url).then(function(response) {

        if (typeof response != "undefined" && response != null) {
            response.forEach(function(item) {
                model.push(item);
            });
        }

    }, function(ex) {
        console.log(ex);
    });

    return model;
};

utils.postJSON = function (url, model) {

    var result = http.request({
        url: url,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: JSON.stringify(model)
    }).then(function (response) {
        if (typeof response != "undefined") {
            response = JSON.stringify(response);
            response = JSON.parse(response);
            var content = response.content;
            result = handleRequest(content);
            return result;
        }

    }, function (ex) {
        console.log("Error " + ex);
    });

    return (result);

};

function handleRequest(result){

	var messageDto = {};

	if(typeof result != "undefined" && result != null && result.status == "success"){

	    messageDto = {
	        message: result.message,
	        cssClass: "success",
	        show: true,
	        status: result.status
	    };

	} else if (result != null) {

	    messageDto = {
	        message: result.message,
	        cssClass: "error",
	        show: true,
	        status: result.status
	    };
	}
	
	return messageDto;
};

utils.getProperties = function(obj){

    var out = '';
    for (var i in obj) {
        out = out+obj[i]+"-"; 	
    }
    return out;
};

utils.parseDate = function (date) {

    date = date.year + "-" + date.month + "-" + date.day;
    return date;
};

module.exports = utils;
