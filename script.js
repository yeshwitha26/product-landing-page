const products=[
{
name:"Stylish Watch",
price:999,
image:"https://picsum.photos/300/200?1"
},
{
name:"Headphones",
price:1499,
image:"https://picsum.photos/300/200?2"
},
{
name:"Shoes",
price:1999,
image:"https://picsum.photos/300/200?3"
},
{
name:"Backpack",
price:1299,
image:"https://picsum.photos/300/200?4"
}
];

let cart=0;

const productContainer=document.getElementById("products");

products.forEach((item)=>{
productContainer.innerHTML+=`
<div class="card">
<img src="${item.image}">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="addToCart()">Add to Cart</button>
</div>
`;
});

function addToCart(){
cart++;
document.getElementById("cartCount").innerText=cart;
}
