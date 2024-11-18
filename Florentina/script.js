// Start of home section
// Toggle dropdown visibility
document.getElementById("dropdownButton").addEventListener("click", function (event) {
    event.preventDefault();

    const dropdown = document.getElementById("userDropdown");
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
    } else {
        console.error("Dropdown with ID 'userDropdown' not found.");
    }
});

// Open a modal by ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex"; // Show modal (flex centers it)
    } else {
        console.error(`Modal with ID '${modalId}' not found.`);
    }
}

// Close a modal by ID
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none"; // Hide modal
    } else {
        console.error(`Modal with ID '${modalId}' not found.`);
    }
}

// Login functionality
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
        alert("Login successful!");
        closeModal("loginModal");
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Sign-up functionality
function signUp() {
    const username = document.getElementById("signUpUsername").value;
    const password = document.getElementById("signUpPassword").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Sign-up successful!");
        closeModal("signUpModal");
    } else {
        alert("Please fill in all fields.");
    }
}


// Theme Toggle
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('themeToggle');
    const body = document.body;
    const navbar = document.getElementById('navbar');
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
        body.classList.add(storedTheme);
        navbar.classList.add(storedTheme === 'dark-theme' ? 'navbar-dark' : 'navbar-light');
        themeToggleButton.innerHTML = storedTheme === 'dark-theme' ? 'Light Mode' : 'Dark Mode';
    } else {
        body.classList.add('light-theme');
        navbar.classList.add('navbar-light');
        themeToggleButton.innerHTML = 'Dark Mode';
    }

    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.replace('light-theme', 'dark-theme');
            navbar.classList.replace('navbar-light', 'navbar-dark');
            themeToggleButton.innerHTML = 'Light Mode';
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.replace('dark-theme', 'light-theme');
            navbar.classList.replace('navbar-dark', 'navbar-light');
            themeToggleButton.innerHTML = 'Dark Mode';
            localStorage.setItem('theme', 'light-theme');
        }
    });
});
// End of home section


// Start of about section

// Event listener for the contact form submission
document.addEventListener('DOMContentLoaded', function() {

    // Handle navbar toggle on smaller screens
    const navbarToggle = document.querySelector('#about-navbar .navbar-toggle');
    const navbarLinks = document.querySelector('.about-nav-links');
    
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            navbarLinks.classList.toggle('active');
        });
    }

    // subcribe button
     // Get elements 
   const popupForm = document.getElementById("popupForm"); 
   const openPopup = document.getElementById("openPopup"); 
   const closePopup = document.getElementsByClassName("close")[0]; 

   // Show popup when "Subscribe" button is clicked 
   openPopup.addEventListener("click", function() { 
       popupForm.style.display = "flex"; // Use flex to center it 
   }); 

   // Close popup when "x" is clicked 
   closePopup.addEventListener("click", function() { 
       popupForm.style.display = "none"; 
   }); 

   // Close popup if the user clicks outside the form 
   window.addEventListener("click", function(event) { 
       if (event.target === popupForm) { 
           popupForm.style.display = "none"; 
       } 
   });


    // Contact form validation
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nameInput = document.querySelector('#name');
            const emailInput = document.querySelector('#email');
            const messageInput = document.querySelector('#message');
            
            // Basic form validation
            if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
                alert('Please fill in all fields.');
                return;
            }
            
            // If validation passes
            alert('Thank you for your message!');
            contactForm.reset(); // Clear form fields after submission
        });
    }

});



// Start of products section
// Sample product data

    

// DOM elements

const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartIcon = document.querySelector('.fa-shopping-cart'); // Иконка корзины
const cartDropdown = document.getElementById('cart'); // Окно корзины

// Динамическое хранилище корзины


// Пример данных продуктов (замените своими реальными данными)

const products = [
    {
        id: 1,
        name: 'Hydrangea Rose Harmony',
        price: 12.99,
        discount: '-10%',
        imgSrc: 'images/f1.jpg',
        category: 'combo'
    },
    {
        id:2,
        name: 'Sunny Girl',
        price: 14.99,
        discount: '',
        imgSrc: 'images/f10.jpg',
        category: 'peonies'
    },
    {
        id:3,
        name: 'Rose Romance',
        price: 14.99,
        discount: '-15%',
        imgSrc: 'images/f2.jpg',
        category:'combo'
    },
    {
        id:4,
        name: 'Bright pink',
        price: 13.99,
        discount: '-5%',
        imgSrc: 'images/f7.jpg',
        category: 'hydrangeas'
    },

    {
        id:5,
        name: 'Spray Rose Elegance',
        price: 10.99,
        discount: '',
        imgSrc: 'images/f3.jpg',
        category: 'roses'
    },
    { 
        id:6,
        name: 'Light Peony', 
        price: 13.99, 
        imgSrc: 'images/f12.jpg', 
        discount: '', 
        category: 'peonies' 
    }, 
    {
        id:7,
        name: 'Ivory Dreams',
        price: 9.99,
        discount: '-20%',
        imgSrc: 'images/IMG_2812.jpg',
        category: 'roses'
    },
    {
        id:8,
        name: 'Hydrangea Rose Harmony',
        price: 12.99,
        discount: '',
        imgSrc: 'images/f11.jpg',
        category: 'hydrangeas'
    },
    {
        id:9,
        name: 'Romantic Blooms',
        price: 11.99,
        discount: '-15%',
        imgSrc: 'images/IMG_2824.jpg',
        category: 'combo'
    },
    {
        id:10,
        name: 'Pure White Roses',
        price: 10.99,
        discount: '-5%',
        imgSrc: 'images/f6.jpg',
        category: 'roses'
    },
    {  
        id:11,
        name: 'Hydrangea Delight',
        price: 15.99,
        discount: ' ',
        imgSrc: 'images/f8.jpg',
        category: 'hydrangeas'
    },
    {
        id:12,
        name: 'Peony Perfection',
        price: 12.99,
        imgSrc: 'images/f9.jpg',
        discount: '',
        category: 'peonies'
    },
    
];

let cart = loadCartFromLocalStorage(); // Load cart from Local Storage when the page loads

// Call updateCartDisplay to show stored items in the cart immediately upon loading
updateCartDisplay();

// Function to add a product to the cart
function addToCart(productName, productPrice, productImg) {
    const item = { id: Date.now(), name: productName, price: productPrice, img: productImg };
    cart.push(item);
    saveCartToLocalStorage(); // Save cart to Local Storage
    updateCartDisplay(); // Update cart display
}

// Function to update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update the item count in the cart icon
    cartCount.textContent = cart.length;

    // Clear current list and add items again
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="cart-item-info">
                <img src="${item.img}" alt="${item.name}" class="cart-item-image">
                <div>
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(listItem);
        total += item.price;
    });
    cartTotal.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
}

// Function to remove an item from the cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCartToLocalStorage(); // Update Local Storage after removing
    updateCartDisplay(); // Refresh cart display
}

// Function to save cart to Local Storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load cart from Local Storage
function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
}

// Event handler for "add to cart" buttons in each product
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('cart-btn')) {
        const product = event.target.closest('.box');
        const productName = product.querySelector('h3').textContent;
        const productPrice = parseFloat(product.querySelector('.price').textContent.replace('$', ''));
        const productImg = product.querySelector('img').src;
        addToCart(productName, productPrice, productImg);
    }
});

// Event handler to toggle cart visibility when clicking on cart icon
document.querySelector('.fa-shopping-cart').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('cart').classList.toggle('hidden');
});

// Event handler for "Proceed to Checkout" button
document.getElementById('checkoutButton').addEventListener('click', function() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Proceeding to checkout...");
        // Logic for handling the checkout process
    }
});

const boxContainer = document.querySelector('.box-container');


function applyFilter(filter) {
    // Выбор кнопок фильтров
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Устанавливаем активную кнопку
    const activeButton = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(filter));
    if (activeButton) activeButton.classList.add('active');

    // Очищаем контейнер продуктов
    boxContainer.innerHTML = '';

    // Фильтрация продуктов
    const filteredProducts = filter === 'all' ? products : products.filter(product => product.category === filter);

    // Если продукты найдены, создаём карточки
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML = `
                <div class="image">
                    <img src="${product.imgSrc}" alt="${product.name}" onerror="this.src='images/default.jpg';">
                    <div class="icons">
                        <a href="#" class="products-cart-btn" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
                <div class="content">
                    <h3>${product.name}</h3>
                    <div class="price">$${product.price.toFixed(2)} <span></span></div>
                </div>
            `;
            boxContainer.appendChild(box);
        });
    } else {
        // Если продуктов нет, показать сообщение
        boxContainer.innerHTML = '<p>No products available.</p>';
    }

    // Сохраняем выбранный фильтр
    localStorage.setItem('selectedFilter', filter);
}


window.addEventListener('load', () => {
    const savedFilter = localStorage.getItem('selectedFilter') || 'all';
    applyFilter(savedFilter);
});







// Toggle dark/light mode
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('btn-light');
    themeToggle.classList.toggle('btn-dark');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Login/Sign Up functionality
// Открытие и закрытие модальных окон
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Функции для входа и регистрации
function signUp() {
    const username = document.getElementById("signUpUsername").value;
    const password = document.getElementById("signUpPassword").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Registration successful!");
        closeModal('signUpModal');
    } else {
        alert("Please fill in all fields.");
    }
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Welcome!");
        closeModal('loginModal');
    } else {
        alert("Invalid username or password.");
    }
}


// Initialize by rendering all products
renderProducts('all');


// Start of review section


// Start of explore section


// Start of contact section
// Play sound on button click
const audio = new Audio("select-click.mp3");
      document.getElementById('contactSubmitBtn').addEventListener('click', function(event) {
          audio.play();
      });




document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this); 

    // Use Fetch to send the data
    fetch('our-server-url', { // need real form where to save the data
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); 
    })
    .then(data => {
        // Call the callback function to handle the success
        handleSuccess(data.message || "Message sent successfully!");
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        alert('There was an error sending your message. Please try again.');
    });
});

function handleSuccess(successMessage) {
    alert(successMessage); 
    document.getElementById('contactForm').reset(); 
}

// FAQ Accordion functionality
let li = document.querySelectorAll(".faq-text li");

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
        let clickedLi;
        if (e.target.classList.contains("question-arrow") || e.target.classList.contains("arrow")) {
            clickedLi = e.target.closest("li"); // Правильный способ найти родительский элемент li
        } else {
            clickedLi = e.target.closest("li"); // Если клик по тексту вопроса, все равно захватить родительский li
        }
        clickedLi.classList.toggle("showAnswer");
    });
}





// Theme toggle functionality (same as before)
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('themeToggle');
    const body = document.body;
    const navbar = document.getElementById('navbar');

    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
        body.classList.add(storedTheme);
        navbar.classList.add(storedTheme === 'dark-theme' ? 'navbar-dark' : 'navbar-light');
        themeToggleButton.innerHTML = storedTheme === 'dark-theme' ? 'Light Mode' : 'Dark Mode';
    } else {
        body.classList.add('light-theme');
        navbar.classList.add('navbar-light');
        themeToggleButton.innerHTML = 'Dark Mode';
    }

    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.replace('light-theme', 'dark-theme');
            navbar.classList.replace('navbar-light', 'navbar-dark');
            themeToggleButton.innerHTML = 'Light Mode';
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.replace('dark-theme', 'light-theme');
            navbar.classList.replace('navbar-dark', 'navbar-light');
            themeToggleButton.innerHTML = 'Dark Mode';
            localStorage.setItem('theme', 'light-theme');
        }
    });
});

