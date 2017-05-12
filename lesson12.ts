let getColorSpread = function (message: any, ...colors: string[]) {
    for (let i in colors) {
        console.log(colors[i]);
    }
    console.log(arguments.length);
}
let message = "Hello";
let colors = ['Red', 'Green', 'Blue'];
getColorSpread(message, ...colors);

