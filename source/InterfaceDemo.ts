interface SquareFunc {
    (num: number): number;
}


// Declaration and Definition in one line
var square: SquareFunc = (num: number) => num *num;


// Declaration of Function
let add: (num: number) => number;

add = (num: number) => {
    return num * num;
}
console.log(add(10));

add = (num: number) => {
    return num* num* num;
}
console.log(10);

interface Person {
    name: string,
    age: number,
    squareAge: () => number,
    greetMessage: (name: string, message: string) => string,
}

let p: Person = {
    name: "John Papa",
    age: 25,
    squareAge: () => {
        return this.age * 10;
    },
    greetMessage: (name: string, message: string) : string => {
        return "Hello"
    }
};

let myAdd: (a: number, b: number) => number;

myAdd = (a: number, b: number) => {
    return 10;
};
myAdd = function (a: number, b: number): number {
    return 10;
};

interface Demofunc {
    (name: string, message: string) : string;
}
let t: Demofunc = (name: string, message: string) =>{
    return "ahs";
};