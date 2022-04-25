const topBtn = document.querySelector(".top-btn");

function scrollUp() {
  window.scrollTo({top:0, left:0, behavior:'smooth'});
}

topBtn.addEventListener("click", scrollUp);
window.addEventListener("scroll", (e) => {
  e.preventDefault();
  if(window.scrollY > 900) {
    topBtn.style.display = "block";
    topBtn.animate([
      { opacity: "0"},
      { opacity: "1"}
  ], {
    duration: 1000,
    easing: "ease",
    iterations: 1,
    fill: "both"
  });         
  } else {
    topBtn.style.display = "none";
  }
})
// top scroll up



const navLink = document.querySelectorAll(".navbar-item a");

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo ({
      'behavior': 'smooth',
      'top': target.offsetTop
  })
  })
}
// nav scroll



function changeBg() {
  const navbar = document.querySelector(".navbar");
  let scrollValue = window.scrollY;
  if (scrollValue < 500) {
    navbar.classList.remove("navbg");
  } else {
    navbar.classList.add("navbg");
  }
}

window.addEventListener("scroll", changeBg);
// nav bg color