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
const servise_name_eng = document.getElementsByClassName("title_name_eng");
const servise_name_ban = document.getElementsByClassName("card-title");
const hotline_number = document.getElementsByClassName("hot_line_number");
let coin_number = document.getElementById("coin_number");
const call_list = document.getElementById("call_list");

for (let j = 0; j < colling_btn.length; j++) {
  colling_btn[j].addEventListener("click", function () {
    let INTcoin_number = parseInt(coin_number.innerText);

    if (INTcoin_number > 0) {
      alert(
        "Calling " +
          servise_name_eng[j].innerText +
          " " +
          hotline_number[j].innerText +
          "..."
      );
      INTcoin_number = INTcoin_number - 20;
      coin_number.innerText = INTcoin_number;

      const newdiv = document.createElement("div");
      newdiv.className =
        "newdiv flex justify-between items-center my-3 bg-gray-100 p-3 rounded-xl";

      const newdiv2 = document.createElement("div");
      newdiv2.className = "divleft";

      const newdiv3 = document.createElement("div");
      newdiv3.className = "divright";
      newdiv3.textContent = "time";

      const newdiv2_1 = document.createElement("div");
      newdiv2_1.className = "divtop font-semibold";
      newdiv2_1.textContent = servise_name_ban[j].innerText;

      const newdiv2_2 = document.createElement("div");
      newdiv2_2.classList = "divbullom text-xl";
      newdiv2_2.textContent = hotline_number[j].innerText;

      newdiv2.appendChild(newdiv2_1);
      newdiv2.appendChild(newdiv2_2);

      newdiv.appendChild(newdiv2);
      newdiv.appendChild(newdiv3);

      call_list.appendChild(newdiv);
    } else {
      alert("❌আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ টি কয়েন লাগবে ।");
    }
  });
}

//clear button funcation
document.getElementById("clear_btn").addEventListener("click", function () {
  call_list.innerHTML = " ";
});
