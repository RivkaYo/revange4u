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
  displayRevengesFAJAX.onload = function () { };
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