"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configurations_1 = require("./Configurations");
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
            "debug": this.debug.apply(this, strings),
            "info": this.info.apply(this, strings),
            "warning": this.warning.apply(this, strings),
            "error": this.error.apply(this, strings)
        };
        console.log(options[level]);
    };
    Logger.prototype.debug = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        if (this.config.console) {
            this.debugToConsole(strings);
        }
        else {
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
        // write to file
    };
    Logger.prototype.info = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        if (this.config.console) {
            this.infoToConsole(strings);
        }
        else {
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
        // write to file
    };
    Logger.prototype.warning = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        if (this.config.console) {
            this.warningToConsole(strings);
        }
        else {
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
        // write to file
    };
    Logger.prototype.error = function () {
        var strings = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            strings[_i] = arguments[_i];
        }
        if (this.config.console) {
            this.errorToConsole(strings);
        }
        else {
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
        // write to file
    };
    return Logger;
}());
var logger = new Logger('kaki', { console: true, file: false, colors: true, logLevel: true });
logger.debug('hello world');
logger.info('hello world');
logger.warning('hello world');
logger.error('hello world');
logger.log('debug', 'kukuflitzu', 'my', 'life');
//# sourceMappingURL=logger.js.map