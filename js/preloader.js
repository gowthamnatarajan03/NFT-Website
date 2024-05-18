document.addEventListener("DOMContentLoaded", function() {
    const animationContainer = document.getElementById('preloader');
    const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'preloader.json' 
    });
  
    window.addEventListener('load', function() {
        animation.stop(); 
        animationContainer.style.display = 'none'; 
        document.getElementById('content').style.display = 'block'; 
  
        fireIntroScreen();
    });
  });

  function fireIntroScreen() {
    const intro = document.querySelector('.intro');
    const logo = document.querySelectorAll('.logo');
    const navbar = document.getElementById('navbar');
  
    document.body.classList.add('hide-scrollbar');
    setTimeout(() => {
        logo.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });
  
        setTimeout(() => {
            logo.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);
  
        setTimeout(() => {
            intro.style.top = '-100vh';
  
            setTimeout(() => {
                document.body.classList.remove('hide-scrollbar');
            }, 1000);
  
            setTimeout(() => {
                navbar.style.visibility = 'visible';
            }, 800);
        }, 2300);
    });
  }