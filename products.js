 const Products=[
   {
    
    image:"pictures/f1.jpg",
    brand:"adidas",
    name:"Cartoon Astronaut T-shirt",
    ratings:45,
    priceCents:1654
   },
   {
    boxcolor:"#52bc87ff",
    boxrate:"Best sell",
    image:"pictures/f2.jpg",
    brand:"adidas",
    name:"Retro Sports T-shirt",
    ratings:40,
    priceCents:3377
   },
   {
    // boxcolor:"rgba(32, 163, 71, 1)",
      boxrate:"Sale",
    image:"pictures/f3.jpg",
    brand:"adidas",
    name:"Gym Flex Muscle T-shirt",
    ratings:40,
    priceCents:2199

   } ,
   {
    // boxcolor:"rgba(209, 96, 55, 1)",
    // boxrate:"Sale",
    image:"pictures/f4.jpg",
    brand:"adidas",
    name:"Active Lifestyle T-shirt",
    ratings:35,
    priceCents:4335
   },
   {
    //  boxcolor:"rgb(226, 87, 110)",
    // boxrate:"sell",
   image:"pictures/f5.jpg",
    brand:"adidas",
    name:"Team spirit T-shirts",
    ratings:35,
    priceCents:3845
   }
   ,{
     boxcolor:"rgb(226, 87, 110)",
     boxrate:"sell",
   image:"pictures/f6.jpg",
    brand:"adidas",
    name:"Good vibes Only T-shirt",
    ratings:50,
    priceCents:7645
   },
    {
      //  boxcolor:"rgb(226, 87, 110)",
    // boxrate:"sell",
    image:"pictures/f7.jpg",
    brand:"adidas",
    name:"Customizable Trouser",
    ratings:30,
    priceCents:2915
   }
   ,{
     boxcolor:"rgb(226, 87, 110)",
    boxrate:"sell",
      image:"pictures/f8.jpg",
    brand:"adidas",
    name:"Cosmic Galazy Skirt",
    ratings:45,
    priceCents:4175
   }
  
 ]



  


  let alltogether='';
  Products.forEach((product)=>{
   alltogether+=
    `
    
    <div id="item1">
        <div id="img-box">
        <img src="${product.image}" alt="" id="img">
      
         </div>
        <div id="product-description">
        <span>${product.brand}</span>
        <h5>${product.name}</h2>
        <img src="pictures/ratings/rating-${product.ratings}.png" alt="" id="ratings">
        <h3 id="price">$${(product.priceCents/100).toFixed(2)}</h3>
        <img src="pictures/icons/image.png" alt="" id="cart-icon">
    </div>
    </div>
   
     `
    
})

const allproducts=document.getElementById('all-products').innerHTML=alltogether;






















//for the pagination//

const items = document.querySelectorAll('.product');
const perPage = 8;
const totalPages = 2; // only 2 pages for now
let currentPage = 1;
function showPage(page) {
  currentPage = page;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  items.forEach((product, index) => {
    if (index >= start && index < end) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }
  });
  // Update active button
  document.querySelectorAll('#pagination button').forEach(btn => btn.classList.remove('active'));
  const pageBtn = document.getElementById(`page${page}`);
  if (pageBtn) pageBtn.classList.add('active');
}
function nextPage() {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
}
// Initialize first page
showPage(1);
// showPage(2);