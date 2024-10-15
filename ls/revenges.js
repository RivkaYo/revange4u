//Show template
function showContent(tempId) {
  //remove last
  if (currTemp) {
    document.getElementsByClassName("tempShow")[0].remove();
  }

  //add new
  let temp = document.getElementById(tempId);
  let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
  currTemp = temp;
}

// deleteing revenges
function deleteRevengeRequest(id) {
  // Send FAJAX request to server to delete
  let deleteRevengeFAJAX = new FAJAX();
  deleteRevengeFAJAX.open("DELETE", "myServer/api/revenge");
  deleteRevengeFAJAX.onload = function () {
    getRevengesRequest();
  };

  deleteRevengeFAJAX.send(id);
}


function getRevengesRequest() {
  // Send FAJAX request to server to display Revenges
  let displayRevengesFAJAX = new FAJAX();
  displayRevengesFAJAX.open("GET", "myServer/api/revenge");
  displayRevengesFAJAX.onload = function () {
    revengeList = JSON.parse(this.responseText);
    document.getElementById(
      "revengeList"
    ).innerHTML = ""
    for (let i = 0; i < revengeList.length; i++) {

      const revenge = revengeList[i];

      document.getElementById(
        "revengeList"
      ).innerHTML += `<div class="singleRevenge"><ul>You need to revenge ${revenge.name} with ${revenge.details}. <button onclick="deleteRevengeRequest(${revenge.id})" class="completeRevengeBtn" type="button">Revenge completed!</button></ul></div> `;
    }
  };
  displayRevengesFAJAX.send();
}

getRevengesRequest();

document
  .getElementById("newRevengeButton")
  .addEventListener("click", () => showContent("addRevenge"));