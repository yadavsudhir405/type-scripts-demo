class FunctionDemo {
    constructor() {
        console.log("Initialized");
    }
}


let helloWorld = (name?: string) => {
    console.log(name || "Unknowen Person");
}
helloWorld("Hello World");
helloWorld();

let squareIt: (rect: { l: number, w?: number }) => number;

squareIt = (rect:{l: number, w?: number}) => {
    if(rect.w === undefined) {
        return rect.l;
    }else {
        return rect.l * rect.w;
    }
}
let rectA = {l: 7};
let rectB = {l: 10, w: 10};
document.write("Hello");
document.write(squareIt(rectA).toString());
document.write(squareIt(rectB).toString());