let getColor = function (...colors: string[]) {
    for (let i in arguments) {
        console.log(arguments[i]);
    }
    console.log(arguments.length);
}

getColor('Green');
getColor('Green', 'Blue');
getColor('Green', 'Yellow', 'Brown');

