function greetUser(name: any) {
    
    if (name === 'Hieu') {
        greet = "Welcome Hieu!";
    } else {
        greet = "Hey there";
    }
    console.log(greet);
    var greet;
}

greetUser("Hieu");