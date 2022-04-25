const videoBtn = document.querySelector(".video-icon");
const video = document.getElementsByTagName("video")[0];
const body = document.querySelector("body");

function videoOff() {
  video.classList.add("active");
  videoBtn.innerHTML = "videocam_off";
  body.classList.add("background");
}

function videoOn() {
  video.classList.remove("active");
  videoBtn.innerHTML = "videocam";
  body.classList.remove("background");
}

videoBtn.addEventListener("click", () => {
  if(video.classList.value === "active") {
    videoOn();
  } else {
    videoOff();
  }
});
// video onoff

const imgSlide = document.querySelector(".img-slide-box");
const imgBox = document.querySelector(".img-box");
const slideImg = document.querySelector(".slide-img");

let currentSlide = 0;

setInterval(function() {
  let from = -(1080 * currentSlide);
  let to = from - 1080;
  imgBox.animate({
    marginLeft: [from + "px", to + "px"]
  }, {
    duration: 500,
    easing: "ease",
    iterations: 1,
    fill: "both"
  });
  currentSlide++;
  if (currentSlide === 4) {
    currentSlide = -0;
  }
}, 5000);
// img slide



const tabs = document.querySelectorAll("[data-tab-target]");
const tabcon = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabcon.forEach((tabc_all) => {
      tabc_all.classList.remove("tab-active");
    });
    target.classList.add("tab-active");
  });
});
// tab
