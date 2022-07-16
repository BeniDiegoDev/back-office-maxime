let modalContact = document.getElementById("modalContact");
let btnContact = document.getElementById("modalContactBtn");
let spanContact = document.getElementsByClassName("closebtn")[0];

btnContact.onclick = function() {
  modalContact.style.display = "block";
}

spanContact.onclick = function() {
  modalContact.style.display = "none";
}