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

// Length
console.log(myAlphabet.length);

myAlphabetLength(myAlphabet);
function myAlphabetLength(arr) {
  console.log("The length of the array is:", arr.length);
}

// foreach + Index

let planets = ["Terre", "Mars", "Mercure", "Venus", "Jupiter"];

planets.forEach((planet, Index) => {
  console.log(planet, Index);
});

// forEach + typeof + Index
let someDataTypes = ["Coucou", 10, true, null];

someDataTypes.forEach((dataType, Index) => {
  console.log(dataType, typeof dataType, Index);
});

//EmptyArray
let emptyArray = [];
console.log(emptyArray);

emptyArray.push("Mangue", 10, "Coucou toi", 1);
console.log(emptyArray);

let copyEmptyArray = emptyArray.slice();
console.log(copyEmptyArray);

//How many letters

let furnitures = ["Table", "Chairs", "Couch"];

furnitures.forEach((furniture) =>
  furniture.split("").forEach((letters) => console.log(letters))
);

// Wich is a number

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

function commondWords(studentCoursesA, studentCoursesB) {
  const commonWords = studentCoursesA.filter((course) =>
    studentCoursesB.includes(course)
  );
  return commonWords;
}

const commonCourses = commondWords(studentCoursesA, studentCoursesB);
console.log(commonCourses);
