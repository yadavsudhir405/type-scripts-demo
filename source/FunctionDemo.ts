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
