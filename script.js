function clickRandom() {
    document.body.style.backgroundColor =
    'rgb(' + Math.round(Math.random() * 255) +
        ','+ Math.round(Math.random() * 255) +
        ','+ Math.round(Math.random() * 255) +
        ')';
    localStorage.setItem("bodyColor", document.body.style.backgroundColor)
}

document.body.style.backgroundColor = localStorage.getItem("bodyColor")
