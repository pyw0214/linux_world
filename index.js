const title = document.querySelector("#title");

const BASE_COLOR = "white"
const OTHER_COLOR = "#6c5ce7";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;

    }
}

function init(){
    title.style.color = BASE_COLOR;
}

title.addEventListener("mouseenter", handleClick);

init();

