let currTemp;

function showContent(tempName) {
    //remove last
    if (currTemp) {document.body.removeChild(currTemp)}
    console.log('currTemp: ', currTemp);
    
    //add new
    let temp = document.getElementById(tempName);
    let clon = temp.content.cloneNode(true); 
    document.body.appendChild(clon);
    currTemp = temp;

};


showContent("login");
showContent("addRevange");
