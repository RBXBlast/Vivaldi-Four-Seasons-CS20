// Vivald JS Example

// Event Functions
function displaySeason(season, color) {
  // - change concerto text
  document.getElementById("season-text").innerHTML = season;
  // - change main image
  document.getElementById("main-img").src = "images/" + season + ".jpg";
  // - change page background color
  document.body.style.backgroundColor = color;
  // - change audio source
  document.getElementById("song").src = "songs/vivaldi-" + season + ".mp3";
}

// When a Season Button is Clicked
document.getElementById("summerBtn").addEventListener("click", setSummer);
document.getElementById("autumnBtn").addEventListener("click", setAutumn);
document.getElementById("winterBtn").addEventListener("click", setWinter);
document.getElementById("springBtn").addEventListener("click", setSpring);

// Event Functions
function setSummer() {
  displaySeason("summer", "#1BA848");

  // - remove active class from all buttons
  document.getElementById("springBtn").classList.remove("activeBtn");
  document.getElementById("summerBtn").classList.remove("activeBtn");
  document.getElementById("autumnBtn").classList.remove("activeBtn");
  document.getElementById("winterBtn").classList.remove("activeBtn");

  // - add active class to clicked button
  document.getElementById("summerBtn").classList.add("activeBtn");
}

function setAutumn() {
  displaySeason("autumn", "#FE6732");

  document.getElementById("springBtn").classList.remove("activeBtn");
  document.getElementById("summerBtn").classList.remove("activeBtn");
  document.getElementById("autumnBtn").classList.remove("activeBtn");
  document.getElementById("winterBtn").classList.remove("activeBtn");

  document.getElementById("autumnBtn").classList.add("activeBtn");
}

function setWinter() {
  displaySeason("winter", "#1C64B9 ");

  document.getElementById("springBtn").classList.remove("activeBtn");
  document.getElementById("summerBtn").classList.remove("activeBtn");
  document.getElementById("autumnBtn").classList.remove("activeBtn");
  document.getElementById("winterBtn").classList.remove("activeBtn");

  document.getElementById("winterBtn").classList.add("activeBtn");
}

function setSpring() {
  displaySeason("spring", "#0E94D1");

  document.getElementById("springBtn").classList.remove("activeBtn");
  document.getElementById("summerBtn").classList.remove("activeBtn");
  document.getElementById("autumnBtn").classList.remove("activeBtn");
  document.getElementById("winterBtn").classList.remove("activeBtn");

  document.getElementById("springBtn").classList.add("activeBtn");
}