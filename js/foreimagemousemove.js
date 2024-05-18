document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth >= 768) {
      document.addEventListener("mousemove", parallax);
  }
});

function parallax(event) {
  document.querySelectorAll(".img-content .fore-image").forEach((shift) => {
      const position = shift.getAttribute("data-value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

window.addEventListener("resize", function() {
  if (window.innerWidth < 768) {
      document.removeEventListener("mousemove", parallax);
  } else {
      document.addEventListener("mousemove", parallax);
  }
});