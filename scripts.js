// GAMING LAPTOP CAROUSEL
const gamingLaptopsCarousel = document.getElementById('gaming-laptops-carousel');

const xhrGamingLaptops = new XMLHttpRequest();
xhrGamingLaptops.open('GET', './laptop.json', true);

xhrGamingLaptops.onreadystatechange = function () {
    if (xhrGamingLaptops.readyState === 4 && xhrGamingLaptops.status === 200) {
        const laptopData = JSON.parse(xhrGamingLaptops.responseText);

        // Filter gaming laptops based on "laptop_type"
        const gamingLaptops = laptopData.laptops.filter(laptop => laptop.laptop_type === "Gaming");

        // Clear the carousel content
        gamingLaptopsCarousel.innerHTML = '';

        // Iterate through the gaming laptops and populate the carousel
        gamingLaptops.forEach((laptop, index) => {
            const laptopCardGroup = document.createElement('div');
            laptopCardGroup.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            
            const cardContent = `
            <div class="d-flex justify-content-center align-items-center h-100">
    <div style="max-width: 600px; min-width: 600px;" class="card w-100"> 
        <img class="card-img-top" src="${laptop.image_url}" alt="..." />
        <div class="card-body text-center">
            <h5 class="fw-bolder">${laptop.laptop_name}</h5>
            <p class="original-price">
                ${laptop.price.sale_price
                    ? `<del>${laptop.price.original_price}</del>`
                    : laptop.price.original_price}
            </p>
            ${laptop.price.sale_price
                ? `<p class="text-dark">${laptop.price.sale_price}</p>`
                : ''}
            <div class="mt-3">
            <button
    type="button"
    class="btn btn-success"
    data-product-name="${laptop.laptop_name}"
    data-product-price="${laptop.price.sale_price || laptop.price.original_price}">
    Add to Cart
</button>


                <button type="button" class="btn btn-primary ml-2" onclick="openProductModal('${laptop.laptop_name}', '${laptop.price.original_price}', '${laptop.image_url}')">Quick View</button>
            </div>
        </div>
    </div>
</div>

        
`;


            laptopCardGroup.innerHTML = cardContent;

            const addToCartButton = laptopCardGroup.querySelector('.btn-success');
addToCartButton.addEventListener('click', () => {
    const productName = addToCartButton.getAttribute('data-product-name');
    const productPrice = addToCartButton.getAttribute('data-product-price');
    console.log("Product Price:", productPrice); // Check if this displays correctly
    addToCart(productName, productPrice);
});


            gamingLaptopsCarousel.appendChild(laptopCardGroup);
        });
    }
};

xhrGamingLaptops.send();




function addToCart(productName, productPrice) {
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  const productInfo = {
      name: productName,
      price: productPrice
  };
  existingCart.push(productInfo);
  localStorage.setItem('cart', JSON.stringify(existingCart));

  updateCartBadge();
}


function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartBadge.innerText = cart.length;
}







// PREMIUM LAPTOP CAROUSEL
const premiumLaptopsCarousel = document.getElementById('premium-laptops-carousel');

const xhrPremiumLaptops = new XMLHttpRequest();
xhrPremiumLaptops.open('GET', './laptop.json', true);

xhrPremiumLaptops.onreadystatechange = function () {
    if (xhrPremiumLaptops.readyState === 4 && xhrPremiumLaptops.status === 200) {
        const laptopData = JSON.parse(xhrPremiumLaptops.responseText);

        // Filter premium laptops based on "laptop_type"
        const premiumLaptops = laptopData.laptops.filter(laptop => laptop.laptop_type === "Premium");

        // Clear the carousel content
        premiumLaptopsCarousel.innerHTML = '';

        // Iterate through the premium laptops and populate the carousel
        premiumLaptops.forEach((laptop, index) => {
            const laptopCardGroup = document.createElement('div');
            laptopCardGroup.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            
            const cardContent = `
            <div class="d-flex justify-content-center align-items-center h-100">
            <div style="max-width: 600px; min-width: 600px;" class="card">
                <img class="card-img-top" src="${laptop.image_url}" alt="..." />
                <div class="card-body text-center">
                    <h5 class="fw-bolder">${laptop.laptop_name}</h5>
                    <p class="original-price">
                        ${laptop.price.sale_price
                            ? `<del>${laptop.price.original_price}</del>`
                            : laptop.price.original_price}
                    </p>
                    ${laptop.price.sale_price
                        ? `<p class="text-dark">${laptop.price.sale_price}</p>`
                        : ''}
                    <div class="mt-3">
                        <button type="button" class="btn btn-success" data-product-name="${laptop.laptop_name}">Add to Cart</button>
                        <button type="button" class="btn btn-primary ml-2" onclick="openProductModal('${laptop.laptop_name}', '${laptop.price.original_price}', '${laptop.image_url}')">Quick View</button>
                    </div>
                </div>
            </div>
        </div>
        
            `;

            laptopCardGroup.innerHTML = cardContent;

            const addToCartButton = laptopCardGroup.querySelector('.btn-success');
            addToCartButton.addEventListener('click', () => {
                const productName = addToCartButton.getAttribute('data-product-name');
                addToCart(productName);
            });

            premiumLaptopsCarousel.appendChild(laptopCardGroup);
        });
    }
};

xhrPremiumLaptops.send();

function addToCart(productName) {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(productName);
    localStorage.setItem('cart', JSON.stringify(existingCart));

    updateCartBadge();
}

function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartBadge.innerText = cart.length;
}



// BASIC LAPTOP CAROUSEL
const basicLaptopsCarousel = document.getElementById('basic-laptops-carousel');

const xhrBasicLaptops = new XMLHttpRequest();
xhrBasicLaptops.open('GET', './laptop.json', true);

xhrBasicLaptops.onreadystatechange = function () {
    if (xhrBasicLaptops.readyState === 4 && xhrBasicLaptops.status === 200) {
        const laptopData = JSON.parse(xhrBasicLaptops.responseText);

        // Filter Basic laptops based on "laptop_type"
        const basicLaptops = laptopData.laptops.filter(laptop => laptop.laptop_type === "Basic");

        // Clear the carousel content
        basicLaptopsCarousel.innerHTML = '';

        // Iterate through the basic laptops and populate the carousel
        basicLaptops.forEach((laptop, index) => {
            const laptopCardGroup = document.createElement('div');
            laptopCardGroup.className = `carousel-item ${index === 0 ? 'active' : ''}`;
            
            const cardContent = `
            <div class="d-flex justify-content-center align-items-center h-100">
            <div style="max-width: 600px; min-width: 600px;" class="card">
                <img class="card-img-top" src="${laptop.image_url}" alt="..." />
                <div class="card-body text-center">
                    <h5 class="fw-bolder">${laptop.laptop_name}</h5>
                    <p class="original-price">
                        ${laptop.price.sale_price
                            ? `<del>${laptop.price.original_price}</del>`
                            : laptop.price.original_price}
                    </p>
                    ${laptop.price.sale_price
                        ? `<p class="text-dark">${laptop.price.sale_price}</p>`
                        : ''}
                    <div class="mt-3">
                        <button type="button" class="btn btn-success" data-product-name="${laptop.laptop_name}">Add to Cart</button>
                        <button type="button" class="btn btn-primary ml-2" onclick="openProductModal('${laptop.laptop_name}', '${laptop.price.original_price}', '${laptop.image_url}')">Quick View</button>
                    </div>
                </div>
            </div>
        </div>
        
            `;

            laptopCardGroup.innerHTML = cardContent;

            const addToCartButton = laptopCardGroup.querySelector('.btn-success');
            addToCartButton.addEventListener('click', () => {
                const productName = addToCartButton.getAttribute('data-product-name');
                addToCart(productName);
            });

            basicLaptopsCarousel.appendChild(laptopCardGroup);
        });
    }
};

xhrBasicLaptops.send();

function addToCart(productName) {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(productName);
    localStorage.setItem('cart', JSON.stringify(existingCart));

    updateCartBadge();
}

function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartBadge.innerText = cart.length;
}









const laptopListElement = document.getElementById('laptop-list');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

const xhr = new XMLHttpRequest();
xhr.open('GET', './laptop.json', true); 
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const laptopData = JSON.parse(xhr.responseText);

    // Display all laptops initially
    displayLaptopData(laptopData.laptops);

    // Set up the search functionality
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const searchTerm = searchInput.value.toLowerCase();

      // Filter laptops that match the search term
      const matchingLaptops = laptopData.laptops.filter(laptop =>
        laptop.laptop_name.toLowerCase().includes(searchTerm)
      );
      
      // Display matching laptops
      displayLaptopData(matchingLaptops);
    });
  }
};
xhr.send();

function displayLaptopData(laptops) {
  laptopListElement.innerHTML = ''; // Clear previous display

  laptops.forEach((laptop) => {
    const laptopCard = document.createElement('div');
    laptopCard.className = 'col-md-4 mb-4';

    const cardContent = `
      <div class="card h-100">
        <a href="#">
          <img id="product-image" class="card-img-top" alt="Product" src="${laptop.image_url}">
        </a>
        <div class="card-body d-flex flex-column"> <!-- Add this class and style -->
          <a href="#" class="text-decoration-none text-dark">
            <h5 id="product-title" class="card-title">${laptop.laptop_name}</h5>
          </a>
          <div id="product-price" class="mb-1 pb-2">
            <h6 class="text-dark">
              ${laptop.price.sale_price
                ? `<span class="text-muted text-decoration-line-through">${laptop.price.original_price}</span>`
                : laptop.price.original_price}
            </h6>
            ${
              laptop.price.sale_price
                ? `<h6 class="text-dark">${laptop.price.sale_price}</h6>`
                : ''
            }
          </div>
          <div class="flex-grow-1"></div> <!-- Add this to push buttons to the bottom -->
          <div class="d-flex justify-content-center"> 
            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Add to Cart</button>
            <span class="mx-2"></span>
            <a href="#" class="btn btn-primary" onclick="openProductModal('${laptop.laptop_name}')">Quick View</a>
          </div>
        </div>
      </div>
    `;

    laptopCard.innerHTML = cardContent;
    laptopListElement.appendChild(laptopCard);
  });
}









// Brand Categories in shophtml
document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".list-group-item");
  
    // Add a click event listener to list items
    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Remove active class from all items
        listItems.forEach((li) => {
          li.classList.remove("active");
        });
  
        // Add active class to the clicked item
        item.classList.add("active");
      });
    });
  });

// Remove
// Example: Smooth scrolling for anchor links
// $(document).ready(function () {
//     $('a[href^="#"]').on('click', function (event) {
//       event.preventDefault();
//       $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//       }, 800);
//     });
//   });





// Add to cart interaction
$('.btn-add-to-cart').click(function () {
    var productTitle = $(this).closest('.card').find('.card-title').text();
    
  });

  // Search bar functionality
$('#search-form').submit(function (e) {
    e.preventDefault();
    var searchQuery = $('#search-input').val();
    
  });




// Toggle Navigation Background on Scroll
window.addEventListener('scroll', () => {
  const navBar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
      navBar.classList.add('navbar-scroll');
  } else {
      navBar.classList.remove('navbar-scroll');
  }
});

 // scroll to top button
$(document).ready(function() {
  // Show the scroll-to-top button when the user scrolls down
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('.scroll-to-top').fadeIn();
      } else {
          $('.scroll-to-top').fadeOut();
      }
  });

  // Scroll to the top when the button is clicked
  $('.scroll-to-top').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
  });
});

// Get a reference to the navbar element
const navbar = document.querySelector('.navbar');

// Listen for the scroll event
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Adjust the scroll position as needed
      // Add a class to make the navbar transparent
      navbar.classList.add('navbar-scrolled');
  } else {
      // Remove the class to make the navbar opaque
      navbar.classList.remove('navbar-scrolled');
  }
});