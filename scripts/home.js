console.log("scriptloaded");
function footballButton() {
    document.getElementById("info").style.display = "block";
    document.getElementById("home").style.display = "none";
    document.getElementById("gameTitle").textContent = "Football QB";
}
function imageClick(_elem) {
    document.getElementById("mainImage").src = _elem.src;
    var t = document.getElementById("imageDesc")
    console.log(_elem.id);
    switch (_elem) {
        case sideImage0:
            console.log("case hit");
            t.textContent = "First Stage of Development";
            break;
        case sideImage1:
            console.log("case hit");
            t.textContent = "Second Stage of Development";
            break;
        case sideImage2:
            console.log("case hit");
            t.textContent = "Third Stage of Development";
            break;
        case sideImage3:
            console.log("case hit");
            t.textContent = "Forth Stage of Development";
            break;
        case sideImage4:
            console.log("case hit");
            t.textContent = "Fifth Stage of Development";
            break;
        default:
            break;
    }
}
