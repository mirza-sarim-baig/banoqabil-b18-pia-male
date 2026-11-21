const signupFunc = () => {
  //   let user = [
  //     {
  //       id: 1,
  //       name: "name",
  //       email: "email",
  //       password: "password",
  //     },
  //   ];

  //   localStorage.setItem("user", JSON.stringify(user));

  //   return;
  //   console.log("signupFunc called");
  //   PART 1: FETCHING VALUES FROM INPUT FIELDS

  let name = document.getElementById("name");
  name = name.value;
  let email = document.getElementById("email");
  email = email.value;
  let password = document.getElementById("password");
  password = password.value;

  // PART 2: STRUCTURING DATA
  let users = JSON.parse(localStorage.getItem("user")) || [];

  let userData = {
    id: users.length + 1,
    name: name,
    email: email,
    password: password,
  };
  //   console.log("userData", userData);

  // PART 3: ADDING USER IN USERS ARRAY

  users.push(userData);
  localStorage.setItem("user", JSON.stringify(users));
  console.log("users", users);

  // console.log("outside", name.value);

  // let name = document.getElementById("name");
  // console.log("outside", name.value);
};
