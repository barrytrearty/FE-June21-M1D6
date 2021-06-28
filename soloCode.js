/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

const newExercise = function (n) {
  console.log(`<--------- Exercise ${n} --------->`);
};

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

newExercise("A");
const test = "Hello world";
console.log(test);

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

newExercise("B");
const sum = 10 + 20;
console.log(sum);

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

newExercise("C");
let random = Math.floor(Math.random() * 21);
console.log(random);

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

newExercise("D");
const me = {
  name: "Barry",
  surname: "Trearty",
  age: 25,
};

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

newExercise("E");
delete me.age;
console.log(me);

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

newExercise("F");
me.skills = ["html", "css", "javascript"];
console.log(me);

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

newExercise("G");
me.skills.pop();
console.log(me);

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

newExercise("1");
const dice = function () {
  return Math.floor(Math.random() * 6) + 1;
};
console.log(dice());

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

newExercise("2");
const whoIsBigger = function (n1, n2) {
  result = n2 > n1 ? n2 : n1;
  return result;
};
console.log(whoIsBigger(26, 25));

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

newExercise("3");

const splitMe = function (string) {
  return string.split(" ");
};
console.log(splitMe("Howdy, De Doodely Neighbour"));

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
newExercise("4");

const deleteOne = function (string, boolean) {
  if (boolean) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
};

console.log(deleteOne("CHello world", true));
console.log(deleteOne("Hello worldC", false));

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
newExercise("5");

const onlyLetters = function (string) {
  let stringArray = string.split("");
  let finalStringArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    let letter = Number(stringArray[i]);
    if (isNaN(letter)) finalStringArray.push(stringArray[i]);
  }
  return finalStringArray.join("");
};

console.log(onlyLetters("Heelll3oooo World44332E"));

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
newExercise("6");

const isThisAnEmail = function (string) {
  if (string.includes("@") && string.includes(".com")) {
    return true;
  } else {
    return false;
  }
};

console.log(isThisAnEmail("btrearty"));
console.log(isThisAnEmail("btrearty@gmail.com"));
console.log(isThisAnEmail("sdffahui@."));

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
newExercise("7");

const today = new Date();
const whatDayIsIt = function () {
  let dayOfTheWeek = today.getDay();
  if (dayOfTheWeek == 0) {
    return "Sunday";
  }
  if (dayOfTheWeek == 1) {
    return "Monday";
  }
  if (dayOfTheWeek == 2) {
    return "Tuesday";
  }
  if (dayOfTheWeek == 3) {
    return "Wednesday";
  }
  if (dayOfTheWeek == 4) {
    return "Thursday";
  }
  if (dayOfTheWeek == 5) {
    return "Friday";
  }
  if (dayOfTheWeek == 6) {
    return "Saturday";
  }
};

console.log(whatDayIsIt());

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
newExercise("8");

const rollTheDices = function (n) {
  let diceObject = { sum: 0, values: [] };
  let diceRoll;
  for (i = 0; i < n; i++) {
    diceRoll = dice();
    diceObject.sum += diceRoll;
    diceObject.values.push(diceRoll);
  }
  return diceObject;
};

console.log(rollTheDices(3));

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
//Wrote this at the weekend for last weeks extra exercises

newExercise("9");
// const today = new Date();
const todayDateArray = [
  today.getDate(),
  today.getMonth() + 1,
  today.getFullYear(),
];

const howManyDays = function (date) {
  // Create array
  let dateArray = [];
  if (date.includes("-")) {
    dateArray = date.split("-").map(Number);
  }
  if (date.includes(".")) {
    dateArray = date.split(".").map(Number);
  }
  if (date.includes("/")) {
    dateArray = date.split("/").map(Number);
  }

  // Position of day in the year function
  const getDayoftheYear = function (array) {
    let dayOfTheYear;
    if (array[1] == 1) {
      dayOfTheYear = array[0];
    }
    if (array[1] == 2) {
      dayOfTheYear = array[0] + 31;
    }
    if (array[1] == 3) {
      dayOfTheYear = array[0] + 59;
    }
    if (array[1] == 4) {
      dayOfTheYear = array[0] + 90;
    }
    if (array[1] == 5) {
      dayOfTheYear = array[0] + 120;
    }
    if (array[1] == 6) {
      dayOfTheYear = array[0] + 151;
    }
    if (array[1] == 7) {
      dayOfTheYear = array[0] + 181;
    }
    if (array[1] == 8) {
      dayOfTheYear = array[0] + 212;
    }
    if (array[1] == 9) {
      dayOfTheYear = array[0] + 243;
    }
    if (array[1] == 10) {
      dayOfTheYear = array[0] + 273;
    }
    if (array[1] == 11) {
      dayOfTheYear = array[0] + 304;
    }
    if (array[1] == 12) {
      dayOfTheYear = array[0] + 334;
    }
    return dayOfTheYear;
  };

  // function to add leap days
  const addLeapYearsForWholeYears = function (days, array1, array2) {
    let year1 = array1[2] + 1;
    let year2 = array2[2];
    for (i = year1; i < year2; i++) {
      if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
        days++;
      }
    }
    return days;
  };

  const addLeapYearsForNotWholeYears = function (days, array1, array2) {
    let earliestYear = array1[2];
    let latestYear = array2[2];
    let earliestYearDay = getDayoftheYear(array1);
    let latestYearDay = getDayoftheYear(array2);
    let marchFirst = getDayoftheYear([1, 3]);
    if (
      ((earliestYear % 4 == 0 && earliestYear % 100 != 0) ||
        earliestYear % 400 == 0) &&
      earliestYearDay < marchFirst
    ) {
      days++;
    }
    if (
      ((latestYear % 4 == 0 && latestYear % 100 != 0) ||
        latestYear % 400 == 0) &&
      latestYearDay >= marchFirst
    ) {
      days++;
    }
    return days;
  };

  // Variables
  let daysOfEarliestYear = 365 - getDayoftheYear(dateArray);
  let daysOfLatestYear = getDayoftheYear(todayDateArray);
  let daysInbetween = (todayDateArray[2] - (dateArray[2] + 1)) * 365;
  let totalDays = daysOfEarliestYear + daysOfLatestYear + daysInbetween;

  // Calculation of days
  totalDays = addLeapYearsForWholeYears(totalDays, dateArray, todayDateArray);
  totalDays = addLeapYearsForNotWholeYears(
    totalDays,
    dateArray,
    todayDateArray
  );
  return totalDays;
};

console.log(howManyDays("25.02.2012"));

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

newExercise("10");

const myBirthday = [28, 6];
const isTodayMyBirthday = function () {
  if (
    myBirthday[0] === todayDateArray[0] &&
    myBirthday[1] === todayDateArray[1]
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(isTodayMyBirthday());

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
newExercise("11");

const deleteProp = function (object, property) {
  delete object[property];
  return object;
};

console.log(deleteProp(me, "surname"));
console.log(me);

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

newExercise("12");

const olderMovie = function (array) {
  let oldestMovie = array[0];
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]["Year"]) < Number(oldestMovie["Year"])) {
      oldestMovie = array[i];
    }
  }
  return oldestMovie;
};

console.log(olderMovie(movies));

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

newExercise("13");

const countMovies = function (array) {
  return array.length;
};

console.log(countMovies(movies));

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

newExercise("14");

const onlyTheTitles = function (array) {
  let titlesArray = [];
  for (let i = 0; i < array.length; i++) {
    titlesArray.push(array[i]["Title"]);
  }
  return titlesArray;
};

console.log(onlyTheTitles(movies));

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

newExercise("15");

const onlyInThisMillennium = function (array) {
  let thisMilleniumArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]["Year"]) >= 2000) {
      thisMilleniumArray.push(array[i]["Title"]);
    }
  }
  return thisMilleniumArray;
};

console.log(onlyInThisMillennium(movies));

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

newExercise("16");

const getMovieById = function (id) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i]["imdbID"] === id) {
      return movies[i];
    }
  }
};

console.log(getMovieById("tt4154796"));
// console.log(getMovieById(tt4154796));

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

newExercise("17");

const sumAllTheYears = function (array) {
  let totalSum = 0;
  for (let i = 0; i < array.length; i++) {
    totalSum += Number(array[i]["Year"]);
  }
  return totalSum;
};

console.log(sumAllTheYears(movies));

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

newExercise("18");

const searchByTitle = function (string) {
  let searchArray = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i]["Title"].includes(string)) {
      searchArray.push(movies[i]);
    }
  }
  return searchArray;
};

// console.log(searchByTitle("Lord"));
// console.log(searchByTitle("Lord of the"));
console.log(searchByTitle("Lord of the Flies"));

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

newExercise("19");

const searchAndDivide = function (string) {
  let dividedObject = { match: [], unmatch: [] };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i]["Title"].includes(string)) {
      dividedObject["match"].push(movies[i]["Title"]);
    } else {
      dividedObject["unmatch"].push(movies[i]["Title"]);
    }
  }
  return dividedObject;
};

console.log(searchAndDivide("Avengers"));

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

newExercise("20");

const removeIndex = function (n) {
  movies.splice(n, 1);
  return movies;
};

console.log(removeIndex(10));

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
