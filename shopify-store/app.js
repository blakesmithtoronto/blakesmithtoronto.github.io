const ShopifyBuy = window.ShopifyBuy;
let quantity = 0;

const client = ShopifyBuy.buildClient({
  domain: "my-example-store-22.myshopify.com",
  storefrontAccessToken: "3c435c311f489fbe1e35c7abcb15d0e7",
});
setProductImage();

async function setProductImage() {
  //set product image
  const products = await client.product.fetchAll();
  let imageTag = document.getElementById("product-img");
  imageTag.src = products[0].images[0].src;
}

//imageTag.src=products[0].images[]

//console.log(client);
client.product.fetchAll();

function increaseQuantity() {
  quantity++;
  let ele = document.getElementById("quantity");
  ele.innerText = quantity;
}
function decreaseQuantity() {
  if (quantity > 0) {
    quantity--;
  }
  let ele = document.getElementById("quantity");
  ele.innerText = quantity;
}

async function checkoutFunc() {
  const checkout = await client.checkout.create();
  const products = await client.product.fetchAll();
  console.log("products ", products);
  const lineItemsToAdd = [
    {
      variantId: products[0].variants[0].id,
      quantity: quantity,
    },
  ];
  console.log(checkout.id);
  console.log(lineItemsToAdd);
  newCart = await client.checkout.addLineItems(checkout.id, lineItemsToAdd);

  console.log("after", newCart);
}
