let currTemp;

function showContent(tempId) {
    //remove last
    if (currTemp) {document.getElementsByClassName("tempShow")[0].remove()}
    console.log('currTemp: ', currTemp);
    
    //add new
    let temp = document.getElementById(tempId);
    let clon = temp.content.cloneNode(true); 
    document.body.appendChild(clon);
    currTemp = temp;

};

showContent("login");
showContent("revenges");
document.getElementById("newRevengeButton").addEventListener('click', () => showContent("addRevenge"));
//document.getElementById("submitAddRevenge").addEventListener('click', () => showContent("revenges"));