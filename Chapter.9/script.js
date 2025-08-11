var boolean = true;
//var resultText = "";
//if (boolean) {
 //resultText = "Aの処理"
//} else {
 //resultText = "Bの処理"
//};
const resultText = boolean ? "A" : "B";
console.log(resultText);


//1
const AA = false;
if (AA) {
  console.log("true");
} else {
  console.log("false");

//3項
const flag = true;

const message = flag ? "true" : "false";
console.log(message);


}
//2

const value = 7; 

if (value > 5) {
  console.log("true");
} else if (value < 5) {
  console.log("false");
} else {
  console.log("値はちょうど5です。");
}

//3項
const value = 7;

const message = value > 5
  ? "5より大きいので true の処理を実行します。"
  : value < 5
    ? "5より小さいので false の処理を実行します。"
    : "値はちょうど5です。";
console.log(message);


//3

const value = 3;

if (value < 5) {
  console.log("5より小さいので true の処理を実行します。");
} else {
  console.log("5未満ではないので false の処理を実行します。");
}
const value = 3;

const message = value < 5
  ? "5より小さいので true の処理を実行します。"
  : "5未満ではないので false の処理を実行します。";
console.log(message);

//3項



//4
const value = 12;

if (value >= 10) {
  console.log("10以上なので true の処理を実行します。");
} else {
  console.log("10未満なので false の処理を実行します。");
}
//3項
const value = 12;

const message = value >= 10
  ? "10以上なので true の処理を実行します。"
  : "10未満なので false の処理を実行します。";
console.log(message);


//5
const input = "テキストあり"; // または "", null, undefined を試してみてください

if (input) {
  console.log("値が存在するので true の処理を実行します。");
} else {
  console.log("値が存在しないので false の処理を実行します。");
}
//3項

const input = "テキストあり"; // または "", null, undefined などを試す

const message = input
  ? "値が存在するので true の処理を実行します。"
  : "値が存在しないので false の処理を実行します。";
console.log(message);