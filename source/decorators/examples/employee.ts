import {Surname} from "../property/surname";

export class Employee {
    @Surname("Mr.")
    public  name: string;

    constructor(name: string) {
        this.name =  name;
    }

}
