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


let revengeDisplay = JSON.parse(localStorage.getItem("revenge"));
console.log('revengeDisplay: ', revengeDisplay);
document.getElementById("revengeList").innerHTML = "<li>revengeDisplay</li>";