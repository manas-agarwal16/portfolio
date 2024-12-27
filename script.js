"use strict";

const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll("[page]");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    // console.log("here");

    for (let j = 0; j < pages.length; j++) {
      pages[j].classList.remove("active");
    }

    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    const targetPage = this.innerHTML.toLowerCase();
    // console.log("targetPage : ", targetPage);

    for (let j = 0; j < pages.length; j++) {
      // console.log("pages[j].dataset.page : ", pages[j].getAttribute("page"));
      if (targetPage === pages[j].getAttribute("page")) {
        pages[j].classList.add("active");
        navLinks[j].classList.add("active");
        window.scrollTo(0, 0); // scroll to top screen.
        break;
      }
    }
  });
}

const toggleElement = function (element) {
  
  element.classList.toggle("active");
};

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".sidebar-btn");
// console.log("sidebarBtn : ", sidebarBtn);


sidebarBtn.addEventListener("click", function () {
  // console.log("clicked");
  toggleElement(sidebar);
});

const form = document.querySelector("#form");
const formFields = document.querySelectorAll(".form-field");
const submit = document.querySelector(".submit");

for (let i = 0; i < formFields.length; i++) {
  formFields[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      //form contrainsts match krega toh yes return krega
      submit.removeAttribute("disabled");
    } else {
      submit.setAttribute("disabled", "");
    }
  });
}
