// Destructuring assignment allows us to extract properties from an object and assign them into new variables.

const user = {
  userName: "Michael34",
  password: "123!micha",
  email: "Michael@gmail.com",
  city: "Hamburg",
};

// const email = user.email;
// const email = user["email"];

// grab the property with destructuring assignment

const { email } = user; // email is a variable. It will check the keys inside the user object and if it exists it will be saved inside the email variable
console.log(email); // Michael@gmail.com

const { telephone } = user;
console.log(telephone); // undefined => telephone doesn't exist as a key inside the user object

// grab username and password. declare multiple variables

const { userName, password } = user;

console.log(userName);
console.log(password);
console.log(`the username is: ${userName} and the password is: ${password}`);

// assign to a different named variable

const usersCity = user.city;

const { city: cityOfUser } = user; // the cityOfUser variable will contain the value of the city key

console.log(cityOfUser); // Hamburg
// console.log(city); // error => city is not defined

console.log(user);

// destructuring assignment and spread operator together
// the rest property

const car = {
  brand: "toyota",
  model: "corola",
  year: 2005,
  color: "blue",
};

// declare three variables one for brand one for model and one for the rest

const { brand, color, ...restInfo } = car;

console.log(brand); // toyota
console.log(color); // blue
console.log(restInfo); // { model: 'corola', year: 2005 }

// how destructuring assignment works with arrays

const colors = ["yellow", "blue", "green"];

const [peculiar] = colors; // it goes to the first element

console.log(peculiar); // yellow

const [Elena, Moses] = colors;

console.log(Elena); // yellow
console.log(Moses); // blue

// the rest property

const animals = ["eagle", "snake", "tiger", "elephant", "whale"];

const [birds, reptiles, ...mammals] = animals;

console.log(birds); // eagle
console.log(reptiles); // snake
console.log(mammals); // [ 'tiger', 'elephant', 'whale' ]

// Named function parameters with destructuring assignment

const band = {
  name: "radiohead",
  country: "England",
  genre: "rock",
};

const band2 = {
  name: "radiohead",
  country: "England",
  genre: "rock",
  greatestHit: "Karma Police",
};

const destructuringFunction = ({ name, country, genre, greatestHit }) => {
  console.log(name); // radiohead
  console.log(country); // England
  console.log(genre); // rock
  console.log(greatestHit); // undefined for band // Karma Police for band2
};

destructuringFunction(band);
destructuringFunction(band2);

const restProperty = ({ name, ...restInfo }) => {
  console.log(name);
  console.log(restInfo);
};

restProperty(band);

//example

const checkGenre = ({ genre }) => {
  return genre === "rock"
    ? "you rock it"
    : "you should listen to some rock music";
};

console.log(checkGenre(band));

// Named function parameters with arrays

const numbers = [23, 24, 25, 26];

const arrayFunction = ([firstElement, ...restElements]) => {
  console.log(firstElement); // 23
  console.log(restElements); // [ 24, 25, 26 ]
};

arrayFunction(numbers);
