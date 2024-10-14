// log in !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const checkUser = () => {
 // טוען את המשתמשים מ-localStorage
 const usersArr = JSON.parse(localStorage.getItem("users")) || [];
 const currentUser = usersArr.find((user)=>    
 user.username === username &&
 user.password === password)

 // תשנה את המשמש הנוכחי 
 window.localStorage.removeItem("currentUser");
 window.localStorage.setItem("currentUser", JSON.stringify(currentUser)); // עדכן את המשתמש הנוכחי ב-localStorage
}


//Signup ---------------------------------------------------------------------------

const addUser = () => {
    // אם המשתמש לא קיים, הוסף אותו
  const newUser = new SignInfo(username, password);
  users.push(newUser); // הוסף את המשתמש החדש למערך
  window.localStorage.setItem("users", JSON.stringify(users)); // עדכן את ה-localStorage עם המערך החדש
  window.localStorage.setItem("currentUser", JSON.stringify(newUser)); // עדכן את המשתמש הנוכחי
}


//Revenges -------------------------------------------------------------------------

const displayRevenges = () => {
    //displays all revenges from ls
}

const deleteRevenge = () => {
    //deleteRevenge
}



//New revenges ---------------------------------------------------------------------

const addRevenge = () => {
    //adds Revenge to local storage
}