// console.log("hello");

// Object

let userObj = {
  id: 1,
  name: "habib",
  age: 25,
  gender: "male",
  isMarried: false,
  kids: null,
  email: "habib@gmail.com",
  pNo: "+92-234-84894949",
  education: {
    graduation: "BSCS",
    intermediate: "Pre-Engineering",
    matriculation: "Computer Science",
  },
};

let keyName = prompt("Enter key name");
let value = prompt("Enter value");

userObj[keyName] = value;

console.log(userObj);

// userObj.isMarried = true;
// userObj.pass = "h1234@";
// userObj.pass = "123";

// delete userObj.gender;

// console.log(userObj);

// var val = "pNo";

// console.log(userObj[val]);
