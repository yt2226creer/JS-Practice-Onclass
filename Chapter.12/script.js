//1.
//const  printAlert = () => {
    //alert("印刷ができません")
//};
//printAlert();

//2.
const iphoneValue = (firstPrice) =>{
    if(firstPrice === 129800){
     return firstPrice * 0.9;
     }
    return firstPrice ;
};

console.log(iphoneValue(129800));
console.log(iphoneValue(100000));

//3.
スコープとは様々な関数を一つの案件ごとに設けるとき、なんでもグローバルな変数で宣言してしまうと、
意図しないところで変数名が干渉してしまったりするので、そのような事態を防ぐための決まりである。