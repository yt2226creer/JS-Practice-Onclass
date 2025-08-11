const x = 10;
const y = 25;

//1
if(x > y){
    console.log(true);
}

//2
if(x < y){
    console.log(true);
}

//3
if(x >= y){
    console.log(true);
}

//4
if(x <= y){
    console.log(true);
}



const value = 7;

const message = value > 5
  ? "5より大きいので true の処理を実行します。"
  : value < 5
    ? "5より小さいので false の処理を実行します。"
    : "値はちょうど5です。";
console.log(message);
