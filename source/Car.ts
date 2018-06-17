 class Car {
    public engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    public start() {
        alert("Engine started " + this.engine);
    }

    public stop() {
        alert("Engine stopped " + this.engine);
    }
 }

 window.onload =  () => {
     const car = new Car("V8");
     car.start();
 };
