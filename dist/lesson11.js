"use strict";
var getColor = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var i in arguments) {
        console.log(arguments[i]);
    }
    console.log(arguments.length);
};
getColor('Green');
getColor('Green', 'Blue');
getColor('Green', 'Yellow', 'Brown');
//# sourceMappingURL=lesson11.js.map