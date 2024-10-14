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
    document.getElementById("revengeList").innerHTML += `<div id=${i} class="singleRevenge"><ul>You neet to revenge ${revengeList[i].name} with ${revengeList[i].details}. <button id=${i} class = "completeRevengeBtn" type="button">Revenge completed!</button></ul></div> `
};


const deleteRevenge = (event) => {
    console.log("5");
    deletedId = event.target.id;
    console.log('event.target.id: ', event.target.id);
    document.querySelectorAll('.singleRevenge').forEach(div => {
        
        if (div.id === event.target.id) {
            //remove from display
            document.getElementById("revengeList").removeChild(div);

            //remove from ls
            console.log('event.target.id: ', event.target.id);
            console.log('revenge.indexOf(event.target.id): ', revengeList.indexOf(event.target));
            const checkStay = () => {return !revengeList.indexOf(event.target) === event.target};
            updatedRevengeList = JSON.stringify(revengeList.filter(checkStay));
            localStorage.setItem("revenge", updatedRevengeList);
        };
    });
};

Array.from(document.getElementsByClassName("completeRevengeBtn")).forEach(btn => {btn.addEventListener('click', (event) => deleteRevenge(event))});

