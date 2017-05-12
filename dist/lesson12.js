"use strict";
var getColorSpread = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
    console.log(arguments.length);
};
var message = "Hello";
var colors = ['Red', 'Green', 'Blue'];
getColorSpread.apply(void 0, [message].concat(colors));
//# sourceMappingURL=lesson12.js.map