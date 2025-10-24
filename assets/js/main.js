document.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector(".bar");
  const nav = document.querySelector(".navigation");

  // Toggle nav on bar click
  bar.addEventListener("click", () => {
    if (nav.style.left === "0%") {
      nav.style.left = "-100%";
      bar.src = "assets/images/others/menu.png";
      document.body.style.overflow = "";
    } else {
      nav.style.left = "0%";
      bar.src = "assets/images/others/x.png";
      document.body.style.overflow = "hidden";
    }
  });

  // Close nav when clicking outside
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !bar.contains(event.target) && nav.style.left === "0%") {
      nav.style.left = "-100%";
      bar.src = "assets/images/others/menu.png";
      document.body.style.overflow = "";
    }
  });
});

// Hero Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.hero-slider .slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  let currentSlide = 0;
  
  // Auto-slide functionality
  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  
  // Manual dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      
      currentSlide = index;
      
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    });
  });
  
  // Auto-slide every 5 seconds
  setInterval(nextSlide, 5000);
});

// Update your existing setActive function to reset view more when filter changes
function setActive(element) {
  const links = document.querySelectorAll(".link-menu");
  links.forEach((link) => link.classList.remove("active"));
  element.classList.add("active");
  
  // Reset to collapsed view when filter changes
  setTimeout(() => {
    const container = document.getElementById('productContainer');
    const btn = document.getElementById('viewMoreBtn');
    const btnText = document.getElementById('btnText');
    
    if (!container.classList.contains('collapsed')) {
      container.classList.add('collapsed');
      container.classList.remove('expanding');
      btnText.textContent = 'Continue Reading';
      btn.classList.remove('expanded');
    }
  }, 300);
}


// Category navigation function
function navigateToCategory(category) {
  // Create category pages dynamically
  const categoryPages = {
    'birthday-cakes': {
      title: 'Birthday Cakes',
      description: 'Celebrate every birthday with our delicious and beautifully designed birthday cakes.',
      products: [
        { name: 'Black forest', price: '₹599', image: 'assets/images/cakephotos/cakephotosnew/blackforest.webp' },
        { name: 'white Forest', price: '₹599', image: 'assets/images/cakephotos/cakephotosnew/whiteforest.webp' },
        { name: 'Red Velvet  cake', price: '₹899', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-berry-bliss-red-velvet-cake-1-kg--400817-m.jpg' },
        { name: 'chocolate truffle', price: '₹799', image: 'https://www.fnp.com/images/pr/l/v20240909174718/velvety-chocolate-truffle-cakes-half-kg_1.jpg' },
           { name: 'butter scotch cake', price: '₹699', image: 'https://www.cakesworld.in/images/web/butterscotch_22104.jpg' },
        { name: 'kitkat cake', price: '₹799', image: 'https://punjabbakers.com/wp-content/uploads/2024/05/PUNJABS-CAKE-n-BAKE-KitKat-cake-1.jpg' },
        { name: 'Oreo cake ', price: '₹699', image: 'https://theobroma.in/cdn/shop/files/Chocolate_Oreo_Cake_2_Large_3cf0e188-a4c1-445f-ac8a-d9c368f5c5d9.jpg?v=1708327626' },
        { name: 'Rainbow cake', price: '₹699', image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/rainbow_cake_20402_16x9.jpg' },  
         { name: 'Photo cake', price: '₹999', image: 'https://www.fnp.com/images/pr/l/v20210209183911/bond-of-love-photo-cake-1-kg_1.jpg' }
        
      ]
    },
    'anniversary-cakes': {
      title: 'Anniversary Cakes',
      description: 'Celebrate your special moments with our romantic anniversary cakes.',
      products: [
        { name: 'Red Velvet Premium Cake', price: '₹999', image: 'https://pyramideats.com/cdn/shop/files/EgglessRedVelvetCake1.webp?v=1686747136' },
        { name: 'choco ferrero', price: '₹599', image: 'https://www.doorstepcake.com/wp-content/uploads/2023/08/chocolate-drip-cake-with-ferrero-rocher.jpg' },
        { name: 'caramel truffle', price: '₹599', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6CfbZtmSYv9biJ1w5PXY1ljGsmZaQuoC2Q&s' },
          { name: 'white truffle', price: '₹799', image: 'https://lekshmibakers.com/wp-content/uploads/2023/12/White-Truffle-1.webp' },
           { name: 'fererro rocher', price: '₹999', image: 'https://www.hotbreads.co.in/cdn/shop/products/ferrero-rocher-chocolate-cake_1200x1200.jpg?v=1643397214' },
           { name: 'Hazel nut Premium cake', price: '₹999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrFFOxog7gu_UrVd9tLuJhQRd1nVAlKx0qA&s' },
        { name: 'white rose cake', price: '₹999', image: 'https://www.ecakezone.com/wp-content/uploads/2017/07/white-rose-cake.jpg' },
        { name: 'Tiramisu cake', price: '₹999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTMXZO21FCs5vcOiiWeLzMlRRB7fBx5aZjw&s' },
        { name: 'spanish delight cake', price: '₹999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyt0t-OUnaF3YPXFJ3F9wJUCLzpT3oaKttPw&s' }
         
       
      ]
    },
    'wedding-cakes': {
      title: 'Wedding Cakes',
      description: 'Make your special day even more memorable with our elegant wedding cakes.',
      products: [
        
        { name: 'Premium chocolate cake', price: '₹799', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3w_r2pxWjgq5N13ZgHGqsqSKgcnx83wjJQ&s' },
        { name: 'Darkest Chocolate cake', price: '₹999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8M77UehsOemY-dD101mtRmskBbJ89mqvfw&s' },
        { name: 'white forest cake ', price: '₹1199', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcTSjy3dj0DPp-JIBr4qUmivJjJXyPn6xWQ&s' },
        { name: 'Red velvet premium ', price: '₹1499', image: 'https://static.wixstatic.com/media/e4fd7a_0e86c05ce5be447fb68d596b8f2d2884~mv2.jpg/v1/fill/w_560,h_634,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4fd7a_0e86c05ce5be447fb68d596b8f2d2884~mv2.jpg' },
        { name: 'Lotus Cake ', price: '₹1499', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3DKC9I7IIP92vhO10fH_fHbzwadJ_e8V2A&s' },
        { name: 'Pistachio Nutella', price: '₹1499', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaG7dJkCeJdSoAun0mbKVUILlJcvStJgnE1w&s' },
        { name: 'German Chocolate', price: '₹999', image: 'https://bluebowlrecipes.com/wp-content/uploads/2024/11/german-chocolate-cake-9284.jpg' },
        { name: 'Cocoa Walnut', price: '₹999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-0qTBQ1A8rFcv3dRaiOmU4Vd7JvnXSPdPfA&s' }
        
      ]
      
    },
    'kids-special': {
      title: 'Kids Special',
      description: 'Fun and colorful cakes that will make every child smile.',
      products: [
        { name: 'Barbie Girl Cake', price: '₹1399', image: 'https://cremecastle.in/cdn/shop/files/C4470_108e4ff7-b00a-46aa-8f6d-071a752c8186.jpg?v=1757072361' },
        { name: 'Kitkat Cake', price: '₹999', image: 'https://simshomekitchen.com/wp-content/uploads/2024/03/Kit-kat-cake-recipe.jpg' },
        { name: 'Oreo Cake', price: '₹999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXUL1w97OdT4P-ZQQkjIbg5yEy_zbH38VsQ&s' },
         { name: 'Choco Vanilla Cake', price: '₹899', image: 'https://storeassets.im-cdn.com/temp/bulk_operations/bakerstreetnoida/1707954151/ChocolateVanillaCake_0x0_webp.jpg' },
          { name: 'Milk Choco Cake', price: '₹899', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hotmCWSr7DR0CT-QnPCRRdYrhz1qxgF6ww&s' },
          
         { name: 'Rainbow Cake', price: '₹1599', image: 'https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/53452_fondant-rainbow-cake.jpeg' },
          { name: 'Mousse Cake', price: 'From ₹599', image: 'https://www.sugarhero.com/wp-content/uploads/2022/06/chocolate-raspberry-mousse-cake-square-1200.jpg' }
           

      ]
    },
    'premium-cakes': {
      title: 'Premium Cakes',
      description: 'Luxurious cakes made with the finest ingredients for special occasions.',
      products: [
        { name: 'Lotus biscoff cake', price: '₹999', image: 'https://eightforestlane.com/wp-content/uploads/2024/07/Vegan-Biscoff-Cake_SQ-1-500x500.jpg' },
          { name: 'Blueberry mousse Cake', price: '₹999', image: 'https://hips.hearstapps.com/hmg-prod/images/lemon-blueberry-mousse-cake2-1653426492.jpg?crop=0.952280701754386xw:1xh;center,top&resize=1200:*' },
            { name: 'Purple vannila mousse Cake', price: '₹999', image: 'https://i.pinimg.com/736x/c1/90/5a/c1905adbde328ff5e639c108e2d3f8c7.jpg' },
              { name: 'Belgium chocolate', price: '₹999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6sm9jRo0iGzP8iDr_sSoQlbjvcJ7uYM_Iw&s' },
                { name: 'Hazelnut Truffle', price: '₹999', image: 'https://cdn.uengage.io/uploads/49846/image-2IW0X4-1721726438.jpg' },
                  { name: 'Nutella Cake', price: '₹999', image: 'https://gurgaonbakers.com/wp-content/uploads/2020/11/nutella-hazelnut-cake.jpg' },
                    { name: 'Mint opera Cake', price: '₹999', image: 'https://t4.ftcdn.net/jpg/15/41/28/49/360_F_1541284931_hAaczfXYBhyZ8Vdg44Cc2gar15XVMOni.jpg' },
                      { name: 'diary choco Cake', price: '₹999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgkb1gn7J_v8XGDStEb8VI7hS1euvJRw9HRw&s' },
                        { name: 'Red 25 Cake', price: '₹1299', image: 'https://assets.giftalove.com/resources/common/giftimages/largeimage/tempting-red-velvet-cake.jpg' }
                          
      ]
    },
    'eggless-sugarless': {
      title: 'Eggless & Sugarless',
      description: 'Healthy and delicious cakes for those with dietary restrictions.',
      products: [
        { name: 'Eggless black forest Cake', price: '₹999', image: 'https://bakewithshivesh.com/wp-content/uploads/2021/05/IMG_9389-scaled.jpg' },
        { name: 'Eggless butterscotch Cake', price: '₹999', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVqPRJH0OVCod4h3mNOwp7Gblrnbf8_BH7A&s' },
        { name: ' sugarless dry fruit Cake', price: '₹999', image: 'https://assets.winni.in/product/primary/2023/5/84846.jpeg?dpr=2&w=220' },
         { name: 'Eggless  Red Velvet  Cake', price: '₹999', image: 'https://theobroma.in/cdn/shop/files/RedVelvetCakehalfkg_341891f8-fc0d-431e-b574-98c3764c4e74.jpg?v=1711125810' },
        { name: 'Eggless choco truffle Cake', price: '₹999', image: 'https://static.wixstatic.com/media/ca0f79_792c8f7236ce48d7b0b70a8abd94f64a~mv2.jpg/v1/crop/x_3,y_0,w_5994,h_4000/fill/w_280,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2232_F.jpg' }
       
      ]
    },
   
  };

  const categoryData = categoryPages[category];
  if (categoryData) {
    createCategoryPage(categoryData);
  }
}

// Create category page dynamically
function createCategoryPage(categoryData) {
  const overlay = document.createElement('div');
  overlay.className = 'category-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;

  const categoryPage = document.createElement('div');
  categoryPage.className = 'category-page';
  categoryPage.style.cssText = `
    background: white;
    border-radius: 20px;
    padding: 40px;
    max-width: 1000px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
  `;

  categoryPage.innerHTML = `
    <button class="close-btn" style="
      position: absolute;
      top: 20px;
      right: 20px;
      background: #D20000;
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    ">&times;</button>
    
    <h2 style="
      font-family: 'Marck Script', cursive;
      font-size: 48px;
      color: #D20000;
      margin-bottom: 20px;
      text-align: center;
    ">${categoryData.title}</h2>
    
    <p style="
      font-family: 'Istok Web', sans-serif;
      font-size: 18px;
      color: #666;
      text-align: center;
      margin-bottom: 40px;
      line-height: 1.6;
    ">${categoryData.description}</p>
    
    <div class="products-grid" style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
    ">
      ${categoryData.products.map(product => `
        <div class="product-card" style="
          background: white;
          border-radius: 15px;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          text-align: center;
          transition: transform 0.3s ease;
        ">
          <img src="${product.image}" alt="${product.name}" style="
            width: 100%;
            height: 200px;
            object-fit: cover;
          ">
          <div style="padding: 20px;">
            <h3 style="
              font-family: 'Questrial', sans-serif;
              font-size: 18px;
              color: #333;
              margin-bottom: 10px;
            ">${product.name}</h3>
            <p style="
              font-family: 'Questrial', sans-serif;
              font-size: 16px;
              color: #D20000;
              font-weight: bold;
              margin-bottom: 15px;
            ">${product.price}</p>
            <button onclick="orderProduct('${product.name}')" style="
              background: #D20000;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 20px;
              font-family: 'Questrial', sans-serif;
              font-size: 14px;
              cursor: pointer;
              transition: background 0.3s ease;
            ">Order Now</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  overlay.appendChild(categoryPage);
  document.body.appendChild(overlay);

  const closeBtn = categoryPage.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });

  const productCards = categoryPage.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
}
// ✅ WhatsApp Order Integration (fixed)
function orderProduct(productName) {
  const phoneNumber = "917034914444"; // ✅ WhatsApp number (no +, no spaces)
  const message = `Hello, I would like to order: ${productName}. Please share more details.`;  
  const encodedMessage = encodeURIComponent(message); // encode spaces & special chars
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(url, "_blank"); // open WhatsApp chat
}

document.addEventListener("DOMContentLoaded", function () {
  const readMoreLinks = document.querySelectorAll(".read-more");

  readMoreLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // find the closest news card container then locate the short/full text inside it
      const card = this.closest(".news-card");
      if (!card) return; // safety

      const shortText = card.querySelector(".short-text");
      const fullText = card.querySelector(".full-text");

      // if elements aren't found, bail out
      if (!shortText || !fullText) return;

      // handle toggling (cover both '' and 'none' initial states)
      if (fullText.style.display === "none" || fullText.style.display === "") {
        fullText.style.display = "inline";
        shortText.style.display = "none";
        this.textContent = "Read Less";
      } else {
        fullText.style.display = "none";
        shortText.style.display = "inline";
        this.textContent = "Read More";
      }
    });
  });
});
function toggleViewMore() {
  const container = document.getElementById('productContainer');
  const btn = document.getElementById('viewMoreBtn');
  const btnText = document.getElementById('btnText');
  const btnIcon = document.getElementById('btnIcon');
  
  if (container.classList.contains('collapsed')) {
    // Expand
    container.classList.remove('collapsed');
    container.classList.add('expanding');
    btnText.textContent = 'Show Less';
    btn.classList.add('expanded');
    
    // Remove expanding class after animation
    setTimeout(() => {
      container.classList.remove('expanding');
    }, 600);
  } else {
    // Collapse
    container.classList.add('collapsed');
    container.classList.remove('expanding');
    btnText.textContent = 'View more';
    btn.classList.remove('expanded');
    
    // Smooth scroll to products section
    document.getElementById('products').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Update your existing setActive function to reset view more when filter changes
function setActive(element) {
  const links = document.querySelectorAll(".link-menu");
  links.forEach((link) => link.classList.remove("active"));
  element.classList.add("active");
  
  // Reset to collapsed view when filter changes
  setTimeout(() => {
    const container = document.getElementById('productContainer');
    const btn = document.getElementById('viewMoreBtn');
    const btnText = document.getElementById('btnText');
    
    if (!container.classList.contains('collapsed')) {
      container.classList.add('collapsed');
      container.classList.remove('expanding');
      btnText.textContent = 'View more';
      btn.classList.remove('expanded');
    }
  }, 300);
}