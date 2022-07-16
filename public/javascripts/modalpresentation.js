let modalPresentation = document.getElementById("modalPresentation");
let btnPresentation = document.getElementById("modalPresentationBtn");
let spanPresentation = document.getElementsByClassName("closebtn")[0];

btnPresentation.onclick = function() {
  modalPresentation.style.display = "block";
}

spanPresentation.onclick = function() {
  modalPresentation.style.display = "none";
}