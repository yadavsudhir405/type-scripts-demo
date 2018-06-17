class AmbientDemo {
    private static  ko: KnockoutStatic;
    private readonly name: KnockoutObservable<string>;
    private id: KnockoutObservable<number>;
    constructor() {
        this.name = ko.observable("John Papa");
        this.id = ko.observable(12);
    }
    public getName() {
        return this.name();
    }
}

let person = new AmbientDemo();
console.debug(person.getName());

let greetMe = (h: number, w: number) => console.log("Hello world");
