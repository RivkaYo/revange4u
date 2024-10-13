
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

const addRevengeToLocalStorage = () => {
    let currRevenge = new revenge(document.getElementsByName("name").value, document.getElementsByName("revengeDetails").value);
    console.log('document.getElementsByName("name").value: ', document.getElementsByName("name").value);
    let stringedCurrRevenge = JSON.stringify(currRevenge);
    localStorage.setItem("revenge", stringedCurrRevenge);
};

document.getElementById("submitAddRevenge").addEventListener('click', () => addRevengeToLocalStorage());



