const backButton = document.getElementById("back-to-top");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
};

backButton.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});