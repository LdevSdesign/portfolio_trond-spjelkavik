const aboutBtn = document.querySelector(".about");
const contactBtn = document.querySelector(".contact");
const projectsBtn = document.querySelector(".projects");
const menuBtn = document.querySelector(".menu");
const onOffBtn = document.querySelector(".on-off-button ");
const norFlag = document.querySelector(".nor");
const engFlag = document.querySelector(".eng");
const secondHeadline = document.querySelector("h2");
const frontView = document.querySelector(".front-view");
const aboutmeBox = document.querySelector(".about-me-box");
const textBoxFrontPage = document.querySelector(".text-box-fp");
const aboutmeHeadline = document.querySelector(".aboutmeHeadline");
const cvIcon = document.querySelector(".cv-icon");
const requestCv = document.querySelector(".request-cv");
const contactMeBox = document.querySelector(".contact-me-box");
const contactmeHeadline = document.querySelector(".contactmeHeadline");
const menuTab = document.querySelector(".menu-tab");
const menuAppear = document.querySelector(".menu-appear");

aboutBtn.addEventListener("click", () => {
  frontView.style.border = "3px solid #883233";
  frontView.style.borderTop = "5px solid #883233";
  frontView.style.borderBottom = "2px solid black";
  frontView.style.backgroundImage = "url(./img/aboutme-img.jpg)";
  textBoxFrontPage.innerHTML = "";
  aboutmeBox.style.display = "block";
  contactMeBox.style.display = "none";
  contactmeHeadline.style.display = "none";
});
contactBtn.addEventListener("click", () => {
  frontView.style.border = "3px solid #082336";
  frontView.style.borderTop = "5px solid #082336";
  frontView.style.borderBottom = "2px solid black";
  frontView.style.backgroundImage = "url(./img/contact-img.jpg)";
  textBoxFrontPage.innerHTML = "";
  aboutmeBox.style.display = "none";
  contactMeBox.style.display = "flex";
  contactmeHeadline.style.display = "block";
});
projectsBtn.addEventListener("click", () => {
  frontView.style.border = "3px solid black";
  frontView.style.borderBottom = "2px solid black";
});

menuBtn.addEventListener("click", () => {
  menuTab.classList.toggle("menu-appear");
});

onOffBtn.addEventListener("click", () => {
  console.log("On and Off Button");
});

norFlag.addEventListener("click", () => {
  aboutBtn.innerHTML = "Om";
  contactBtn.innerHTML = "Kontakt";
  projectsBtn.innerHTML = "Prosjekter";
  secondHeadline.innerHTML = "Front-End Utvikler";
  aboutmeHeadline.innerHTML = "Om Meg";
});

engFlag.addEventListener("click", () => {
  aboutBtn.innerHTML = "About";
  contactBtn.innerHTML = "Contact";
  projectsBtn.innerHTML = "Projects";
  secondHeadline.innerHTML = "Front-End Developer";
  aboutmeHeadline.innerHTML = "About Me";
});

cvIcon.addEventListener("mouseover", () => {
  requestCv.style.opacity = "1";
});

cvIcon.addEventListener("mouseout", () => {
  requestCv.style.opacity = "0";
});

console.log(secondHeadline);
