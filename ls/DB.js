// log in -------------------------------------------------------------------------

const checkUser = () => {
    //checks if username and pasword exised in ls users.
}


// Signup ---------------------------------------------------------------------------

const addUser = () => {
    //asss user to ls
}


// Revenges -------------------------------------------------------------------------

const displayRevenges = () => {
    //displays all revenges from ls
    revengeList = JSON.parse(localStorage.getItem("revenge"));

    for (let i=0; i < revengeList.length; i++) {
        document.getElementById("revengeList").innerHTML += `<div class="singleRevenge"><ul>You neet to revenge ${revengeList[i].name} with ${revengeList[i].details}. <button onclick="deleteitem()" class = "completeRevengeBtn" type="button">Revenge completed!</button></ul></div> `
    };
}

const deleteRevenge = (event) => {
    //deleteing revenges - dosen't work yet
    if (div.id === event.target.id) {
        //remove from display
        document.getElementById("revengeList").removeChild(div);
    }
}



// New revenges ---------------------------------------------------------------------

const addRevenge = () => {
    //adds Revenge to local storage
    let revengeName = document.querySelector("#name");
    let revengeDetails = document.querySelector("#revengeDetails");

    let revengeNameValue = revengeName.value;
    let revengeDetailsValue = revengeDetails.value;
    //creats new revenge instince 
    let currRevenge = new revenge(revengeNameValue, revengeDetailsValue);

    //get parsed revenge list
    let revengeList = localStorage.getItem("revenge");
    let revengeListParsed = JSON.parse(revengeList);
    
    //add instince to array
    revengeListParsed.push(currRevenge);

    //upload stringed list
    let revengeListStringed = JSON.stringify(revengeListParsed);
    localStorage.setItem("revenge", revengeListStringed);
};
