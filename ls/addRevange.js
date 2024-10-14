
//Show template
function showContent(tempId) {
    //remove last
    if (currTemp) { document.getElementsByClassName("tempShow")[0].remove() }

    //add new
    let temp = document.getElementById(tempId);
    let clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
    currTemp = temp;
};

//add revenge to ls
function addRevengeToLocalStorage() {
    //adds Revenge to local storage
    let revengeName = document.querySelector("#name");
    let revengeDetails = document.querySelector("#revengeDetails");

    //creats new revenge instince
    let revengeNameValue = revengeName.value;
    let revengeDetailsValue = revengeDetails.value;
    let currRevenge = new revenge(revengeNameValue, revengeDetailsValue);

    let addRevengeToLocalStorageFAJAX = new FAJAX();
    addRevengeToLocalStorageFAJAX.open("PUT", "myServer/api/revenge");
    addRevengeToLocalStorageFAJAX.onload = function () { };
    addRevengeToLocalStorageFAJAX.send(currRevenge);

    showContent("revenges");
}

document.getElementById("submitAddRevenge").addEventListener('click', () => addRevengeToLocalStorage());