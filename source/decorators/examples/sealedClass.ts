import {Sealed} from "../class/sealed";

@Sealed
export class SealedClass {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}
