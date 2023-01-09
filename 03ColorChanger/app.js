const btn = document.getElementById("button");
// give meHex code

const randomColor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";
    for (let i = 0 ; i<6; i++){
        cons = cons + val [ Math.floor(Math.random()*16)];

    }
    return cons;
};

function changeRandomColor() {
    document.getElementById("canvas").style.backgroundColor = randomColor();
    document.getElementById("button").style.backgroundColor = randomColor();
    
}
btn.addEventListener("click", changeRandomColor);