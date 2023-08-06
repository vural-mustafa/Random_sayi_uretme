document.getElementById("generateButton").addEventListener("click", generateRandomNumber);

function generateRandomNumber() {
  var min = parseInt(document.getElementById("minNumber").value);
  var max = parseInt(document.getElementById("maxNumber").value);

  if (isNaN(min) || isNaN(max)) {
    alert("Geçerli bir sayı girmediniz.");
    return;
  }

  if (min >= max) {
    alert("Minimum sayı maksimum sayıdan büyük veya eşit olmalıdır.");
    return;
  }

  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("result").innerHTML = "Üretilen rastgele sayı: " + randomNumber;
}
