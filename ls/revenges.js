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


revengeList = JSON.parse(localStorage.getItem("revenge"));

for (let i=0; i < revengeList.length; i++) {
    document.getElementById("revengeList").innerHTML += `<li>You neet to revenge ${revengeList[i].name} with ${revengeList[i].details}</li> `
};

