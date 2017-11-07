"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configuration = (function () {
    function Configuration(console, file, colors, logLevel) {
        this.console = console;
        this.file = file;
        this.colors = colors;
        this.logLevel = logLevel;
    }
    return Configuration;
}());
exports.Configuration = Configuration;
var Color;
(function (Color) {
    Color["Red"] = "\u001B[31m";
    Color["Green"] = "\u001B[32m";
    Color["Yellow"] = "\u001B[33m";
    Color["White"] = "\u001B[37m";
})(Color = exports.Color || (exports.Color = {}));
var Level;
(function (Level) {
    Level["info"] = "info";
    Level["debug"] = "debug";
    Level["warning"] = "warning";
    Level["error"] = "error";
})(Level = exports.Level || (exports.Level = {}));
//# sourceMappingURL=Configurations.js.map