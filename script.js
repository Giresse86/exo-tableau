let myAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "$",
  "*",
  "/",
  "-",
  "+",
];
function myAlphabetLength() {
  console.log(myAlphabet.length);
}
myAlphabetLength();

// Exo 2

// let planets = ["Terre", "Venus", "Jupiter", "Mars", "Saturne"];
// console.log(planets);

// planets.forEach((planet, index) => {
//   console.log(planet, index);
// });

// Exo 3

let someDataTypes = ["g", true, 7, null];
someDataTypes.forEach((data) => {
  console.log(typeof data);
});
someDataTypes.forEach((data, index) => {
  console.log(data, index);
});

// Exo 4
let array = [""];
console.log(array);
let copyarray = ["Lundi"];
copyarray.push();
console.log("", "Lundi");

// Exo 5
let furnitures = ["Table", "Chairs", "Couch"];
console.log(`${furnitures} ${furnitures.length}`);

// Exo 6
let values1 = ["Apple", 1, false, "2"];
let newvalues1 = values1.map((value1) => {
  if (value1 !== "number") {
    return value1;
  }
});
console.log(newvalues1);

let values2 = [`5`, "Fries", 2, true];
let newvalues2 = values2.map((value2) => {
  if (value2 !== "number") {
    return value2;
  }
});
console.log(newvalues2);

// Exo 7
let studentCoursesA = ["Math", "English", "Programming"];
let studentCoursesB = ["Geography", "Spanish", "Programming"];
function isEqual(studentCoursesA, studentCoursesB) {
  if (studentCoursesA.length !== studentCoursesB.length) return false;

  return studentCoursesA.every(
    (studentCoursesA, index) => studentCoursesA === studentCoursesB[index]
  );
}

let resultat = isEqual(studentCoursesA, studentCoursesB);

console.log(resultat);
