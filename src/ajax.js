console.log("Ajax Tutorial for GET data from text file ");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You have clicked the fetchBtn");

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // Open the object
  xhr.open("GET", "manoj.txt", true); //true means aschro  non blocking

  // What to do on progress (optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Some error occured");
    }
  };

  // send the request

  xhr.send();

  console.log("We are done!");
}
