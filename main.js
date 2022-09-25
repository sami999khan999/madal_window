"use strict";

const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

function madalShow() {
  modal.style.opacity = 1;
  modal.style.visibility = "visible";
}
function modalHidden() {
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
}
function overlayShow() {
  overlay.style.opacity = 1;
  overlay.style.visibility = "visible";
}
function overlatHidden() {
  overlay.style.opacity = 0;
  overlay.style.visibility = "hidden";
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    madalShow();

    overlayShow();
  });
}

closeBtn.addEventListener("click", function () {
  modalHidden();

  overlatHidden();
});

overlay.addEventListener("click", function () {
  modalHidden();

  overlatHidden();
});
