class Person {
    constructor(private name: string, private age:number) {
    }
    public  getFullName(): string {
        return JSON.stringify(this);

    }
}

function displayMessage(name: string) {
    console.log("Hello Mr. "+name);
}

export { Person as default, displayMessage as disp }
