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
  .getElementById("guest")
  .addEventListener("click", () => showContent("revenges"));
document
  .getElementById("signup")
  .addEventListener("click", () => showContent("signUp"));

function logInInfo(event) {
    event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // טוען את המשתמשים מ-localStorage
  const usersArr = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = usersArr.find((user)=>    
  user.username === username &&
  user.password === password)

  // חפש את המשתמש עם שם וסיסמה נכונים
  
    if (currentUser){
      document.querySelector("#wrong").innerHTML = "";
      window.localStorage.removeItem("currentUser");
      window.localStorage.setItem("currentUser", JSON.stringify(currentUser)); // עדכן את המשתמש הנוכחי ב-localStorage

      document
      .getElementById("submitBtn")
      .addEventListener("click", () => showContent("revenges"));
      return;
    } else {
      document.querySelector("#wrong").innerHTML =
        "Wrong username or password. Try again"; // הודעת שגיאה אם שם המשתמש או הסיסמה לא נכונים
    }
  }


const logInButton = document.getElementById("submitBtn");
logInButton.addEventListener("click", (e)=>logInInfo(e));
