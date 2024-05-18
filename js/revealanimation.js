function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('active');
        }
    });
  }
  
  window.addEventListener('load', function() {
    setTimeout(function() {
      if (window.innerWidth) {
        const animateSections = document.querySelectorAll('.animate-section-01');
        animateSections.forEach(section => {
          section.classList.add('active');
        });
      }
      handleScroll();
    }, 3300);
  });
  
  window.addEventListener('load', function() {
    setTimeout(function(){
      if (window.innerWidth < 1200) {
        const animateSections = document.querySelectorAll('.animate-section-02');
        animateSections.forEach(section => {
            section.classList.add('active');
        });
    }
    handleScroll();
    }, 3300);
  });
  
  window.addEventListener('scroll', handleScroll);
  