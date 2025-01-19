// -------------------------------------------------------
// -------------------- 15 MIN TIMER ---------------------
// -------------------------------------------------------
let timer;
let timeLeft = 15 * 60;
let timerStarted = false;

function startTimer() {
  if (!timerStarted) {
    timerStarted = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const timerElement = document.querySelector("#timer");
  if (timerElement) {
    timerElement.textContent = `Återstående tid: ${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }
}

function updateTimer() {
  if (timeLeft === 0) {
    clearInterval(timer);
    showCartEmptyAlert();
    clearCart();
  } else {
    timeLeft--;
    updateTimerDisplay();
  }
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 15 * 60;
  timerStarted = false;
  updateTimerDisplay();
}

function showCartEmptyAlert() {
  alert("Du var för långsam. \nVarukorgen har tömts!");
  cartArray.length = 0;
  lockedCart = false;
  showCart();
}

let lockedCart = false;

// -------------------------------------------------------
// --------------- ARRAY FOR PRODUCTS --------------------
// -------------------------------------------------------

const productsArray = [
  {
    id: 0,
    name: "Veep Poster",
    price: 400,
    rating: 5.0,
    amount: 0,
    size: "50x70 cm",
    category: "poster",
    images: [
      {
        url: "assets/images/products/veep_poster.jpg",
        width: 350,
        height: 525,
        alt: "Framed Veep poster hanging on a wall.",
      },
      {
        url: "assets/images/products/veep_poster2.jpg",
        width: 350,
        height: 525,
        alt: "Close-up of Veep Poster.",
      },
    ],
  },
  {
    id: 1,
    name: "Veep Totebag",
    price: 150,
    rating: 3.5,
    amount: 0,
    size: "one size",
    category: "bag",
    images: [
      {
        url: "assets/images/products/veep_totebag.jpg",
        width: 350,
        height: 525,
        alt: "Veep-themed totebag displayed upright",
      },
      {
        url: "assets/images/products/veep_totebag2.jpg",
        width: 350,
        height: 525,
        alt: "Veep-themed totebag shown laid down.",
      },
    ],
  },
  {
    id: 2,
    name: "Veep Orange Shirt",
    price: 250,
    rating: 4.5,
    amount: 0,
    size: "one size",
    category: "clothes",
    images: [
      {
        url: "assets/images/products/veep_orange_shirt.jpg",
        width: 350,
        height: 525,
        alt: "Orange Veep T-shirt on a male model.",
      },
    ],
  },
  {
    id: 3,
    name: "Seinfeld Poster",
    price: 300,
    rating: 3.0,
    amount: 0,
    size: "30x40 cm",
    category: "poster",
    images: [
      {
        url: "assets/images/products/seinfeld_poster.jpg",
        width: 350,
        height: 525,
        alt: "Framed Seinfeld poster hanging on a wall.",
      },
      {
        url: "assets/images/products/seinfeld_poster2.jpg",
        width: 350,
        height: 525,
        alt: "Close-up of Seinfeld Poster.",
      },
    ],
  },
  {
    id: 4,
    name: "Seinfeld Mug",
    price: 200,
    rating: 1.5,
    amount: 0,
    size: "one size",
    category: "mug",
    images: [
      {
        url: "assets/images/products/seinfeld_mug.jpg",
        width: 350,
        height: 525,
        alt: "White mug with Seinfeld logo, displayed against a beige background.",
      },
      {
        url: "assets/images/products/seinfeld_mug2.jpg",
        width: 350,
        height: 525,
        alt: "Close-up of Seinfeld mug design.",
      },
    ],
  },
  {
    id: 5,
    name: "Seinfeld Totebag",
    price: 150,
    rating: 3.0,
    amount: 0,
    size: "one size",
    category: "bag",
    images: [
      {
        url: "assets/images/products/seinfeld_totebag.jpg",
        width: 350,
        height: 525,
        alt: "Seinfeld-themed totebag displayed upright",
      },
      {
        url: "assets/images/products/seinfeld_totebag2.jpg",
        width: 350,
        height: 525,
        alt: "Seinfeld-themed totebag shown laid down.",
      },
    ],
  },
  {
    id: 6,
    name: "Seinfeld Orange Shirt",
    price: 250,
    rating: 5.0,
    amount: 0,
    size: "one size",
    category: "clothes",
    images: [
      {
        url: "assets/images/products/seinfeld_orange_shirt.jpg",
        width: 350,
        height: 525,
        alt: "Orange Seinfeld T-shirt on a male model.",
      },
    ],
  },
  {
    id: 7,
    name: "True Detective Poster",
    price: 300,
    rating: 4,
    amount: 0,
    size: "30x40 cm",
    category: "poster",
    images: [
      {
        url: "assets/images/products/true_detective_poster.jpg",
        width: 350,
        height: 525,
        alt: "Close-up of Veep Poster.",
      },
      {
        url: "assets/images/products/true_detective_poster2.jpg",
        width: 350,
        height: 525,
        alt: "Close-up of True Detective Poster.",
      },
    ],
  },
  {
    id: 8,
    name: "True Detective Totebag",
    price: 150,
    rating: 3.5,
    amount: 0,
    size: "one size",
    category: "bag",
    images: [
      {
        url: "assets/images/products/true_detective_totebag.jpg",
        width: 350,
        height: 525,
        alt: "True Detective-themed totebag displayed upright",
      },
      {
        url: "assets/images/products/true_detective_totebag2.jpg",
        width: 350,
        height: 525,
        alt: "True Detective-themed totebag shown laid down.",
      },
    ],
  },
  {
    id: 9,
    name: "True Detective Orange Shirt",
    price: 250,
    rating: 4.5,
    amount: 0,
    size: "one size",
    category: "clothes",
    images: [
      {
        url: "assets/images/products/true_detective_orange_shirt.jpg",
        width: 350,
        height: 525,
        alt: "Orange True Detective T-shirt on a male model.",
      },
    ],
  },
  {
    id: 10,
    name: "Parks Poster",
    price: 300,
    rating: 2.5,
    amount: 0,
    size: "30x40 cm",
    category: "poster",
    images: [
      {
        url: "assets/images/products/parks_poster.jpg",
        width: 350,
        height: 525,
        alt: "White mug with Parks and Recreation logo, displayed against a beige background.",
      },
      {
        url: "assets/images/products/parks_poster2.jpg",
        width: 350,
        height: 525,
        alt: "Close-up of Parks and Recreation Poster.",
      },
    ],
  },
  {
    id: 11,
    name: "Parks Totebag",
    price: 150,
    rating: 1.5,
    amount: 0,
    size: "one size",
    category: "bag",
    images: [
      {
        url: "assets/images/products/parks_totebag.jpg",
        width: 350,
        height: 525,
        alt: "Parks and recreation-themed totebag displayed upright",
      },
      {
        url: "assets/images/products/parks_totebag2.jpg",
        width: 350,
        height: 525,
        alt: "Parks and recreation-themed totebag shown laid down.",
      },
    ],
  },
  {
    id: 12,
    name: "Parks Mug",
    price: 200,
    rating: 2.0,
    amount: 0,
    size: "one size",
    category: "mug",
    images: [
      {
        url: "assets/images/products/parks_mug.jpg",
        width: 350,
        height: 525,
        alt: "White mug with Parks and Recreation logo, displayed against a beige background.",
      },
      {
        url: "assets/images/products/parks_mug2.jpg",
        width: 350,
        height: 525,
        alt: "Close-up of Parks and Recreation mug design",
      },
    ],
  },
  {
    id: 13,
    name: "Parks White Shirt",
    price: 250,
    rating: 1.5,
    amount: 0,
    size: "one size",
    category: "clothes",
    images: [
      {
        url: "assets/images/products/parks_shirt.jpg",
        width: 350,
        height: 525,
        alt: "White Parks and Recreation T-shirt on a male model.",
      },
    ],
  },
  {
    id: 14,
    name: "The Office Poster",
    price: 300,
    rating: 4.0,
    amount: 0,
    size: "30x40 cm",
    category: "poster",
    images: [
      {
        url: "assets/images/products/theoffice_poster.jpg",
        width: 350,
        height: 525,
        alt: "White mug with The Office logo, displayed against a beige background.",
      },
      {
        url: "assets/images/products/theoffice_poster2.jpg",
        width: 350,
        height: 525,
        alt: "Close-up of The Office Poster.",
      },
    ],
  },
  {
    id: 15,
    name: "The Office Mug",
    price: 200,
    rating: 3.5,
    amount: 0,
    size: "one size",
    category: "mug",
    images: [
      {
        url: "assets/images/products/theoffice_mug.jpg",
        width: 350,
        height: 525,
        alt: "White mug with The Office logo, displayed against a beige background.",
      },
      {
        url: "assets/images/products/theoffice_mug2.jpg",
        width: 350,
        height: 525,
        alt: "Close-up of The Office mug design",
      },
    ],
  },
  {
    id: 16,
    name: "The Office Totebag",
    price: 150,
    rating: 3.0,
    amount: 0,
    size: "one size",
    category: "bag",
    images: [
      {
        url: "assets/images/products/theoffice_totebag.jpg",
        width: 350,
        height: 525,
        alt: "The Office-themed totebag displayed upright",
      },
      {
        url: "assets/images/products/theoffice_totebag2.jpg",
        width: 350,
        height: 525,
        alt: "The Office-themed totebag shown laid down.",
      },
    ],
  },
  {
    id: 17,
    name: "The Office Orange Shirt",
    price: 250,
    rating: 5.0,
    amount: 0,
    size: "one size",
    category: "clothes",
    images: [
      {
        url: "assets/images/products/theoffice_orange_shirt.jpg",
        width: 350,
        height: 525,
        alt: "Orange The Office T-shirt on a male model.",
      },
    ],
  },
  {
    id: 18,
    name: "Frasier Poster",
    price: 400,
    rating: 5.0,
    amount: 0,
    size: "50x70 cm",
    category: "poster",
    images: [
      {
        url: "assets/images/products/frasier_poster.jpg",
        width: 350,
        height: 525,
        alt: "Veep Mug standing on a kitchen counter.",
      },
      {
        url: "assets/images/products/frasier_poster2.jpg",
        width: 350,
        height: 525,
        alt: "Close-up of Frasier Poster.",
      },
    ],
  },
  {
    id: 19,
    name: "Frasier Totebag",
    price: 150,
    rating: 2.0,
    amount: 0,
    size: "one size",
    category: "bag",
    images: [
      {
        url: "assets/images/products/frasier_totebag.jpg",
        width: 350,
        height: 525,
        alt: "Frasier-themed totebag displayed upright.",
      },
      {
        url: "assets/images/products/frasier_totebag2.jpg",
        width: 350,
        height: 525,
        alt: "Frasier-themed totebag shown laid down.",
      },
    ],
  },
  {
    id: 20,
    name: "Frasier Mug",
    price: 200,
    rating: 1.5,
    amount: 0,
    size: "one size",
    category: "mug",
    images: [
      {
        url: "assets/images/products/frasier_mug.jpg",
        width: 350,
        height: 525,
        alt: "White mug with Frasier logo, displayed against a beige background.",
      },
      {
        url: "assets/images/products/frasier_mug2.jpg",
        width: 350,
        height: 525,
        alt: "Close-up of Frasier mug design",
      },
    ],
  },
  {
    id: 21,
    name: "Frasier White Shirt",
    price: 250,
    rating: 1.0,
    amount: 0,
    size: "one size",
    category: "clothes",
    images: [
      {
        url: "assets/images/products/frasier_white_shirt.jpg",
        width: 350,
        height: 525,
        alt: "White The Office T-shirt on a male model.",
      },
    ],
  },
];

// -------------------------------------------------------
// ----- FUNCTION: generate and show product cards -------
// -------------------------------------------------------
function generateProducts(products) {
  const productsList = document.querySelector("#products");

  productsList.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("section");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
    <h3>${product.name}</h3>
    <div class="images carousel">
      <button class="carousel-btn prev-btn">❮</button>
      <div class="carousel-images">
        ${product.images
          .map(
            (image) => `
          <img src="${image.url}" alt="${image.alt}" width="${image.width}" height="${image.height}">
        `
          )
          .join("")}
      </div>
      <button class="carousel-btn next-btn">❯</button>
    </div>
    
    <div class="size-price">
      <h3>${product.size}</h3>
      <p>${product.price}kr</p>
    </div>
    <p>Rating: ${
      Array(Math.floor(product.rating))
        .fill('<i class="fa-solid fa-star"></i>')
        .join("") +
      (product.rating % 1 !== 0
        ? '<i class="fa-solid fa-star-half-stroke"></i>'
        : "")
    }</p>
  
    <div class="add-amount">
      <button class="minska" id="minska${
        product.id
      }" aria-label="Ta bort en stycken av produkten."><i class="fa-solid fa-minus"></i></button>
      <input type="number" min="0" value="${product.amount}" id="count-${
      product.id
    }">
      <button class="addera" id="addera${
        product.id
      }" aria-label="Lägg till en stycken av produkten."><i class="fa-solid fa-plus"></i></button>
    </div>
    <div class="sum-product">
      <h4 id="total-${product.id}">Totalt: ${
      product.price * product.amount
    }kr</h4>
    </div>
  `;

    productsList.appendChild(productCard);
  });

  initCarousel();

  document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener("change", (event) => {
      const productId = event.target.id.split("-")[1];
      updateAmountFromInput(productId);
    });
  });
}

generateProducts(productsArray);

// -------------------------------------------------------
// ----- FUNCTION: Increase amount with plus-btn ---------
// -------------------------------------------------------
function addToCart(productId) {
  const count = document.querySelector(`#count-${productId}`);
  const product = productsArray.find((item) => item.id == productId);

  if (lockedCart) {
    alert(
      "Du håller på att lägga en beställning. \nTryck på 'Ändra varukorg' i beställningsöversikten om du vill fortsätta handla."
    );
    return;
  }

  if (count && product) {
    product.amount += 1;
    count.value = product.amount;

    totalPriceProduct(productId);
    totalAmountCart(productId, 1);
    addProductInfoToCart(productId, 1);
    showPayment();
  }
}
// -------------------------------------------------------------------------

// -------------------------------------------------------
// ---- FUNCTION: Decrease amount with minus-button ------
// -------------------------------------------------------
function removeFromCart(productId) {
  const count = document.querySelector(`#count-${productId}`);
  const product = productsArray.find((item) => item.id == productId);

  if (lockedCart) {
    alert(
      "Du håller på att lägga en beställning. \nTryck på 'Ändra varukorg' i beställningsöversikten om du vill fortsätta handla."
    );
    return;
  }

  if (count && product && product.amount > 0) {
    product.amount -= 1;
    count.value = product.amount;

    if (product.amount === 0) {
      const existInCart = cartArray.findIndex((item) => item.id === productId);
      if (existInCart !== -1) {
        cartArray.splice(existInCart);
      }
    }

    totalPriceProduct(productId);
    totalAmountCart(productId, -1);
    addProductInfoToCart(productId, -1);
    showPayment();
  }
}
// -------------------------------------------------------------------------

// --------------------------------------------------------------
// -------- FUNCTION: Change amount with keyboard ---------------
// --------------------------------------------------------------
function updateAmountFromInput(productId) {
  const count = document.querySelector(`#count-${productId}`);
  const product = productsArray.find((item) => item.id == productId);

  if (count && product) {
    product.amount = parseInt(count.value, 10);

    totalPriceProduct(productId);
    totalAmountCart(productId, product.amount);
    addProductInfoToCart(productId, product.amount);
    showPayment();
  } else {
    count.value = product.amount;
  }
}
// -------------------------------------------------------------------------

// -------------------------------------------------------
// -------- FUNCTION: Adds products to cartArray ---------
// -------------------------------------------------------
let cartArray = [];

function addProductInfoToCart(id) {
  id = Number(id);
  const existInCart = cartArray.findIndex((product) => product.id === id);

  const product = productsArray.find((item) => item.id === id);

  if (!product) {
    console.error(`Produkt med id ${id} kunde inte hittas.`);
    return;
  }

  if (existInCart !== -1) {
    cartArray[existInCart].amount = product.amount;
  } else {
    cartArray.push({
      id: product.id,
      name: product.name,
      price: product.price,
      amount: product.amount,
    });
  }
  showCart();
  totalAmountCart();
}
// -------------------------------------------------------------------------

// -------------------------------------------------------
// ---------- Event listener for + and - btns ------------
// -------------------------------------------------------
document.querySelector("#products").addEventListener("click", function (e) {
  const button = e.target.closest("button");

  if (button && button.id) {
    const match = button.id.match(/\d+/);

    if (match) {
      const productId = match[0];

      if (button.id.startsWith("addera")) {
        addToCart(productId);
      } else if (button.id.startsWith("minska")) {
        removeFromCart(productId);
      }
    }
  }
});
// -------------------------------------------------------------------------

// -------------------------------------------------------
// --------------------- CART MODAL ----------------------
// -------------------------------------------------------
const shoppingCartBtn = document.getElementById("shopping-cart-btn");
const shortcut = document.getElementById("shortcut");
const modalShoppingCart = document.getElementById("modal-shopping-cart");
const closeBtn = document.getElementById("close");
const checkoutBtn = document.getElementById("checkout-btn");
const checkout = document.getElementById("checkout");
checkout.style.display = "none";

shoppingCartBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  modalShoppingCart.style.display = "flex";

  showCart();
});

shortcut.addEventListener("click", (event) => {
  event.stopPropagation();
  modalShoppingCart.style.display = "flex";
  modalShoppingCart.scrollIntoView({ behavior: "smooth" });
  showCart();
});

closeBtn.addEventListener("click", () => {
  modalShoppingCart.style.display = "none";
});

document.addEventListener("click", (event) => {
  if (
    !modalShoppingCart.contains(event.target) &&
    event.target !== shoppingCartBtn
  ) {
    modalShoppingCart.style.display = "none";
  }
});

checkoutBtn.addEventListener("click", () => {
  if (cartArray.length > 0) {
    checkout.style.display = "flex";
    checkout.scrollIntoView({ behavior: "smooth" });
    lockedCart = true;
    modalShoppingCart.style.display = "none";

    if (cartArray.length > 0) {
      startTimer();
    }

    orderSummary(cartArray);
    orderSummaryInfo.style.display = "grid";
  } else {
    alert("Du har inga produkter i varukorgen än!");
    modalShoppingCart.style.display = "none";
    return;
  }
});
// -------------------------------------------------------------------------

// -------------------------------------------------------
// ------------------ PRODUCTS IN CART -------------------
// -------------------------------------------------------
let totalPrice = 0;
let itemTotalPrice = 0;
let quantityDiscountInfo = "";
let mondayDiscountInfo = "";

function showCart() {
  const cartList = document.querySelector("#cart");
  cartList.innerHTML = "<h2>Din varukorg</h2>";

  if (cartArray.length === 0) {
    cartList.innerHTML = `<p class="empty-cart">Din varukorg är tom.</p>`;
    return;
  }

  cartArray = cartArray.filter((item) => item.amount > 0);

  const totalItems = cartArray.reduce((sum, item) => sum + item.amount, 0);

  totalPrice = 0;

  cartArray.forEach((item) => {
    const product = productsArray.find((p) => p.id === item.id);
    if (product && product.images.length > 0) {
      const image = product.images[0];

      let itemTotalPrice = item.amount * product.price;

      if (item.amount > 9) {
        itemTotalPrice *= 0.9;
        itemTotalPrice = Math.floor(itemTotalPrice);
        quantityDiscountInfo = "10% rabatt vid köp av 10st.";
      }

      totalPrice += itemTotalPrice;
      totalPrice = Math.floor(totalPrice);

      cartList.innerHTML += `
        <div class="cart-item">
          <div class="cart-item-details">
            <div class="cart-item-info">
              <h4 class="cart-item-name">${item.name}</h4>
              <h4 class="cart-item-amount">Antal: ${item.amount}</h4> 
              <h4 class="cart-item-price">Pris: ${itemTotalPrice} kr</h4>
            </div>
            <div class="thumb-img">
              <img src="${image.url}" alt="${image.alt}" width="${image.width}" height="${image.height}">
            </div>
          </div>
        </div> 
      `;
    }
  });

  cartList.innerHTML += ` 
    <div class="cart-total">
      <div class="summary">
        <div class="cart-sum"><h4>Summa: </h4><span class="black">${totalPrice} kr</span></div>
      </div> 
    </div>
    <div id="deleteCart" class="deleteCart" aria-label="Rensa hela varukorgen">
      <button aria-label="Knapp för att rensa varukorgen."><i class="delete-cart fa-regular fa-trash-can" title="Töm varukorg"></i></button>
    </div>
  `;
  deleteCart();
}

// -------------------------------------------------------------------------

// TOTAL PRICE if amount > 1 PRODUCT
function totalPriceProduct(productId) {
  const product = productsArray.find((item) => item.id == productId);
  const totalElement = document.querySelector(`#total-${productId}`);
  if (product && totalElement) {
    totalElement.textContent = `Totalt: ${product.price * product.amount} kr`;
  }
}
// -------------------------------------------------------------------------

// --------------------------------------------------------------
// -------- FUNCTION: shows product amount in cart --------------
// --------------------------------------------------------------
function totalAmountCart() {
  const totalQuantity = cartArray.reduce(
    (total, item) => total + item.amount,
    0
  );
  const quantityElement = document.querySelector("#quantity");

  if (quantityElement) {
    if (totalQuantity > 0) {
      quantityElement.textContent = totalQuantity;
      quantityElement.style.display = "inline";
    } else {
      quantityElement.textContent = 0;
    }
  }
}
// -------------------------------------------------------------------------

// --------------------------------------------------------------
// ---------- FUNCTION: deletes products in cart ----------------
// --------------------------------------------------------------
function deleteCart() {
  const deleteCurrentCart = document.querySelector("#deleteCart");

  deleteCurrentCart.addEventListener("click", () => {
    const confirmDeleteCart = window.confirm(
      "Är du säker på att du vill tömma hela varukorgen?"
    );

    if (confirmDeleteCart) {
      clearCart();
    }
  });
}

function clearCart() {
  cartArray.length = 0; // Tömmer varukorgen

  lockedCart = false;
  resetTimer();
  checkout.style.display = "none";

  // Nollställ antal för alla produkter i productsArray
  productsArray.forEach((product) => (product.amount = 0));

  // Uppdatera inputfält och totaler till 0
  productsArray.forEach((product) => {
    const countElement = document.querySelector(`#count-${product.id}`);
    const totalElement = document.querySelector(`#total-${product.id}`);
    if (countElement) countElement.value = 0;
    if (totalElement) totalElement.textContent = `Totalt: 0 kr`;
  });

  const quantityElement = document.querySelector("#quantity");
  if (quantityElement) {
    quantityElement.textContent = 0;
    quantityElement.style.display = "none";
  }

  showCart(); // Uppdatera varukorgens visning
  orderSummary(cartArray);
}

// -------------------------------------------------------------------------

// -------------------------------------------------------
// ----------- Sort by Name, Price & Rating --------------
// -------------------------------------------------------
const sortFilter = document.getElementById("sort-filter");
let filteredProducts = productsArray;

sortFilter.addEventListener("change", (event) => {
  filteredProducts = [...productsArray];

  const sortByName = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  const sortByPrice = (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  };

  const sortByRating = (a, b) => {
    if (a.rating < b.rating) return 1;
    if (a.rating > b.rating) return -1;
    return 0;
  };

  if (event.target.value === "sort-name") {
    console.log("Sortera efter namn (A-Ö)");
    filteredProducts.sort(sortByName);
  } else if (event.target.value === "sort-price") {
    console.log("Sortera efter pris");
    filteredProducts.sort(sortByPrice);
  } else if (event.target.value === "sort-rating") {
    console.log("Sortera efter betyg");
    filteredProducts.sort(sortByRating);
  }

  generateProducts(filteredProducts);
});
// -------------------------------------------------------------------------

// -------------------------------------------------------
// ---------- FUNCTION: to filter by category ------------
// -------------------------------------------------------

const categorySelect = document.getElementById("category");

const filterCategory = (category) => {
  if (category === "everything") {
    filteredProducts = productsArray;
  } else {
    filteredProducts = productsArray.filter(
      (product) => product.category === category
    );
  }
};

categorySelect.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;
  filterCategory(selectedCategory);
  generateProducts(filteredProducts);
});
// -------------------------------------------------------------------------

// -------------------------------------------------------
// -------------- FUNCTION: For IMG-carousel -------------
// -------------------------------------------------------
function initCarousel() {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((productCard, productIndex) => {
    const carouselImages = productCard.querySelectorAll(".carousel-images img");
    const carouselContainer = productCard.querySelector(".carousel-images");
    const prevBtn = productCard.querySelector(".prev-btn");
    const nextBtn = productCard.querySelector(".next-btn");

    if (
      !carouselContainer ||
      !prevBtn ||
      !nextBtn ||
      carouselImages.length === 0
    )
      return;

    let currentIndex = 0;

    function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener("click", () => {
      currentIndex =
        currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % carouselImages.length;
      updateCarousel();
    });
  });
}
// -------------------------------------------------------------------------

// -------------------------------------------------------
// ---- Everything regarding order form and validation ---
// -------------------------------------------------------
const form = document.getElementById("order-form");
const submitButton = form.querySelector(".confirm");
const invoice = document.getElementById("invoice-btn");
const card = document.getElementById("card-btn");
const payment = document.querySelector(".payment");
const insertCard = document.getElementById("insert-card-info");
const insertInvoice = document.getElementById("insert-invoice-info");

payment.style.display = "none";
invoice.style.display = "none";
card.style.display = "none";
insertInvoice.style.display = "none";
insertCard.style.display = "none";

document.addEventListener("input", showPayment);

function validateCustomerInfo() {
  const fields = [
    form.querySelector("#first-name"),
    form.querySelector("#last-name"),
    form.querySelector("#street-address"),
    form.querySelector("#postal-code"),
    form.querySelector("#city"),
    form.querySelector("#mobile"),
    form.querySelector("#email"),
    form.querySelector("#data-approval"),
  ];
  return fields.every((field) => field.checkValidity());
}

let validationOK = false;

function showPayment() {
  if (validateCustomerInfo() & (totalPrice < 2000)) {
    payment.style.display = "flex";
    card.style.display = "flex";
    invoice.style.display = "flex";
  } else if (validateCustomerInfo() & (totalPrice >= 800)) {
    payment.style.display = "flex";
    card.style.display = "none";
    invoice.style.display = "none";
    insertCard.style.display = "flex";
  } else {
    payment.style.display = "none";
  }
}

card.addEventListener("click", () => {
  insertCard.style.display = "flex";
  insertInvoice.style.display = "none";
});

invoice.addEventListener("click", () => {
  insertInvoice.style.display = "flex";
  insertCard.style.display = "none";
});

// Validates Invoice (if chosen as option) //
function validateInvoice() {
  const personalID = form.querySelector("#personal-id");
  if (personalID.checkValidity()) {
    validationOK = true;
  } else {
    validationOK = false;
  }
}

// Validates Card (if chosen as option)
function validateCard() {
  const cardNo = form.querySelector("#cardNo");
  const expDate = form.querySelector("#expDate");
  const cvc = form.querySelector("#cvc");
  let expDateIsValid = false;
  const expDateValue = expDate.value;

  if (expDateValue.length === 5 && expDateValue[2] === "/") {
    const month = parseInt(expDateValue.substring(0, 2));
    const year = parseInt(expDateValue.substring(3, 5));

    if (month >= 1 && month <= 12 && year >= 24 && year <= 32) {
      expDateIsValid = true;
    }
  }
  if (cardNo.checkValidity() && expDateIsValid && cvc.checkValidity()) {
    validationOK = true;
  } else {
    validationOK = false;
  }
}

function validatePayment() {
  if (validationOK == true) {
    submitButton.style.backgroundColor = "green";
    submitButton.style.color = "white";
    submitButton.style.cursor = "pointer";
  } else {
    submitButton.style.backgroundColor = "grey";
    submitButton.style.cursor = "not-allowed";
  }
}

insertCard.addEventListener("input", () => {
  validateCard();
  validatePayment();
});

insertInvoice.addEventListener("input", () => {
  validateInvoice();
  validatePayment();
});

showPayment();
validatePayment();

// Erase/delete form
const deleteForm = document.getElementById("clear-form");

deleteForm.addEventListener("click", () => {
  const userConfirmed = window.confirm(
    "Är du säker på att du vill rensa formuläret?"
  );

  if (userConfirmed) {
    form.reset();
    payment.style.display = "none";
  }
});

let orderSummaryInfo = document.querySelector("#order-info");
// -------------------------------------------------------------------------

// -------------------------------------------------------
// ----- FUNCTION: Order summary in Checkout section -----
// -------------------------------------------------------
function orderSummary(cartArray) {
  orderSummaryInfo.innerHTML = "<h2>Din varukorg:</h2> ";

  let totalPrice = 0;

  cartArray.forEach((item) => {
    const product = productsArray.find((p) => p.id === item.id);
    if (product && product.images.length > 0) {
      const image = product.images[0];

      let itemTotalPrice = item.amount * product.price;

      if (item.amount > 9) {
        itemTotalPrice *= 0.9;
        itemTotalPrice = Math.floor(itemTotalPrice);
        quantityDiscountInfo = "10% rabatt vid köp av 10st.";
      }

      totalPrice += itemTotalPrice;
      totalPrice = Math.floor(totalPrice);

      orderSummaryInfo.innerHTML += `
            <div class="summary">
              <h4 class="product-name">${item.name} <span class="lighter">(${item.amount}st)</span></h4>
              <h4 class="product-price">${itemTotalPrice} kr</h4>
        </div>`;
    }
  });

  orderSummaryInfo.innerHTML += `
      <div class="total-shipping">
                    <hr style="border: 1px solid black; margin: 10px 0;">
        <div class="row"><h5>Summa: </h5><h5>${totalPrice} kr</h5></div>
      </div>
  
      <div class="edit-shipping">
        <button class="edit-cart" aria-label="Ändra varukorg">Ändra varukorg</button> 
      </div>
  `;

  const editCart = document.querySelector(".edit-cart");

  editCart.addEventListener("click", () => {
    console.log("Ändra kundkorg = OK");
    lockedCart = false;
    orderSummaryInfo.innerHTML = "";
    orderSummaryInfo.style.display = "none";
    checkout.style.display = "none";
    sortFilter.scrollIntoView({ behavior: "smooth" });
    resetTimer();
  });
}
// -------------------------------------------------------------------------

// -------------------------------------------------------
// ----- FUNCTION: Search products/categories etc --------
// -------------------------------------------------------
const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector("button");

const filterProducts = () => {
  const query = searchInput.value.toLowerCase();
  filteredProducts = productsArray.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );
  generateProducts(filteredProducts);
};

searchInput.addEventListener("input", filterProducts);

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  filterProducts();
});
// -------------------------------------------------------------------------

// Confirmation modal
function confirmationMessage(cartArray) {
  const confirmation = document.querySelector("#confirmation-modal");
  confirmation.style.display = "flex";
  console.log(confirmation.style.display);

  orderSummaryInfo.innerHTML = orderSummaryInfo.innerHTML.replace(
    /<h2>Din varukorg:<\/h2>|<button class="edit-cart" aria-label="Ändra varukorg">Ändra varukorg<\/button>/g,
    ""
  );

  confirmation.innerHTML = `<div class="confirmation-message">
      <h1>Din beställning</h1>
        <div class="confirm-summary">${orderSummaryInfo.innerHTML}</div>
    </div>`;

  confirmation.innerHTML += `
    <button id="confirm-order" class="confirm-button" aria-label="Knapp för att bekräfta beställningen.">Bekräfta beställning</button>
  `;

  document.getElementById("confirm-order").addEventListener("click", () => {
    alert("Beställningen har lagts!");
    confirmation.style.display = "none";
    checkout.style.display = "none";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    clearCart();
  });
}

const confirmPurchase = document.getElementById("confirm");

confirmPurchase.addEventListener("click", () => {
  confirmationMessage(cartArray);
  const confirmation = document.querySelector("#confirmation-modal");
  confirmation.style.display = "flex";
});
