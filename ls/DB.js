// log in !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class database {
    
}
const takeUser = () => {
 const usersArr = JSON.parse(localStorage.getItem("users")) || [];
}

const removeCurrentUser = () => {
 window.localStorage.removeItem("currentUser");
 }

 const setCurrentUser = () => {
 window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
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