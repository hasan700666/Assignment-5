// heart counter
const elements = document.getElementsByClassName("fa-heart");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    const heart_number = document.getElementById("hart_icon_number");
    heart_number.innerText = parseInt(heart_number.innerText) + 1;
  });
}

// call funcation
const colling_btn = document.getElementsByClassName("btn-primary");
const servise_name = document.getElementsByClassName("title_name_eng");
const hotline_number = document.getElementsByClassName("hot_line_number");
let coin_number = document.getElementById("coin_number");
const call_list = document.getElementById("call_list");

for (let j = 0; j < colling_btn.length; j++) {
  colling_btn[j].addEventListener("click", function () {
    let INTcoin_number = parseInt(coin_number.innerText);

    if (INTcoin_number > 0) {
      alert(
        "Calling " +
          servise_name[j].innerText +
          " " +
          hotline_number[j].innerText +
          "..."
      );
      INTcoin_number = INTcoin_number - 20;
      coin_number.innerText = INTcoin_number;
      let newdiv = document.createElement("div");
      newdiv.className = "newdiv";
      call_list.appendChild(newdiv);

      document.getElementsByClassName("newdiv").appendChild(newdiv2_1);
      document.getElementsByClassName("newdiv").appendChild(newdiv2_2);
    } else {
      alert("❌আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ টি কয়েন লাগবে ।");
    }
  });
}
