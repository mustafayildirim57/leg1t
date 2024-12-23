let currentStep = 1;
let metamaskCount = null;
let twitterCount = null;
let telegramCount = null;

// "Next" butonuna tıklama olayı
let nextButton = document.querySelector(".next");
nextButton.addEventListener("click", goNext);

// "Back" butonuna tıklama olayı
let backButton = document.querySelector(".back");
backButton.addEventListener("click", goBack);

function goNext() {
  const inputElement = document.querySelector(`#step-${currentStep} .input`);
  const inputValue = inputElement ? inputElement.value.trim() : null;

  // Input değerini ilgili değişkene kaydet
  if (currentStep === 1) {
    metamaskCount = parseInt(inputValue) || 0;
  } else if (currentStep === 2) {
    twitterCount = parseInt(inputValue) || 0;
  } else if (currentStep === 3) {
    telegramCount = parseInt(inputValue) || 0;
  }

  if (currentStep < 5) {
    // Mevcut adımı gizle
    document.getElementById("step-" + currentStep).style.display = "none";

    // Adımı artır
    currentStep++;

    // Eğer step 4'e geçiliyorsa özel işlemler
    if (currentStep === 4) {
      // Back, Next butonlarını ve stats-container'ı gizle
      document.querySelector(".container4").style.display = "none";
      document.querySelector(".text1").style.display = "none";
      document.querySelector(".butonback").style.display = "none";
      document.querySelector(".butonnext").style.display = "none";
      document.querySelector(".stats-container").style.display = "none";

      // Step 4'teki sayıları güncelle
      document.querySelectorAll(".stat-title2")[0].textContent = metamaskCount;
      document.querySelectorAll(".stat-title2")[1].textContent = twitterCount;
      document.querySelectorAll(".stat-title2")[2].textContent = telegramCount;
    }

    // Sonraki adımı göster
    document.getElementById("step-" + currentStep).style.display = "block";

    // "Back" butonunu görünür hale getir (1'den farklı adımlarda)
    if (currentStep > 1 && currentStep < 4) {
      document.querySelector(".butonback").style.display = "inline-block";
    }
  }
}

function goBack() {
  if (currentStep > 1) {
    // Mevcut adımı gizle
    document.getElementById("step-" + currentStep).style.display = "none";

    // Adımı azalt
    currentStep--;

    // Önceki adımı göster
    document.getElementById("step-" + currentStep).style.display = "block";

    // Eğer ilk adıma dönülürse, "Back" butonunu gizle
    if (currentStep === 1) {
      document.querySelector(".butonback").style.display = "none";
    }
  }
}

// Sayfa yüklendikten sonra sadece ilk adımı göster
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("step-2").style.display = "none";
  document.getElementById("step-3").style.display = "none";
  document.getElementById("step-4").style.display = "none";
  document.getElementById("step-5").style.display = "none";
});

// Değerleri kontrol için yazdırma (isteğe bağlı)
document.querySelector(".next").addEventListener("click", () => {
  console.log("Metamask Count:", metamaskCount);
  console.log("Twitter Count:", twitterCount);
  console.log("Telegram Count:", telegramCount);
});

// "Join" butonuna tıklama olayı
let joinButton = document.querySelector(".join");
joinButton.addEventListener("click", goToStep5);

function goToStep5() {
  // Metamask, Twitter ve Telegram değerlerini al
  const totalMetamask =
    parseInt(document.querySelectorAll(".stat_deger")[0].textContent) || 0;
  const totalTwitter =
    parseInt(document.querySelectorAll(".stat_deger")[1].textContent) || 0;
  const totalTelegram =
    parseInt(document.querySelectorAll(".stat_deger")[2].textContent) || 0;

  // Unique Users değerini al ve bir artır
  let uniqueUsers =
    parseInt(document.querySelector(".deger_uniq").textContent) || 0;
  uniqueUsers++;

  // Toplamları stat-title3 elementlerine yaz
  document.querySelectorAll(".stat-title3")[0].textContent =
    totalMetamask + (metamaskCount || 0);
  document.querySelectorAll(".stat-title3")[1].textContent =
    totalTwitter + (twitterCount || 0);
  document.querySelectorAll(".stat-title3")[2].textContent =
    totalTelegram + (telegramCount || 0);

  // Unique Users güncelle
  document.querySelector(".deger_uniq").textContent = uniqueUsers;

  // Step 4'ü gizle
  document.querySelector(".top").style.display = "none";
  document.querySelector(".bot").style.display = "none";
  document.getElementById("step-4").style.display = "none";

  // Step 5'i göster
  document.getElementById("step-5").style.display = "block";

  // Step 4'teki input alanını temizle (isteğe bağlı)
  document.querySelector(".email").value = "";

  document.querySelector(".top").style.display = "none";
  document.querySelector(".bot").style.display = "none";
  // Step 4'ü gizle
  document.getElementById("step-4").style.display = "none";

  // Step 5'i göster
  document.getElementById("step-5").style.display = "block";

  // Step 4'teki input alanını temizle (isteğe bağlı)
  document.querySelector(".email").value = "";
}
