var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.random() * 100 + 1
 itemPrice = Math.floor(itemPrice)
 cart.push(new Object({[item]: itemPrice})) 
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  }
    else{
    var cartStatement = 'In your cart, you have ' 
    var cartArray
    for (var i=0; i < cart.length; i++){
      if (cart.length-1 === 0){
      cartArray = Object.keys(cart[i])
      cartStatement = cartStatement + `${cartArray[0]} at $${cart[i][cartArray[0]]}.` 
      console.log(cartStatement)
    }
    else if (cart.length === 2){
      
    }
      else if (i === cart.length - 1){
      cartArray = Object.keys(cart[i])
      cartStatement = cartStatement.slice(0,-2) + ` and ${cartArray[0]} at $${cart[i][cartArray[0]]}.`
      console.log(cartStatement)
     }    
     else{
       cartArray = Object.keys(cart[i])
       cartStatement = cartStatement +`${cartArray[0]} at $${cart[i][cartArray[0]]}, ` 
    }
  }
  }
  console.log(cartStatement)
}

function total() {
  var totalValue = 0
  for (var i = 0; i < cart.length; i++){
    var cartArray = Object.keys(cart[i])
    totalValue = totalValue + cart[i][cartArray[0]]
  }
  return totalValue
}

function removeFromCart(item) {
  var tempCartLength = cart.length
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item) === true){
      cart = [...cart.slice(0, i), ...cart.slice(i+1)]
      return cart
    }
  }
  if (tempCartLength === cart.length){
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}`)
  cart = [];
}
