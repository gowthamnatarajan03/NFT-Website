////Preloader
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

////IntroScreen
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

////custom scrollbar

function createCustomScrollbar() {
  const scrollbarStyle = document.createElement('style');
  scrollbarStyle.textContent = `
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background-color: #d0a1e3;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #150432;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #391681;
    }
  `;
  document.head.appendChild(scrollbarStyle);
}

window.addEventListener('load', createCustomScrollbar);

////animation

//check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// handle scroll event
function handleScroll() {
  const sections = document.querySelectorAll('.animate-section');
  sections.forEach(section => {
      if (isInViewport(section)) {
          section.classList.add('active');
      }
  });
}

// handle window load event with setTimeout
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


// handle window load event less than 1200px with setTimeout
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

// Add event listener for scroll event
window.addEventListener('scroll', handleScroll);


////NavBar Color Change

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#150432';
  } else {
      navbar.style.backgroundColor = 'transparent';
  }
});

//// toggle navbar color

function toggleNavbarColor() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.backgroundColor === 'rgb(21, 4, 50)') {
      navbar.style.backgroundColor = 'transparent';
    } else {
      navbar.style.backgroundColor = '#150432';
    }
  }
  
  document.querySelector('.navbar-toggler').addEventListener('click', function() {
    toggleNavbarColor(); 
  });

////ForeImagesMouseMove

document.addEventListener("mousemove", parallax);
        function parallax(event) {
            this.querySelectorAll(".fore-images .fore-image").forEach((shift => {
                const position = shift.getAttribute("data-value");
                const x = (window.innerWidth - event.pageX * position) / 90;
                const y = (window.innerHeight - event.pageY * position) / 90;
                shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
            }));
        }

////Ripple Effect Button

const buttons =document.querySelectorAll('.image-container a');
buttons.forEach(btn => {
  btn.addEventListener ('click', function(e) {

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove()
    }, 1000)
  })
})

////WishList Button

function Toggle(btn) {
  if (btn.style.color === "red") {
      btn.style.color = "grey";
  } else {
      btn.style.color = "red";
  }
}

// WishList Toggle for the first heart icon

let iconCart1 = document.querySelector('.icon-cart.d-lg-none');
let body1 = document.querySelector('body');
let closeCart1 = document.querySelector('.close1');

iconCart1.addEventListener('click', () => {
  body1.classList.toggle('activeTabCart');
})
closeCart1.addEventListener('click', () => {
  body1.classList.toggle('activeTabCart');
})

// WishList Toggle for the second heart icon

let iconCart2 = document.querySelector('.icon-cart.d-lg-inline-block');
let body2 = document.querySelector('body');
let closeCart2 = document.querySelector('.close2');

iconCart2.addEventListener('click', () => {
  body2.classList.toggle('activeTabCart');
})
closeCart2.addEventListener('click', () => {
  body2.classList.toggle('activeTabCart');
})

//AddToWishList

const product = [
  {
      id: 0,
      image: 'img/Neon01.jpg',
      title: 'ZephT',
      price: 0.21,
      noOfItems: '09 of 44',
  },
  {
      id: 1,
      image: 'img/Neon02.jpg',
      title: 'Luna8',
      price: 0.45,
      noOfItems: '01 of 33',
  },
  {
      id: 2,
      image: 'img/Neon03.jpg',
      title: 'Jah0Z',
      price: 0.21,
      noOfItems: '12 of 14',
  },
  {
      id: 3,
      image: 'img/Neon04.jpg',
      title: 'Volt21',
      price: 0.29,
      noOfItems: '07 of 12',
  }
];

let cart = [];

document.getElementById('root').innerHTML = product.map(item => {
  const { id, image, title, price, noOfItems } = item;
  return `
  <div>
  <div class='animate-section-01 animate-section-02'>
  <div class='img-box'>
      <img class='image' src='${image}'>
      <div class='bottom'>
          <div>
              <h5>${title}</h5>
              <div class='eth'>
              <i class="fa-brands fa-ethereum"></i>
                  <p>${price}</p>
              </div>
          </div>
          <p>${noOfItems}</p>
      </div>
      <div class='btns'> 
              <button onclick='Toggle(this); toggleCartItem(${id});' id='btnh1' class='btnn' data-id='${id}'>
                  <i class='fas fa-heart'></i>
                  <span>Add to WishList</span>
              </button>
          </div>
  </div>
  </div>
</div>
  `;
}).join('');


function toggleCartItem(itemId) {
  const index = cart.findIndex(item => item.id === itemId);
  if (index !== -1) {
      cart.splice(index, 1);
    
      const heartIcon = document.querySelector(`#btnh1[data-id='${itemId}'] .fas.fa-heart`);
      if (heartIcon) {
        heartIcon.style.color = "grey";
      }
      displayCart();
  } else {
      const itemToAdd = product.find(item => item.id === itemId);
      cart.push({ ...itemToAdd });
  
      const heartIcon = document.querySelector(`#btnh1[data-id='${itemId}'] .fas.fa-heart`);
      if (heartIcon) {
        heartIcon.style.color = "red";
      }
      displayCart();
  }
}

// Display Wishlist

function displayCart() {
    let total = 0;
    document.getElementById("count1").innerHTML = cart.length;
    document.getElementById("count2").innerHTML = cart.length;
    
    total = 0;
  
    if (cart.length === 0) {
        document.getElementById('cartItem1').innerHTML = "Your WishList is empty &#128533;";
        document.getElementById('cartItem2').innerHTML = "Your WishList is empty &#128533;";
        document.getElementById("total1").innerHTML = "ETH " + total.toFixed(2);
        document.getElementById("total2").innerHTML = "ETH " + total.toFixed(2);
    } else {
        document.getElementById("cartItem1").innerHTML = cart.map(item => {
            total += item.price;
            return `
                <div class='cart-item1'>
                    <div class='row-img1'>
                        <img class='rowimg1' src='${item.image}'>
                    </div>
                    <h3 style='font-size:15px;'>${item.title}</h3>
                    <h3 style='font-size: 15px;'>ETH ${item.price}</h3>
                    <i class='fa-solid fa-trash onetrash' onclick='removeCartItem(${item.id})'></i>
                </div>
            `;
        }).join('');
  
        document.getElementById("cartItem2").innerHTML = cart.map(item => {
            return `
                <div class='cart-item2'>
                    <div class='row-img2'>
                        <img class='rowimg2' src='${item.image}'>
                    </div>
                    <h3 style='font-size:15px;'>${item.title}</h3>
                    <h3 style='font-size: 15px;'>ETH ${item.price}</h3>
                    <i class='fa-solid fa-trash twotrash' onclick='removeCartItem(${item.id})'></i>
                </div>
            `;
        }).join('');
  
        document.getElementById("total1").innerHTML = "ETH " + total.toFixed(2);
        document.getElementById("total2").innerHTML = "ETH " + total.toFixed(2);
    }
  }

  function removeCartItem(itemId) {
    const index = cart.findIndex(item => item.id === itemId);
    if (index !== -1) {
        cart.splice(index, 1);
        const heartIcon = document.querySelector(`#btnh1[data-id='${itemId}'] .fas.fa-heart`);
        if (heartIcon) {
          heartIcon.style.color = "grey";
        }
        displayCart();
    }
  }

displayCart(); 

////Start Of the converter

// fetch fiat names from the API
async function fetchFiatNames() {
    try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        if (!response.ok) {
            throw new Error("Failed to fetch fiat names");
        }
        const data = await response.json();
        return Object.keys(data.rates);
    } catch (error) {
        console.error(error);
        return [];
    }
}

// add fiat options to the dropdown
async function addFiatOptions() {
    const fiatNames = await fetchFiatNames();
    const optionsList = document.querySelector(".options2");
    optionsList.innerHTML = "";
    fiatNames.forEach(fiat => {
        let option = document.createElement("li");
        option.textContent = fiat;
        option.addEventListener("click", function() {
            updateFiatName(this.textContent);
        });
        optionsList.appendChild(option);
    });
}

// update the selected fiat
function updateFiatName(selectedFiat) {
    const inputField = document.querySelector(".input2");
    inputField.value = "";
    const selectButton = document.querySelector(".select-btn2 span");
    selectButton.textContent = selectedFiat;
    const wrapper = document.querySelector(".wrapper2");
    wrapper.classList.remove("active");
}

// initialize dropdowns
async function initializeDropdowns() {
    await addFiatOptions();

    // After the dropdown is populated, initialize it
    document.querySelector(".select-btn2").addEventListener("click", function() {
        const wrapper = document.querySelector(".wrapper2");
        wrapper.classList.toggle("active");
    });
}

// Event listener for the convert button
document.getElementById("convertBtn").addEventListener("click", convertEthToFiat);

// Event listeners for opening/closing dropdowns
document.addEventListener("DOMContentLoaded", initializeDropdowns);

// handle conversion and display result
async function convertEthToFiat() {
    const selectedFiat = document.querySelector(".select-btn2 span").innerText.toLowerCase();

    const ethAmount = parseFloat(document.getElementById("ethAmount").value);
    if (isNaN(ethAmount) || ethAmount <= 0) {
        document.getElementById("result").textContent = "Please enter a valid Ethereum amount.";
        document.getElementById("result").style.display = "block";
        return;
    }

    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=${selectedFiat}`);
        if (!response.ok) {
            throw new Error("Failed to fetch conversion rate.");
        }
        const data = await response.json();
        
        // Check if the conversion rate exists
        if (!data.ethereum || !data.ethereum[selectedFiat]) {
            throw new Error("Conversion rate not available.");
        }

        const rate = data.ethereum[selectedFiat];
        const convertedAmount = ethAmount * rate;
        document.getElementById("result").textContent = `${ethAmount} ETH = ${convertedAmount.toFixed(2)} ${selectedFiat.toUpperCase()}`;
        document.getElementById("result").style.display = "block";
    } catch (error) {
        console.error(error);
        document.getElementById("result").textContent = "Failed to perform conversion. Please try again later.";
        document.getElementById("result").style.display = "block";
    }
}

// handle search for fiat options
document.querySelector(".input2").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const optionsList = document.querySelector(".options2");
    const options = optionsList.querySelectorAll("li");
    let matchFound = false;
    options.forEach(option => {
        const text = option.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            option.style.display = "block";
            matchFound = true;
        } else {
            option.style.display = "none";
        }
    });
    if (!matchFound) {
        optionsList.innerHTML = `<li>Oops!!!, ${searchTerm} is not available.</li>`;
    } 
});

// handle backspace key press for Ethereum input field
document.querySelector(".input2").addEventListener("keydown", function(event) {
    if (event.key === 'Backspace') {
        const optionsList = document.querySelector(".options2");
        optionsList.innerHTML = ""; 
        addFiatOptions(); 
    }
});

////End Of the converter

////Infinite Scroll Carousel

const sliderRows = document.querySelectorAll(".slider-row");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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

////FAQ

const faqs = document.querySelectorAll('.faq')

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    if(faq.classList.contains('active')){
      faq.classList.remove('active')
    }else {
      faq.classList.add('active')
      faqs.forEach((otherFaq) => {
        if(otherFaq != faq) {
          otherFaq.classList.remove('active')
        }
      })
    }
  })
})

////BackToTop

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
