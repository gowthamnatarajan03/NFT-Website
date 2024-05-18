document.addEventListener('DOMContentLoaded', () => {
    const sliderRows = document.querySelectorAll(".slider-row");
  
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  
    function addAnimation() {
      sliderRows.forEach((sliderRow) => {
        sliderRow.setAttribute("data-animated", true);
        const sliderRowInner = sliderRow.querySelector(".slider-row-inner");
        const sliderRowContent = Array.from(sliderRowInner.children);
        sliderRowContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          sliderRowInner.appendChild(duplicatedItem);
        });
      });
    }
  });