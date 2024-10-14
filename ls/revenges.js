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
function deleteRevengeRequest(event) {
  let deleteRevengeFAJAX = new FAJAX();
  deleteRevengeFAJAX.open("DELETE", "myServer/api/revenge");
  deleteRevengeFAJAX.onload = function () { };
  deleteRevengeFAJAX.send(event);
}


function getRevengesRequest() {
  //display Revenges
  let displayRevengesFAJAX = new FAJAX();
  displayRevengesFAJAX.open("GET", "myServer/api/revenge");
  displayRevengesFAJAX.onload = function () {
    revengeList = JSON.parse(this.responseText);

    for (let i = 0; i < revengeList.length; i++) {
      document.getElementById(
        "revengeList"
      ).innerHTML += `<div class="singleRevenge"><ul>You need to revenge ${revengeList[i].name} with ${revengeList[i].details}. <button class = "completeRevengeBtn" type="button">Revenge completed!</button></ul></div> `;
    }
  };
  displayRevengesFAJAX.send();

  Array.from(document.getElementsByClassName("completeRevengeBtn")).forEach(
    (btn) => {
      btn.addEventListener("click", (event) => deleteRevengeRequest(event));
    }
  );
}

getRevengesRequest();

document
  .getElementById("newRevengeButton")
  .addEventListener("click", () => showContent("addRevenge"));