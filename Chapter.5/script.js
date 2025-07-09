let first = 12;
if(first <= 10){
 console.log(true);
} else {
    //1.ここで処理をいれてしまうと意図しないところでelse文が使われていると認識される//
 console.log("数値が低いよ！");
}

const second = "Java";
if(second === "JavaScript"){
    console.log(true);
}else{
    console.log("名称が違うよ！");
}