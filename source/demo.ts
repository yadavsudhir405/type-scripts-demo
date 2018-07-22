import { default as Person } from "./lib/person"
import "./scss/style.scss"
import * as $ from "jquery";
import * as toaster from "toastr";
console.log("Executing demo js file");
let person: Person = new Person("Sudhir", 20);
console.log(person.toString());

$(document).ready(function () {
    console.log("Page Loaded");
    $(".res").click(function () {
        alert("Button Clicked");
    })
    toaster.info("Welcome to the Page");
})
