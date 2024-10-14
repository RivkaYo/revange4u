
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
    
    //creats new revenge instince
    let revengeNameValue = revengeName.value;
    let revengeDetailsValue = revengeDetails.value;
    let currRevenge = new revenge(revengeNameValue, revengeDetailsValue);

    let firstFajax = new FAJAX();
    firstFajax.open("post", "myServer/api/revenge");
    firstFajax.onload = function() {}
    firstFajax.send(currRevenge);

    //get parsed revenge list
    let revengeList = localStorage.getItem("revenge");
    let revengeListParsed = JSON.parse(revengeList);
    
    //add instince to array
    revengeListParsed.push(currRevenge);

    //upload stringed list
    let revengeListStringed = JSON.stringify(revengeListParsed);
    localStorage.setItem("revenge", revengeListStringed);
};

document.getElementById("submitAddRevenge").addEventListener('click', () => addRevengeToLocalStorage());



