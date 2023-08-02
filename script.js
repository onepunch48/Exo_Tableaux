// exercice 1
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

myAlphabet.length;
console.log(myAlphabet.length);

function myAlphabetLength() {
  console.log(myAlphabet.length);
}
myAlphabetLength();
// function myArrLength(myArray) {
//   console.log("My alphabet length is ", myArray.length);
// }
// myArrLength(myAlphabet);

// exercice 2

let planets = ["Terre", "Pluton", "Venus", "Uranus", "Mars"];

planets.forEach((planet, Index) => {
  console.log(planet, Index);
});

//exercice 3

let someDataTypes = [1, "Coucou", true, null];

someDataTypes.forEach((data, Index) => {
  console.log(data, typeof data, Index);
});

//exercice 4

let emptyArea = [];

console.log(emptyArea);

emptyArea.push("Coucou toi", 10);

console.log(emptyArea);

let copyEmptyArea = emptyArea.slice();

console.log(copyEmptyArea);

//exercice 5

let furnitures = ["Table", "Chairs", "Couch"];

furnitures.forEach((furniture) =>
  furniture.split("").forEach((letters) => console.log(letters))
);

//exercice 6

let values1 = ["Apple", 1, false, "2"];
let values2 = [`5`, "Fries", 2, true];
let values3 = ["Mars", "Strawberry", 9];

values1 = values1.filter((value) => typeof value === "number");
values2 = values2.filter((value) => typeof value === "number");
values3 = values3.filter((value) => typeof value === "number");

console.log(values1, values2, values3);

// Gemini

let studentCoursesA = ["Math", "English", "Programming"];
let studentCoursesB = ["Geography", "Spanish", "Programming"];

function commonWords(arr1, arr2) {
  const commonWords = arr1.filter((course) => arr2.includes(course));
  return commonWords;
}

const commonCourses = commonWords(studentCoursesA, studentCoursesB);
console.log(commonCourses);
