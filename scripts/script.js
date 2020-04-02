// let selena = {
//     age: 24,
//     favColor: "blue",
//     famous: true,
//     profession: "singer",
//     shareFavColor: function() {
//         console.log(`My favorite color is ${this.favColor}`);
//     }

// }

// let garnet = {
//     age: 15,
//     favColor: "purple",
//     famous: false,
//     profession: "cartoon character"
// }

// function Person(name, movie, favColor, famous, age) {

//     this.name = name;
//     this.movie = movie;
//     this.favColor = favColor;
//     this.famous = famous;
//     this.age = age;
//     this.shareFaveColor = function() {
//         console.log(`My favorite color is ${this.favColor}`)
//     }
// }

// let tchalla = new Person("tchalla", "Black Panther", "orange", "true", 31);


// console.log(selena.shareFavColor());
// Person();


let characters = ["selena", "blackPanther", "garnet", "adaWong"];

let text = "";
for (i = 0; i <characters.length; i++) {
    text += `${characters[i]}\n` 
 
}
console.log(text);