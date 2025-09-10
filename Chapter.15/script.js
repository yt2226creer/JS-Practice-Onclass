//1.
//プロパティーとメソッドの違いとしては、プロパティーはkeyとvalueで構成されるのに対して、メソッドはvalueに関数をいれて仕組み化したものである。
//例
//2.
function fruit(name, price) {
 const result = name + "の値段は" + price + "円です。"
 return result;
};
fruit("リンゴ", "210");