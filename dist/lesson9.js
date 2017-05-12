"use strict";
var employee = {
    id: 1,
    greet: function () {
        // var self = this;
        // setTimeout(function () {
        //     console.log(self.id);
        // }, 1000);
        var _this = this;
        setTimeout(function () { return console.log(_this.id); }, 1000);
    }
};
employee.greet();
// console.log(employee.greet()); 
//# sourceMappingURL=lesson9.js.map