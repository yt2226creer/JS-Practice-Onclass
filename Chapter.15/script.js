//1.
//プロパティーとメソッドの違いとしては、プロパティーはkeyとvalueで構成されるのに対して、メソッドはvalueに関数をいれて仕組み化したものである。
//例
//2.
function fruit(name, price) {
 const result = name + "の値段は" +  price + "円です。"
 return result ;
};
console.log(fruit("リンゴ", "210"));



function addTax(price, func) {
  const taxPrice = Math.round(price * 1.10);
  func(taxPrice);
}

//トマトの値段
addTax(200, function(taxPrice) {
  console.log("トマトの値段は税込み" + taxPrice + "円");
});

// ②玉ねぎの値段
addTax(150, function(taxPrice) {
  console.log("玉ねぎの値段は税込み" + taxPrice + "円");
});