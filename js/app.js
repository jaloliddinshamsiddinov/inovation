const menuBars = document.getElementById("hamburger");
const menuContent = document.getElementById("mobileMenu");
const lists = document.querySelectorAll("#mobileMenu ul li");
const barsIcon = document.getElementById("barsIcon");
const xIcon = document.getElementById("xIcon");

menuBars.addEventListener("click", () => {
  barsIcon.classList.toggle("toggleIcon");
  xIcon.classList.toggle("toggleIcon");
  menuContent.classList.toggle("activeMobileMenu");
  menuContent.style.zIndex = "-1";
});
console.log(lists);

lists.forEach((item) => {
  item.addEventListener("click", () => {
    barsIcon.classList.toggle("toggleIcon");
    xIcon.classList.toggle("toggleIcon");
    menuContent.classList.toggle("activeMobileMenu");
  });
});
// nav action ended

// main started