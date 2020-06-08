import {Student} from "../class/student";


@Student({
    usn: "4NM07IS056",
})
export class People {
   public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
