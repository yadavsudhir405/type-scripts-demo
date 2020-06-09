 export class Car {
    public engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    public start() {
        console.log("Engine started " + this.engine);
    }

    public stop() {
        console.log("Engine stopped " + this.engine);
    }
 }
