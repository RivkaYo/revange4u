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

document.getElementById("newRevengeButton").addEventListener('click', () => showContent("addRevenge"));

//display Revenges
let displayRevengesFAJAX = new FAJAX();
displayRevengesFAJAX.open("GET", "myServer/api/revenge");
displayRevengesFAJAX.onload = function() {}
displayRevengesFAJAX.send(revenge);

// deleteing revenges
const deleteRevenge = (event) => {
    let deleteRevengeFAJAX = new FAJAX();
    deleteRevengeFAJAX.open("DELETE", "myServer/api/revenge");
    deleteRevengeFAJAX.onload = function() {}
    deleteRevengeFAJAX.send(event);
};

Array.from(document.getElementsByClassName("completeRevengeBtn")).forEach(btn => {btn.addEventListener('click', (event) => deleteRevenge(event))});