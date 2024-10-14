
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

document.getElementById("submitAddRevenge").addEventListener('click', () => showContent("revenges"));

//create new revenge
class revenge{
    constructor (name, details) {
    this.name = name;
    this.details = details;
    this.isComplete = false;
};}

//add revenge to ls
let revengeName = document.querySelector("#name");
let revengeDetails = document.querySelector("#revengeDetails");

const addRevengeToLocalStorage = () => {
    //adds Revenge to local storage
    let revengeName = document.querySelector("#name");
    let revengeDetails = document.querySelector("#revengeDetails");

    //creats new revenge instince
    let revengeNameValue = revengeName.value;
    let revengeDetailsValue = revengeDetails.value;
    let currRevenge = new revenge(revengeNameValue, revengeDetailsValue);
    
    let addRevengeToLocalStorageFAJAX = new FAJAX();
    addRevengeToLocalStorageFAJAX.open("post", "myServer/api/revenge");
    addRevengeToLocalStorageFAJAX.onload = function() {}
    addRevengeToLocalStorageFAJAX.send(currRevenge);
};

document.getElementById("submitAddRevenge").addEventListener('click', () => addRevengeToLocalStorage());