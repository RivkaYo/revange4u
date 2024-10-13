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

document.getElementById("login").addEventListener('click', () => showContent("revenges"));
document.getElementById("guest").addEventListener('click', () => showContent("revenges"));
document.getElementById("signup").addEventListener('click', () => showContent("signup"));


const logIn = document.getElementById("login");
window.localStorage.setItem("currentUser", "")




function logInInfo() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    for(let i = 0 ; i < usersArr.length ; i++) {
        if(usersArr[i]["username"] == username && usersArr[i]["password"] == password) {
            var currentUser = usersArr[i];
            document.querySelector("#wrong").innerHTML = "";
            window.localStorage.removeItem("currentUser")
            window.localStorage.setItem("currentUser", JSON.stringify(currentUser))
            break;
        }
        else {
            document.querySelector("#wrong").innerHTML = "Wrong username or password. Try again"
        }
    }
    console.log(currentUser)
}
logIn.addEventListener("click", logInInfo);

