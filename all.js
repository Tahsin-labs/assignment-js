let heartCount = 0;
let coinCount = 100;   
let copyCount = 0;

    // my dOM elements......
const heartBox = document.querySelector(".navbar-right .icon-box:first-child"); 
const coinBox = document.querySelector(".navbar-right .icon-box:nth-child(2)");
const copyBtnNavbar = document.querySelector(".btn-copy");
const historyContainer = document.querySelector(".sidebar");
const clearBtn = document.querySelector(".clear-btn");

//         my heart function..... 
document.querySelectorAll(".card-header span").forEach(heart => {
  heart.addEventListener("click", () => {
    heartCount++;
    heartBox.innerHTML = heartCount + ' <img class="img" src="assets/heart.png">';
  });
});

//              my  Call functionality....... 

document.querySelectorAll(".btn-green").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const serviceName = card.querySelector("h3").innerText;
    const serviceNumber = card.querySelector(".number").innerText;

    //          coin balance.....

    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    //             Deduct coins......

    coinCount -= 20;
    coinBox.innerHTML = coinCount + ' <img class="img" src="assets/coin.png">';

    //                    Alert the call............

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    //       Add Call History........

    const currentTime = new Date().toLocaleTimeString();
    const historyItem = document.createElement("div");
    historyItem.classList.add("history-item");

    historyItem.innerHTML = `
      <div>
        <p>${serviceName}</p>
        <span>${serviceNumber}</span>
      </div>
      <div>
        <span>${currentTime}</span>
      </div>
    `;

    historyContainer.appendChild(historyItem);
  });
});

//      Copy Functionality............... 

document.querySelectorAll(".btn-light").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const number = card.querySelector(".number").innerText;

    // Copy the clipboard.................

    navigator.clipboard.writeText(number).then(() => {
      copyCount++;
      alert(`Copied: ${number}`);
      copyBtnNavbar.innerText = copyCount + " Copy";
    });
  });
});

//  Clear History .................

clearBtn.addEventListener("click", () => {
  
  document.querySelectorAll(".history-item").forEach(item => item.remove());
});

