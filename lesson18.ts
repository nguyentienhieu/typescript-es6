class Classroom {
    constructor(name: string) {
        this.name = name;
        console.log(this.name + 'this is my name');
    }

    static talk() {
        console.log('Let/"s talk about it');
    }
    run() {
        console.log("This one is running");
    }
}
Classroom.talk();

let classroom = new Classroom("Nguyen Tien Hieu");
classroom.run();

