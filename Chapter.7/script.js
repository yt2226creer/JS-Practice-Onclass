//①
const first = 20;
const second = 40;

if(first && second){
    console.log(true);
}else{
    console.log(false);
}

//②
if(first || second){
    console.log(first + second);
}else{
    console.log(false);
}

//3
const AA = 35;
const BB = 50;
if(!(AA===BB)){
    console.log("AAとBBは等しくありません");
}else{
    console.log("AAとBBは等しいです！");
} 