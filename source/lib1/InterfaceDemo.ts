import { default as PrintLabel } from "../lib1/PrintLabel";
import { default as SomeFunc } from "../lib1/SomeFunc";
function printLabel(label: PrintLabel) {
    console.log(label.label);
    console.log(label.color);
    console.log(label.size);
}
class Test {
    className: string;
    behaviour: SomeFunc;
    constructor(className: string, behaviour: SomeFunc){
        this.className= className;
        this.behaviour =  behaviour;
    }
    show(){
        this.behaviour;
    }
}



export { printLabel as PrintLabel, Test }