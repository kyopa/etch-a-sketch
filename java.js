

const main = document.querySelector(".container");



const btn = document.createElement("button");
btn.textContent = "Reset";
btn.setAttribute("style", "padding: 10px; margin-left: 500px; margin-top: 20px; background-color: black; border: 3px solid gray; border-radius: 4px; color: white")
main.appendChild(btn)

btn.addEventListener("click", () => {
    
    whatSize();
    
    divs.forEach((div) => {
        div.remove();
    })

 

    grid.setAttribute("style", `display: grid; grid-template-columns: repeat(${newSize}, 1fr); grid-template-rows: repeat(${newSize}, 1fr); width: 960px; margin: auto; margin-top: 30px; height: 400px`)

    for (x = 0; x < newSize * newSize; x++) {
    
        b = document.createElement("div");
        b.classList.add("divss");
        b.textContent = "";
        grid.appendChild(b);
        b.setAttribute("style", `border: 1px groove grey; background-color: black`)
        b++; 
        
    }

    const divss = document.querySelectorAll(".divss");

divss.forEach((divv) => {

    divv.addEventListener("mouseover", () => {
        divv.setAttribute("style", `background-color: ${color()}`)
    })
})
});








let newSize;

function whatSize() {
    newSize = prompt("What size for the new grid? \n (the last one was 16x16)");
    if (newSize >= 100) {
        alert("size too big")
        whatSize();
    } else if (newSize == 0) {
        alert("size cant be 0")
        whatSize();
    } 
    
}
    
 

const grid = document.createElement("div");
grid.setAttribute("style", `display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); width: 960px; margin: auto; margin-top: 30px; height: 400px`);
main.appendChild(grid);

for (i = 0; i < 16 * 16; i++) {
    
    a = document.createElement("div");
    a.classList.add("divs");
    a.textContent = "";
    grid.appendChild(a);
    a.setAttribute("style", "border: 1px groove grey; background-color: black")
    a++;
    
}


const divs = document.querySelectorAll(".divs");

function color() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

divs.forEach((div) => {

    div.addEventListener("mouseover", () => {
        div.setAttribute("style", `background-color: ${color()}`)
    });
});









