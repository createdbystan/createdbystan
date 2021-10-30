const aboutBtn = document.querySelector("#scrollto-about");
const topBtn = document.querySelector("#scrollto-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    aboutBtn.style.display = "none";
    topBtn.style.display = "block";
  } else {
    aboutBtn.style.display = "block";
    topBtn.style.display = "none";
  }
}
