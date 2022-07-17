let modal = document.getElementById("modal");
let btn = document.getElementById("modalBtn");
let span = document.getElementsByClassName("closebtn")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

let modalEdit = document.getElementsByClassName("modaledit");
let btnEdit = document.getElementsByClassName("modaleditbtn");
let spanEdit = document.getElementsByClassName("closebtn");

for (let i = 0; i < btnEdit.length; i++) {
  btnEdit[i].onclick = function () {
    modalEdit[i].style.display = "block";
  }
}

for (let i = 0; i < spanEdit.length; i++) {
  spanEdit[i+1].onclick = function () {
    modalEdit[i].style.display = "none";
  }
}
