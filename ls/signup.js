//Show template 
function showContent(tempId) {
    //remove last
    if (currTemp) {document.getElementsByClassName("tempShow")[0].remove()}
    
    //add new
    let temp = document.getElementById(tempId);
    let clon = temp.content.cloneNode(true); 
    document.body.appendChild(clon);
    currTemp = temp;
};

document.getElementById("signup").addEventListener('click', () => showContent("revenges"));


// Sign Up
const users = localStorage.setItem("users", "[]");

// construction function
function SignInfo( username, password ) {
    this.username = username;
    this.password = password;
}


function signIn(){
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newpassword").value;
    
    
    for(let i = 0 ; i < users.length ; i++) {
        // if(username === users[i]["username"]) {
            //     document.getElementById("change").innerHTML = "This username is taken. Please pick another one"
        //     document.getElementById("usernameInput").style.border = "1px solid red"
        // } else {
            const newUser = new SignInfo( username, password);
            console.log('newUser: ', newUser);
            let stringedUsers = localStorage.getItem(users);
            console.log('stringedUsers: ', stringedUsers);
            let parseUsers = JSON.parse(stringedUsers);
            console.log('parseUsers: ', parseUsers);
            
            
            localStorage.setItem("users", )
            users.push(newUser);
            console.log(usersArr)
            //}
            
            
            
            
            window.localStorage.setItem("users", JSON.stringify(usersArr));
            window.localStorage.setItem("currentUser", newUser);
            window.location.href = "../index.html";
    }
}
const signButton = document.getElementById("signIn");
signButton.addEventListener("click", () => signIn());
