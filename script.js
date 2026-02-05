const waNumber = "6285780232317";

function getWaMessage() {
  const hour = new Date().getHours();
  let greeting = "Halo";

  if (hour >= 5 && hour < 11) greeting = "Selamat pagi";
  else if (hour >= 11 && hour < 15) greeting = "Selamat siang";
  else if (hour >= 15 && hour < 18) greeting = "Selamat sore";
  else greeting = "Selamat malam";

  return `${greeting} Amiga Consulting.

Saya tertarik menggunakan layanan Back Office as a Service dari Amiga.

Boleh minta informasi lebih lanjut mengenai layanan yang tersedia?

Terima kasih.`;
}

document.addEventListener("DOMContentLoaded", function () {
  const waBtn = document.getElementById("waBtn");

  waBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const message = encodeURIComponent(getWaMessage());
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  });



  
});