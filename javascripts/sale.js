const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

const products = [
  {id : 1, name : "オリジナルブレンド200g", price : 500},
  {id : 2, name : "オリジナルブレンド500g", price : 900},
  {id : 3, name : "スペシャルブレンド200g", price : 700},
  {id : 4, name : "スペシャルブレンド500g", price : 1200}
];

function add() {
  const productId = products.findIndex(priceElement);
  const price = parseInt(products[productId].price);
  const number = parseInt(numberElement.value);
  const name = products[productId].name
  let purchase = {
    name: name,
    price: price,
    number: number,
  };
  purchases.push(purchase);
  console.log(purchases);
}

function calc() {
  let sum = 0;
  let postage;
  for(let index = 0; index < purchases.length; index++) {
    sum += purchases[index].price * purchases[index].number;
  }

  if (sum == 0 || sum >= 3000) {
    postage = 0
  } else if (sum < 2000){
    postage = 500
  } else {
    postage = 250
  }

  window.alert(`送料は${postage}です。合計は${sum}円です`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}

