var total = Number(document.getElementById("total").innerText);

// add item

var plusBtns = document.querySelectorAll(".plus");
for (let btn of plusBtns) {
  btn.addEventListener("click", function () {
    let price = Number(
      document.getElementById(btn.getAttribute("name") + "_price").innerHTML
    );
    let qty = Number(
      document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
    );
    qty++;
    total += price;
    document.getElementById("total").innerText = total;
    document.getElementById(btn.getAttribute("name") + "_qty").innerHTML = qty;
  });
}
// minus

var minusBtns = document.querySelectorAll(".minus");
console.log(minusBtns)
for (let btn of minusBtns) {
  btn.addEventListener("click", function () {
    let price = Number(
      document.getElementById(btn.getAttribute("name") + "_price").innerHTML
    ); console.log(price)
    let qty = Number(
      document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
    );
    if (qty > 0) {
      qty--;
      total -= price;
    } else alert("Not Possible");
    document.getElementById("total").innerText = total;
    document.getElementById(btn.getAttribute("name") + "_qty").innerHTML = qty;
  });
}

// delete

let deleteBtns = document.querySelectorAll(".delete");
for (let btn of deleteBtns) {
  btn.addEventListener("click", function () {
    // btn.parentNode.remove();
    let price = Number(
      document.getElementById(btn.getAttribute("name") + "_price").innerHTML
    );
    let qty = Number(
      document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
    );
    total -= price * qty;
    console.log(total);
    document.getElementById(btn.getAttribute("name")).remove();
    document.getElementById("total").innerText = total;
  });
}
// like
let heart = document.querySelectorAll(".fa-heart");
for (let like of heart) {
  like.addEventListener("click", function () {
    document.getElementById(like.getAttribute("name") + "_like").style.color =
      "red";
  });
}
