"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configurations_1 = require("./Configurations");
var fs = require("fs");
var Logger = (function () {
    function Logger(name, configuration) {
        this.name = name;
        this.config = configuration;
    }
    Logger.prototype.log = function (level) {
        var strings = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            strings[_i - 1] = arguments[_i];
        }
        var options = {
            "debug": this.debug,
            "info": this.info,
            "warning": this.warning,
            "error": this.error
        };
        var lvl = level || this.config.logLevel;
        options[lvl].apply(this, strings);
    };
    Logger.prototype.debug = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        if (this.config.console) {
            this.debugToConsole(strings);
        }
        if (this.config.file) {
            this.debugToFile(strings);
        }
    };
    Logger.prototype.debugToConsole = function (strings) {
        if (this.config.colors) {
            strings.forEach(function (msg) {
                console.log(Configurations_1.Color.White + '%s\x1b[0m', msg);
            });
        }
        else {
            strings.forEach(function (msg) {
                console.log(msg);
            });
        }
    };
    Logger.prototype.debugToFile = function (strings) {
        strings.forEach(function (msg) {
            fs.appendFile(__dirname + 'test.log', "DEBUG: " + msg + "\n", function (err) {
                if (err)
                    throw err;
            });
        });
    };
    Logger.prototype.info = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        if (this.config.console) {
            this.infoToConsole(strings);
        }
        if (this.config.file) {
            this.infoToFile(strings);
        }
    };
    Logger.prototype.infoToConsole = function (strings) {
        if (this.config.colors) {
            strings.forEach(function (msg) {
                console.log(Configurations_1.Color.Green + '%s\x1b[0m', msg);
            });
        }
        else {
            strings.forEach(function (msg) {
                console.log(msg);
            });
        }
    };
    Logger.prototype.infoToFile = function (strings) {
        strings.forEach(function (msg) {
            fs.appendFile(__dirname + 'test.log', "INFO: " + msg + "\n", function (err) {
                if (err)
                    throw err;
            });
        });
    };
    Logger.prototype.warning = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        if (this.config.console) {
            this.warningToConsole(strings);
        }
        if (this.config.file) {
            this.warningToFile(strings);
        }
    };
    Logger.prototype.warningToConsole = function (strings) {
        if (this.config.colors) {
            strings.forEach(function (msg) {
                console.log(Configurations_1.Color.Yellow + '%s\x1b[0m', msg);
            });
        }
        else {
            strings.forEach(function (msg) {
                console.log(msg);
            });
        }
    };
    Logger.prototype.warningToFile = function (strings) {
        strings.forEach(function (msg) {
            fs.appendFile(__dirname + 'test.log', "WARN: " + msg + "\n", function (err) {
                if (err)
                    throw err;
            });
        });
    };
    Logger.prototype.error = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        if (this.config.console) {
            this.errorToConsole(strings);
        }
        if (this.config.file) {
            this.errorToFile(strings);
        }
    };
    Logger.prototype.errorToConsole = function (strings) {
        if (this.config.colors) {
            strings.forEach(function (msg) {
                console.log(Configurations_1.Color.Red + '%s\x1b[0m', msg);
            });
        }
        else {
            strings.forEach(function (msg) {
                console.log(msg);
            });
        }
    };
    Logger.prototype.errorToFile = function (strings) {
        strings.forEach(function (msg) {
            fs.appendFile(__dirname + 'test.log', "ERROR: " + msg + " \n", function (err) {
                if (err)
                    throw err;
            });
        });
    };
    Logger.prototype.setConfiguration = function (conf) {
        this.config = conf;
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map