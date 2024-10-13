// const signButton = document.getElementById("signIn");

// construction function
function SignInfo(username, password, passwordd) {
  this.username = username;
  this.password = password;
  this.passwordd = passwordd;
}

function signIn() {
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("password").value;
  const passwordd = document.getElementById("passwordd").value;


  //   var usersArr = JSON.parse(window.localStorage.getItem("users"));

  //   console.log(usersArr);

  //   for (let i = 0; i < usersArr.length; i++) {
  //     if (username === usersArr[i]["username"]) {
  //       document.getElementById("change").innerHTML =
  //         "This username is taken. Please pick another one";
  //       document.getElementById("usernameInput").style.border = "1px solid red";
  //       return;
  //     }

  //     const newUser = new SignInfo(
  //       firstname,
  //       lastname,
  //       username,
  //       password,
  //       age,
  //       email
  //     );
  //     usersArr.push(newUser);
  //     console.log(usersArr);
  //     window.localStorage.setItem("users", JSON.stringify(usersArr));
  //     window.localStorage.setItem("currentUser", newUser);
  //     window.location.href = "../index.html";
  //   }
}
