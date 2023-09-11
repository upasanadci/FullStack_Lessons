// for ... in loop

const fbw11 = {
  SchoolName: "DCI",
  students: 16,
  teachers: ["Upasana", "Vassilis"],
  currentModule: "Programming Basics",
  classManager: "Paul",
};

for (let key in fbw11) {
  // will always go through the object and give me the keys
  //   console.log(key);
  //   console.log(fbw11[key]); // bracket notation in order to get the values

  console.log(`this is the key: ${key} and this is the value: ${fbw11[key]}`);
}

// create an array with all the keys and an array with all the values

const keysAndValues = (obj) => {
  keysArray = [];
  valuesArray = [];
  for (let key in obj) {
    keysArray.push(key);
    valuesArray.push(obj[key]);
  }
  console.log(keysArray);
  console.log(valuesArray);
};

keysAndValues(fbw11);

// write a function that takes an object and return it with all the keys in capital letters

const capitalize = (obj) => {
  let resultObject = {}; // empty object
  for (let key in obj) {
    // loop through my object
    let newKey = key.toUpperCase(); // capitalize the keys
    // console.log(newKey);
    resultObject[newKey] = obj[key]; // add newKey and value in my empty object
  }
  return resultObject;
};

console.log(capitalize(fbw11));


// explain line 42
const testObj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(testObj["b"]);

testObj["b"] = 12; // change the value of a property

console.log(testObj["b"]);

testObj["d"] = 4; // add a new property

console.log(testObj)