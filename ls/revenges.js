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
  const button = event.target;
  const id = button.dataset.id;
  console.log(id);
  let deleteRevengeFAJAX = new FAJAX();
  deleteRevengeFAJAX.open("DELETE", "myServer/api/revenge");
  deleteRevengeFAJAX.onload = function () { };
  deleteRevengeFAJAX.send(event);
  console.log('event: ', event);
}


function getRevengesRequest() {
  //display Revenges
  let displayRevengesFAJAX = new FAJAX();
  displayRevengesFAJAX.open("GET", "myServer/api/revenge");
  displayRevengesFAJAX.onload = function () {
    revengeList = JSON.parse(this.responseText);

    for (let i = 0; i < revengeList.length; i++) {

      const revenge = revengeList[i];

      document.getElementById(
        "revengeList"
      ).innerHTML += `<div class="singleRevenge"><ul>You need to revenge ${revenge.name} with ${revenge.details}. <button data-id="${revenge.id}" class="completeRevengeBtn" type="button">Revenge completed!</button></ul></div> `;
    }

    Array.from(document.getElementsByClassName("completeRevengeBtn")).forEach(
      (btn) => {
        btn.addEventListener("click", (event) => deleteRevengeRequest(event));
      }
    );
  };
  displayRevengesFAJAX.send();
}

getRevengesRequest();

document
  .getElementById("newRevengeButton")
  .addEventListener("click", () => showContent("addRevenge"));