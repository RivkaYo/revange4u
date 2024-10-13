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
const signButton = document.getElementById("signIn");

// construction function
function SignInfo( username, password) {
    this.username = username;
    this.password = password;

}

signButton.addEventListener("click", signIn);

function signIn(){
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newpassword").value;

    var usersArr = JSON.parse(window.localStorage.getItem("users"));

    for(let i = 0 ; i < usersArr.length ; i++) {
        if(username === usersArr[i]["username"]){
            document.getElementById("change").innerHTML = "This username is taken. Please pick another one"
            document.getElementById("usernameInput").style.border = "1px solid red"
            return;
        }



        const newUser = new SignInfo( username, password);
        usersArr.push(newUser);
        console.log(usersArr)
        window.localStorage.setItem("users", JSON.stringify(usersArr));
        window.localStorage.setItem("currentUser", newUser);
        window.location.href = "../index.html";
    }
}
