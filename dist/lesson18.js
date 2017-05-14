"use strict";
var Classroom = (function () {
    function Classroom(name) {
        this.name = name;
        console.log(this.name + 'this is my name');
    }
    Classroom.talk = function () {
        console.log('Let/"s talk about it');
    };
    Classroom.prototype.run = function () {
        console.log("This one is running");
    };
    return Classroom;
}());
Classroom.talk();
var classroom = new Classroom("Nguyen Tien Hieu");
classroom.run();
//# sourceMappingURL=lesson18.js.map