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


x = JSON.parse(localStorage.getItem("revenge"));

for (let i=0; i>x.length; i++) {
    document.getElementById("revengeList").innerHTML = "<li> name: " + x[i].name + "Revenge:" + x[i].details + "</li>";
};
