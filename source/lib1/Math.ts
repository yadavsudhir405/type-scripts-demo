import SquareConfig from "./SquareConfig"

function add1(x:number, y:number){
    return x + y;
}

function subtract(x: number, y:number): number {
    return x-y;
}

function createSquareConfig(squareConfig: SquareConfig) {
    let squateObj = {area:100, color: "white" }

    if (squareConfig.color) {
        console.log("surround me with if condition");
        squateObj.area = squareConfig.width * squareConfig.width;
    } else {
        squateObj.area = squareConfig.width * squareConfig.width;
    }

    return squateObj;
}

interface Person {
    readonly name: string,
    readonly age:  number;
}
export {add1 as add, subtract as subtract};