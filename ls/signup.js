//Show template
function showContent(tempId) {
  //remove last
  if (currTemp) {
    document.getElementsByClassName("tempShow")[0].remove();
  }

  //add new
  let temp = document.getElementById(tempId);
  let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
  currTemp = temp;
}


// Sign Up
const users = JSON.parse(localStorage.getItem("users")) || []; // טעינת משתמשים אם קיימים

// construction function
function SignInfo(username, password) {
  this.username = username;
  this.password = password;
}

function signIn(e) {
  e.preventDefault();
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newpassword").value;

  // בדוק אם המשתמש כבר קיים
  const existingUser = users.find((user) => user.username === username);
  console.log(existingUser);
  if (existingUser) {
    document.getElementById("change").innerHTML =
      "This username is taken. Please pick another one";
    document.getElementById("newUsername").style.border = "1px solid red";
    return;
  }

  // אם המשתמש לא קיים, הוסף אותו
  let addUserFAJAX = new FAJAX();
  addUserFAJAX.open("PUT", "myServer/api/revenge");
  addUserFAJAX.onload = function () {};
  addUserFAJAX.send(username, password);
}

const signButton = document.getElementById("signupBtn");
signButton.addEventListener("click", (e) => signIn(e));
signButton.addEventListener("click", () => showContent("addRevenge"));
