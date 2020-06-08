// For Sealed decorator class
// console.log(Object.isSealed(SealedClass));


import {People} from "./people";

const d1 = new People("Foo");
console.log(d1);

import {Employee} from "./employee";

const d = new Employee("Sudhir");
console.log(d.name);
console.log(d);
