var mainimage = document.getElementById("mainImage");
var home = document.getElementById("home");
var tx = document.getElementById("gameTitle");



function imageClick(_elem) {
    mainimage.src = _elem.src;
}
function spookyClick() {
    footballContainer.style.display = "none";
    ghostContainer.style.display = "block";
    home.style.display = "none";
    tx.textContent = "Poltergeist";
}
function homeButton() {
    
}

