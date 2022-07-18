let modalCompte = document.getElementById("modalCompte");
let btnCompte = document.getElementById("modalCompteBtn");
let spanCompte = document.getElementsByClassName("closebtn")[0];

btnCompte.onclick = function() {
  modalCompte.style.display = "block";
}

spanCompte.onclick = function() {
  modalCompte.style.display = "none";
}