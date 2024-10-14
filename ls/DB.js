// log in -------------------------------------------------------------------------

const checkUser = () => {
  // טוען את המשתמשים מ-localStorage
  const usersArr = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = usersArr.find(
    (user) => user.username === username && user.password === password
  );

  // תשנה את המשמש הנוכחי
  window.localStorage.removeItem("currentUser");
  window.localStorage.setItem("currentUser", JSON.stringify(currentUser)); // עדכן את המשתמש הנוכחי ב-localStorage
};

// Signup ---------------------------------------------------------------------------

const addUser = () => {
  // אם המשתמש לא קיים, הוסף אותו
  const newUser = new SignInfo(username, password);
  users.push(newUser); // הוסף את המשתמש החדש למערך
  window.localStorage.setItem("users", JSON.stringify(users)); // עדכן את ה-localStorage עם המערך החדש
  window.localStorage.setItem("currentUser", JSON.stringify(newUser)); // עדכן את המשתמש הנוכחי
};

// Revenges -------------------------------------------------------------------------

const getRevenges = () => {
  revengeList = JSON.parse(localStorage.getItem("revenge"));
  return revengeList;
};

const displayRevenges = () => {
  //displays all revenges from ls
  revengeList = JSON.parse(localStorage.getItem("revenge"));

  for (let i = 0; i < revengeList.length; i++) {
    document.getElementById(
      "revengeList"
    ).innerHTML += `<div class="singleRevenge"><ul>You need to revenge ${revengeList[i].name} with ${revengeList[i].details}. <button onclick="deleteitem()" class = "completeRevengeBtn" type="button">Revenge completed!</button></ul></div> `;
  }
};

const deleteRevenge = (event) => {
  //deleteing revenges - dosen't work yet
  if (div.id === event.target.id) {
    //remove from display
    document.getElementById("revengeList").removeChild(div);
  }
};

// New revenges ---------------------------------------------------------------------

const addRevenge = () => {
  //adds Revenge to local storage
  let revengeName = document.querySelector("#name");
  let revengeDetails = document.querySelector("#revengeDetails");

  //creats new revenge instince
  let revengeNameValue = revengeName.value;
  let revengeDetailsValue = revengeDetails.value;
  let currRevenge = new revenge(revengeNameValue, revengeDetailsValue);

  //get parsed revenge list
  let revengeList = localStorage.getItem("revenge");
  let revengeListParsed = JSON.parse(revengeList);

  //add instince to array
  revengeListParsed.push(currRevenge);

  //upload stringed list
  let revengeListStringed = JSON.stringify(revengeListParsed);
  localStorage.setItem("revenge", revengeListStringed);
};
