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

document
  .getElementById("login")
  .addEventListener("click", () => showContent("revenges"));
document
  .getElementById("guest")
  .addEventListener("click", () => showContent("revenges"));
document
  .getElementById("signup")
  .addEventListener("click", () => showContent("signup"));

function logInInfo() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // טוען את המשתמשים מ-localStorage
  const usersArr = JSON.parse(localStorage.getItem("users")) || [];

  // חפש את המשתמש עם שם וסיסמה נכונים
  for (let i = 0; i < usersArr.length; i++) {
    if (
      usersArr[i].username === username &&
      usersArr[i].password === password
    ) {
      var currentUser = usersArr[i];
      document.querySelector("#wrong").innerHTML = "";
      window.localStorage.removeItem("currentUser");
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser)); // עדכן את המשתמש הנוכחי ב-localStorage
      window.location.href = "revenges.html"; // הפנה לדף הנקמות
      return;
    }
  }
  document.querySelector("#wrong").innerHTML =
    "Wrong username or password. Try again"; // הודעת שגיאה אם שם המשתמש או הסיסמה לא נכונים
}

const logInButton = document.getElementById("submitBtn");
logInButton.addEventListener("click", logInInfo);
