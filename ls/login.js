const users = [
    { username: 'admin', password: '12345' },
    { username: 'user', password: 'password' }
];

if (localStorage.getItem('loggedIn')) {
    alert("You are already logged in!");
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);

        alert('Login successful!');
        window.location.href = 'welcome.html'; 
    } else {
        errorMessage.style.display = 'block';
    }
});

