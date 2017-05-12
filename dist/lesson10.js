"use strict";
var getDivider = function () { return 2; };
var getValue = function (value, multifier, divider) {
    if (value === void 0) { value = 10; }
    if (multifier === void 0) { multifier = 0.03; }
    if (divider === void 0) { divider = getDivider() * 2 / 3; }
    console.log(value + value * multifier);
    console.log(arguments.length);
};
getValue();
getValue(3, 2);
getValue(undefined, 0.5);
//# sourceMappingURL=lesson10.js.map