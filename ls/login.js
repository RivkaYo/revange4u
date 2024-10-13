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

document.getElementById("logIn").addEventListener('click', () => showContent("revenges"));
document.getElementById("guest").addEventListener('click', () => showContent("revenges"));



const logIn = document.getElementById("logIn");
window.localStorage.setItem("currentUser", "")



logIn.addEventListener("click", logInInfo);

function logInInfo() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    for(let i = 0 ; i < usersArr.length ; i++) {
        if(usersArr[i]["username"] == username && usersArr[i]["password"] == password) {
            var currentUser = usersArr[i];
            document.querySelector("#wrong").innerHTML = "";
            window.localStorage.removeItem("currentUser")
            window.localStorage.setItem("currentUser", JSON.stringify(currentUser))
            window.location.href = '../GAME-WEBSITE/html/home.html';
            break;
        }
        else {
            document.querySelector("#wrong").innerHTML = "Wrong username or password. Try again"
        }
    }
    console.log(currentUser)
}

