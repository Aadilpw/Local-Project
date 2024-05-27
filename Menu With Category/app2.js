const menu = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "breakfast",
      price: 15.99,
      img: "image.png",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Diner Double",
      category: "lunch",
      price: 13.99,
      img: "image.png",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Godzilla Milkshake",
      category: "shakes",
      price: 6.99,
      img: "image.png",
      desc: `kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Country Delight",
      category: "breakfast",
      price: 20.99,
      img: "image.png",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Egg Attack",
      category: "lunch",
      price: 22.99,
      img: "image.png",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "shakes",
      price: 18.99,
      img: "image.png",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Bacon Overflow",
      category: "breakfast",
      price: 8.99,
      img: "image.png",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "American Classic",
      category: "lunch",
      price: 12.99,
      img: "image.png",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "Quarantine Buddy",
      category: "shakes",
      price: 16.99,
      img: "image.png",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Bison Steak",
      category: "dinner",
      price: 22.99,
      img: "image.png",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  const breakFastButton = document.getElementById("BreakFast");
  const lunchButton = document.getElementById("Lunch");
  const shakesButton = document.getElementById("Shakes");
  const dinnerButton = document.getElementById("Dinner");
  const AllButton = document.getElementById("All");
  
  window.addEventListener("DOMContentLoaded", () => displayTexts(menu));
  
  function displayTexts(menu) {
    const myContent = document.querySelector(".content");
  
    const menuItems = menu
      .map((item) => {
        return `
    <article class="menu-item" data-id="${item.id}">
     <div class="image"><img src="${item.img}" alt="${item.title}"></div>
      
      <div class="item">
       <h3>${item.title}</h3>  <span class="price">Price : ${item.price}</span>
       <p class="dotted-line"></p>
       <p class="description">${item.desc}</p>
      
        <button class="cart-button"> Shop now <svg class="cartIcon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
      </div>
    </article>
    `;
      })
      .join("");
  
    myContent.innerHTML = menuItems;
  
    // Add event listeners to "Shop now" buttons
    const shopButtons = document.querySelectorAll(".cart-button");
    shopButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const menuItem = event.target.closest(".menu-item");
        const itemId = menuItem.dataset.id;
        addToCart(itemId);
      });
    });
  }
  
  AllButton.addEventListener("click", () => displayTexts(menu));
  breakFastButton.addEventListener("click", () =>
    displayTexts(menu.filter((item) => item.category === "breakfast"))
  );
  lunchButton.addEventListener("click", () =>
    displayTexts(menu.filter((item) => item.category === "lunch"))
  );
  shakesButton.addEventListener("click", () =>
    displayTexts(menu.filter((item) => item.category === "shakes"))
  );
  dinnerButton.addEventListener("click", () =>
    displayTexts(menu.filter((item) => item.category === "dinner"))
  );
  

  const cart = [];
  
  const cartOpen = document.querySelector(".cart-open");
  const cartClose = document.querySelector(".cart-close");
  const cartIcon = document.querySelector(".icon-cart");
  const quantity = document.querySelector(".quantity");
  const cartInfo = document.querySelector(".cart-info");
  const closeCartButton = document.querySelector(".closeCart");
  
  cartIcon.addEventListener("click", () => {
    cartOpen.classList.toggle("cart-close");
  });
  
  closeCartButton.addEventListener("click", () => {
    cartOpen.classList.add("cart-close");
  });
  
  
  function addToCart(id) {
    const item = menu.find((menuItem) => menuItem.id == id);
    if (item) {
      const existingItem = cart.find((cartItem) => cartItem.id == id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
    }
    updateCart();
  }
  
  function updateCart() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    quantity.innerText = totalItems;
  
    const cartItems = cart
      .map((item) => {
        return `
        <div class="cart-item">
          <h4>${item.title}</h4>
          <p>Price: ${item.price} x ${item.quantity} = ${(
          item.price * item.quantity
        ).toFixed(2)}</p>
        </div>
      `;
      })
      .join("");
    cartInfo.innerHTML = cartItems;
  }