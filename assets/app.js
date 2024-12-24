let currentStep = 1;
let metamaskCount = null;
let twitterCount = null;
let telegramCount = null;

let nextButton = document.querySelector(".next");
nextButton.addEventListener("click", goNext);

let backButton = document.querySelector(".back");
backButton.addEventListener("click", goBack);

function goNext() {
  const inputElement = document.querySelector(`#step-${currentStep} .input`);
  const inputValue = inputElement ? inputElement.value.trim() : null;

  if (currentStep === 1) {
    metamaskCount = parseInt(inputValue) || 0;
  } else if (currentStep === 2) {
    twitterCount = parseInt(inputValue) || 0;
  } else if (currentStep === 3) {
    telegramCount = parseInt(inputValue) || 0;
  }

  if (currentStep < 5) {
    document.getElementById("step-" + currentStep).style.display = "none";

    currentStep++;

    if (currentStep === 4) {
      document.querySelector(".container4").style.display = "none";
      document.querySelector(".text1").style.display = "none";
      document.querySelector(".butonback").style.display = "none";
      document.querySelector(".butonnext").style.display = "none";
      document.querySelector(".stats-container").style.display = "none";

      document.querySelectorAll(".stat-title2")[0].textContent = metamaskCount;
      document.querySelectorAll(".stat-title2")[1].textContent = twitterCount;
      document.querySelectorAll(".stat-title2")[2].textContent = telegramCount;
    }

    document.getElementById("step-" + currentStep).style.display = "block";

    if (currentStep > 1 && currentStep < 4) {
      document.querySelector(".butonback").style.display = "inline-block";
    }
  }
}

function goBack() {
  if (currentStep > 1) {
    document.getElementById("step-" + currentStep).style.display = "none";

    currentStep--;

    document.getElementById("step-" + currentStep).style.display = "block";

    if (currentStep === 1) {
      document.querySelector(".butonback").style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("step-2").style.display = "none";
  document.getElementById("step-3").style.display = "none";
  document.getElementById("step-4").style.display = "none";
  document.getElementById("step-5").style.display = "none";
});

document.querySelector(".next").addEventListener("click", () => {
  console.log("Metamask Count:", metamaskCount);
  console.log("Twitter Count:", twitterCount);
  console.log("Telegram Count:", telegramCount);
});

let joinButton = document.querySelector(".join");
joinButton.addEventListener("click", goToStep5);

function goToStep5() {
  const totalMetamask =
    parseInt(document.querySelectorAll(".stat_deger")[0].textContent) || 0;
  const totalTwitter =
    parseInt(document.querySelectorAll(".stat_deger")[1].textContent) || 0;
  const totalTelegram =
    parseInt(document.querySelectorAll(".stat_deger")[2].textContent) || 0;

  let uniqueUsers =
    parseInt(document.querySelector(".deger_uniq").textContent) || 0;
  uniqueUsers++;

  document.querySelectorAll(".stat-title3")[0].textContent =
    totalMetamask + (metamaskCount || 0);
  document.querySelectorAll(".stat-title3")[1].textContent =
    totalTwitter + (twitterCount || 0);
  document.querySelectorAll(".stat-title3")[2].textContent =
    totalTelegram + (telegramCount || 0);

  document.querySelector(".deger_uniq").textContent = uniqueUsers;

  document.querySelector(".top").style.display = "none";
  document.querySelector(".bot").style.display = "none";
  document.getElementById("step-4").style.display = "none";

  document.getElementById("step-5").style.display = "block";

  document.querySelector(".top").style.display = "none";
  document.querySelector(".bot").style.display = "none";
  document.getElementById("step-4").style.display = "none";

  document.getElementById("step-5").style.display = "block";
  document.querySelector(".email").value = "";
}
