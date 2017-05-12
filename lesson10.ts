
let getDivider = () => 2;
var getValue = function (value = 10, multifier = 0.03, divider = getDivider() * 2 / 3) {
    console.log(value + value * multifier);
    console.log(arguments.length);
}

getValue();
getValue(3, 2);
getValue(undefined, 0.5);