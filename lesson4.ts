function greetUser(name: any) {
    let greet;
    if (name === 'Hieu') {
        let greet = "Welcome Hieu!";
    } else {
        let greet = "Hey there";
    }
    console.log(greet);
}

greetUser("Hieu");

var a= 2;
let b= 15;

if(a===2){
    a= 12;
    let b =6;
}

console.log(a);
console.log(b);