function truncateText(id, maxLength) {
    var element = document.getElementById(id),
        truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '....';
    }
    return truncated;
}

document.getElementById('card__title').innerText = truncateText('card__title', 52);

function menuOpen() {
    document.getElementById("header-menu").style.left = "0";
    document.getElementById("closeIcon").style.left = "90%";
    document.getElementById("button-contact").style.left = "50%";
}
function menuClose() {
    document.getElementById("header-menu").style.left = "-100%";
    document.getElementById("closeIcon").style.left = "-100%";
    document.getElementById("button-contact").style.left = "-100%";
}