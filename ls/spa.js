//localStorage.clear();
debugger;
let currTemp;
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

// var usersArr = JSON.parse(window.localStorage.getItem("users"));

//showContent("login");
//showContent("signup");
showContent("revenges");

if (!localStorage.getItem("revenge")) {
    localStorage.setItem("revenge", JSON.stringify([]));
}
