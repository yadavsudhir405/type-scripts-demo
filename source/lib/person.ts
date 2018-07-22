import "../scss/style1.scss"
class Person {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age =age;
    }

    public toString() {
        return JSON.stringify(this);
    }

    static classfactory(name: string, age: number) {
        let person = new Person(name, age);
        return person;
    }
}


function greetMe() {
    return "Hello greetMe";
}
function greetMe1() {
    return "test123";
}


//export { Person as default, greetMe as greeeeeet }
export { Person as default }
export {greetMe, greetMe1}
