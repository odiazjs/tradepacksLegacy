var application = require("application");

application.mainModule = "./mainMenu/mainMenu";
application.cssFile = "./app.css";
application.start();


application.on(application.launchEvent, function (args) {
    if (application.android) {
        var activity = application.android.startActivity;
    }
});