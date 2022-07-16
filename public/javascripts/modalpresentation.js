let modalPresentation = document.getElementById("modalpresentation");
let btnPresentation = document.getElementById("modalpresentationbtn");
let spanPresentation = document.getElementsByClassName("closebtn")[0];

btnPresentation.onclick = function() {
  modalPresentation.style.display = "block";
}

spanPresentation.onclick = function() {
  modalPresentation.style.display = "none";
}