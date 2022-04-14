const bottomContainer = document.querySelector(".bottom-container");
const plusSign = document.getElementsByTagName("span");
const numOfSquares = 16;

for (let i = 1; i <= numOfSquares / 4; i++) {
    const div = document.createElement("div");
    div.className = "square-container";
    for (j = 1; j <= 4; j++) {
        const innerDiv = document.createElement("div");
        innerDiv.className = "box" + j + "--lo3";
        div.appendChild(innerDiv);
    }
    bottomContainer.appendChild(div);
}

bottomContainer.addEventListener("click", (e) => {
    if (e.target.className.includes("box")) {
        e.target.classList.toggle("yellow-color");
    }
    e.stopPropagation();
});

document.getElementById("plus").addEventListener("click", function(event) {
    const picked = document.getElementsByClassName("box1--lo3")[1];
    const currentOpacity = +picked.style.opacity;
    picked.style.opacity = (currentOpacity + 0.1) % 1;
    if (+picked.style.opacity >= 0.9) {
        document.getElementById("plus").style.visibility = "hidden";
    }
    if (+picked.style.opacity === 0.25) {
        document.getElementById("reset").style.visibility = "hidden";
    } else {
        document.getElementById("reset").style.visibility = "visible";
    }
});

document.getElementById("reset").addEventListener("click", () => {
    const picked = document.getElementsByClassName("box1--lo3")[1];
    picked.style.opacity = 0.25;
    document.getElementById("reset").style.visibility = "hidden";
    document.getElementById("plus").style.visibility = "visible";
});
