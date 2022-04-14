const bottomContainer = document.querySelector(".bottom-container");
const plusSign = document.getElementsByTagName("span");
const numOfSquares = 16;
let index = 1;
// const flags = [];

// // Logic Functions
// function getClass(index) {
//     if (index < 4) return "box" + ((index % 2) + 1 + "--lo3");
//     else return "box" + ((index % 2) + 3 + "--lo3");
// }

// function calculateOpacity(value) {
//     if (value < 4) return ((value % 2) + 1) * 0.25;
//     else return ((value % 2) + 3) * 0.25;
// }

// // General Functions
// for (let i = 0; i < numOfGrids; i++) {
//     flags.push(0);
const node = document.createElement("div");
//     node.classList.add(getClass(i));
//     node.addEventListener("click", () => changeColor(node, i));
//     bottomContainer.appendChild(node);
// }

// // const plus = document.querySelector("span");
// // plus.addEventListener("click", function onClick() {
// //     plus.style.backgroundColor = "blue";
// //     const pickedBox = document.getElementsByClassName("box1--lo3");
// //     pickedBox.style.backgroundColor = "red";
// // });

// function changeColor(node, index) {
//     if (flags[index]) {
//         node.style.backgroundColor = `rgba(255,255,255,${opacity(index)})`;
//         flags[index] = 0;
//         return;
//     }
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     node.style.backgroundColor = `rgb(${r},${g},${b})`;
//     node.style.opacity = calculateOpacity(index);
//     flags[index] = 1;
// }

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
});