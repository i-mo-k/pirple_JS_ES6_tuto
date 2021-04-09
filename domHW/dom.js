const colours = ["#FF4340", "#DD9457", "#FFA200", "#DADE0D", "#4EDC18", "#16D478", "#2462FA", "#4BABB1", "#FFFFFF", "#000000"];

let obj = document.getElementById("title").innerText = document.title;
console.log("Here are the rectangle IDs : ");
for (const col of colours) {
    const container = document.createElement("div");
    
    const rectangle = document.createElement("div");
    rectangle.classList.add("rectangle");
    rectangle.id = col;
    rectangle.style.background = col;
    container.appendChild(rectangle);

    const description = document.createElement("p");
    description.innerText = col;
    container.appendChild(description);

    const list = document.getElementById("rectangleWrapper");
    list.appendChild(container);
    console.log("   -> " + col);
}