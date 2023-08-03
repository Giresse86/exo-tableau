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
let studentACourses = ["Math", "English", "Programming"];
let studentBCourses = ["Geography", "Spanish", "Programming"];
let resultat = studentACourses.filter((word) => studentBCourses.includes(word));
console.log(resultat);

// Resume du cours sur les variables
// Variables & types de variables

// let // Variable portée limitée et qui est réassignable.
// const // Vraible constante à portée limité mais qui n'est pas réassignable.

//const lastname = "Ielli"; // Non réassignable.
//let age = 30; // Réassignable.

//const firstname = "Lucas"; // Portée globale.
let javaScriptCoach = "Lucas"; // Portée globale.

const catName = "Lucky"; // Type > String = chaine de caractère = ""; Valeur : Lucky
console.log(catName);
let catAge = 4; // Type > Number = nombre = 0; Valeur : 4
console.log(catAge);
let vraiOuFaux = true; // Type > Boolean = Booléen = true ou false; Valeur : true
console.log(vraiOuFaux);
const planets = ["Uranus", "Venus"]; // Type de la variable > Tableau = Array = [] // Valeurs reprises dans notre tableau sont toutes les deux des Strings.
console.log(planets); // (2)['Uranus', 'Venus']
console.log(planets[0]); // Uranus // Faire le choix entre [] de l'indice permet d'afficher la valeur de cet indice.

const voiture = {
  marque: "Toyota",
  modele: "Yaris",
  annee: 1999,
}; // Type de la variable voiture > Objet = Object = {} // Cet objet possède 3 propriété qui sont : la marque, le modele, l'année. // Les valeurs des deux propriétés marque et modele sont des Strings : Toyota, Yaris. Et l'année est un type Nombre.
console.log(voiture); // {marque: 'Toyota', modele: 'Yaris', annee: 1999}
console.log(voiture.marque); // 'Toyota'
console.log(voiture.modele); // 'Yaris'
console.log(voiture.annee); // 1999

// SOLUTIONS AUX EXERCICES
