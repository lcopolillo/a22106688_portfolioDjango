/*show/hide menu*/
const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav_toggle"),
  navClose = document.getElementById("nav_close");

/*show menu*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}

/*hide menu*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}

/*remove mobile menu*/
const navLink = document.querySelectorAll(".nav_link");

function closeMenu() {
  const navMenu = document.getElementById("nav_menu");
  // close menu when clicking in one link
  navMenu.classList.remove("show_menu");
}
navLink.forEach((n) => n.addEventListener("click", closeMenu));

/*show/hide skills content*/
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelectorAll(".skills_header");

function showHideSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills_content skills_close";
  }
  if (itemClass === "skills_content skills_close") {
    this.parentNode.className = "skills_content skills_open"; //se tiver fechado, ao clicar muda de classe, ou seja, abre
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", showHideSkills);
});

/*qualification active/non active tabs (NAO FUNCIONA)

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
}) */

/*swiper*/
let swiper = new Swiper(".portfolio_container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*webdev modal*/
const modalViews = document.querySelectorAll(".webdev_modal"),
  modalButtons = document.querySelectorAll(".webdev_button"),
  modalCloses = document.querySelectorAll(".webdev_modal_close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active_modal");
};

modalButtons.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active_modal");
    });
  });
});

/*section active link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active_link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active_link");
    }
  });
}
window.addEventListener("scroll", scrollActive);*/

/*change background header*/
function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) nav.classList.add("scroll_header");
  else nav.classList.remove("scroll_header");
}
window.addEventListener("scroll", scrollHeader);

/*show scroll button*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll_up");

  if (this.scrollY >= 560) scrollUp.classList.add("show_scroll");
  else scrollUp.classList.remove("show_scroll");
}
window.addEventListener("scroll", scrollUp);

/*dark/light theme*/
const themeButton = document.getElementById("theme_button");
const darkTheme = "dark_theme";
const iconTheme = "uil-sun";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*CALCULATOR*/
const display = document.querySelector(".calculator_display");
const buttons = document.querySelectorAll(".calculator_buttons");
const specialChars = ["%", "*", "+", "-", "/", "="];
let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    // fazer porcentagem
    output = eval(output.replace("%", "/100"));
  } else if (btnValue == "AC") {
    // limpar input
    output = "";
  } else if (btnValue === "DEL") {
    // limpar ultimo caracter do input
    output = output.toString().slice(0, -1);
  } else {
    if (output == "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

/*INSPIRING PHRASE*/
const fraseInput = document.getElementById("phrase_input");
const submitBtn = document.getElementById("submit_btn");
const fraseContainer = document.querySelector(".insp_phrase_container");

submitBtn.addEventListener("click", function () {
  const frase = fraseInput.value;
  const fraseElement = document.createElement("p");
  fraseElement.textContent = frase;
  fraseContainer.appendChild(fraseElement);
  fraseInput.value = "";
});

/*name input*/
const nomeInput = document.getElementById("name_input");
const nomeSpan1 = document.getElementById("name_span1");
const nomeSpan2 = document.getElementById("name_span2");
const nomeSpan3 = document.getElementById("name_span3");

nomeInput.addEventListener("input", function () {
  const nome = nomeInput.value;
  nomeSpan1.textContent = nome;
  nomeSpan2.textContent = nome;
  nomeSpan3.textContent = nome;
});



