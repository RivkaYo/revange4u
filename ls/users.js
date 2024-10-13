// נתוני משתמשים נשמרים ב-localStorage בצורה של אובייקט
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));  // אם אין משתמשים, יצור מערך ריק
}

// חיבור לטופס
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const errorMessage = document.getElementById('error-message');
const formTitle = document.getElementById('formTitle');
const submitBtn = document.getElementById('submitBtn');
const signupBtn = document.getElementById('signupBtn');

// טיפול בהתחברות (Log In)
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // מונע את שליחת הטופס

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users'));  // טוען את המשתמשים

    // חפש את המשתמש עם שם וסיסמה נכונים
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // אם ההתחברות הצליחה, שמור ב-localStorage את המידע שהמשתמש מחובר
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);
        alert('Login successful!');
        window.location.href = 'welcome.html';  // הפנה לדף אחר אם צריך
    } else {
        errorMessage.style.display = 'block';
    }
});

// טיפול בהרשמה (Sign Up)
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();  // מונע את שליחת הטופס

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    const users = JSON.parse(localStorage.getItem('users'));  // טוען את המשתמשים

    // בדוק אם המשתמש כבר קיים
    const existingUser = users.find(user => user.username === newUsername);

    if (existingUser) {
        alert('Username already exists! Please choose another one.');
    } else {
        // אם המשתמש לא קיים, הוסף אותו
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem('users', JSON.stringify(users));  // שימור המשתמש החדש ב-localStorage
        alert('Sign Up successful! You can now log in.');
    }
});