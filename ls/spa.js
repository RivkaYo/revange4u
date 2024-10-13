//localStorage.clear();
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

//showContent("login");
//showContent("signup");
showContent("revenges");

if (!localStorage.getItem("revenge")) {
    localStorage.setItem("revenge", JSON.stringify([]));
}
