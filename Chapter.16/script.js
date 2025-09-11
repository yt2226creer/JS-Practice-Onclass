const wrapper = document.getElementById("wrapper")

const newBox = `<div class="new-box">new-box要素</div>`

setTimeout(function () {
 // wrapper要素内先頭にnewBoxに代⼊されたHTML要素を挿⼊

 wrapper.insertAdjacentHTML("afterbegin", newBox)

}, 3000);

setTimeout(function () {
 // wrapper要素内先頭にnewBoxに代⼊されたHTML要素を挿⼊
 wrapper.insertAdjacentHTML("afterbegin", newBox)
 // wrapper要素の直後にnewBoxに代⼊されたHTML要素を挿⼊
 wrapper.insertAdjacentHTML("afterend", newBox)
}, 3000);
