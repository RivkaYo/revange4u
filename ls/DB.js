// log in -------------------------------------------------------------------------

const checkUser = () => {
  // טוען את המשתמשים מ-localStorage
  const usersArr = JSON.parse(localStorage.getItem("users")) || [];
  currentUser = usersArr.find(
    (user) => user.username === username && user.password === password
  );
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
  return localStorage.getItem("revenge")
};

const deleteRevenge = (id) => {
  const revengeList = JSON.parse(localStorage.getItem("revenge"));
  const stringedRevengeList = JSON.stringify(revengeList.filter(revenge => revenge.id !== id));
  localStorage.setItem("revenge", stringedRevengeList);
};

// New revenges ---------------------------------------------------------------------

const addRevenge = (currRevenge) => {

  //get parsed revenge list
  let revengeList = localStorage.getItem("revenge");
  let revengeListParsed = JSON.parse(revengeList);

  //add instince to array
  revengeListParsed.push(currRevenge);

  //upload stringed list
  let revengeListStringed = JSON.stringify(revengeListParsed);
  localStorage.setItem("revenge", revengeListStringed);
};
