// Menü öffnen / schließen
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

// Klick auf Menüpunkt
document.querySelectorAll("#sidebar a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    // Menü schließen
    document.getElementById("sidebar").classList.remove("active");
  });
});

// Anrufen
function callRestaurant() {
  window.location.href = "tel:+436502915795";
}

// Google Maps öffnen
function openMaps() {
  window.open("https://www.google.com/maps/search/?api=1&query=Oetz");
}