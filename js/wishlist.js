//// WishList Button

function Toggle(btn) {
  if (btn.style.color === "red") {
      btn.style.color = "grey";
  } else {
      btn.style.color = "red";
  }
}

//// WishList Toggle for the first heart icon

let iconCart1 = document.querySelector('.icon-cart.d-lg-none');
let body1 = document.querySelector('body');
let closeCart1 = document.querySelector('.close1');

iconCart1.addEventListener('click', () => {
  body1.classList.toggle('activeTabCart');
})
closeCart1.addEventListener('click', () => {
  body1.classList.toggle('activeTabCart');
})

//// WishList Toggle for the second heart icon

let iconCart2 = document.querySelector('.icon-cart.d-lg-inline-block');
let body2 = document.querySelector('body');
let closeCart2 = document.querySelector('.close2');

iconCart2.addEventListener('click', () => {
  body2.classList.toggle('activeTabCart');
})
closeCart2.addEventListener('click', () => {
  body2.classList.toggle('activeTabCart');
})

//// AddToWishList

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

//// Display Wishlist

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
