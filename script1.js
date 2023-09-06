// Fungsi untuk mengaktifkan mode gelap
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  // Simpan preferensi mode pada localStorage
  localStorage.setItem("mode", "dark");
}

// Fungsi untuk mengaktifkan mode terang
function enableLightMode() {
  document.body.classList.remove("dark-mode");
  // Simpan preferensi mode pada localStorage
  localStorage.setItem("mode", "light");
}

// Fungsi untuk memeriksa preferensi mode yang tersimpan di localStorage
function checkModePreference() {
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

// Event listener untuk tombol mode gelap
document.getElementById("dark-mode-button").addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

// Panggil fungsi checkModePreference saat halaman dimuat
document.addEventListener("DOMContentLoaded", checkModePreference);
