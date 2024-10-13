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

// let revengeListParsed = JSON.parse(localStorage.getItem("revenge"));
// console.log('revengeListParsed: ', revengeListParsed);
// for (let i=0; i>revengeListParsed.length; i++) {
//     document.getElementById("revengeList").innerHTML = "<li> name: " + revengeListParsed[i].name + "Revenge:" + revengeListParsed[i].details + "</li>";
// };
