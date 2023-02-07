const FPS = 120;
var cnv, ctx;
var click = [0, 0, "#000000"], color = "#FFFFFF";
var ant1 = 0, ant2 = 0, ant3 = "#FFFFFF", isPainting;

window.onload = function() {
    cnv = document.getElementById("canvas");
    ctx = cnv.getContext("2d");
    setInterval(main, 1000 / FPS);
}

function main() {
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;

    window.addEventListener("keypress", (e) => {
        if (e.code == "Digit0") {color = "#000000";}
        if (e.code == "Digit1") {color = "#FF0000";}
        if (e.code == "Digit2") {color = "#00FF00";}
        if (e.code == "Digit3") {color = "#0000FF";}
        if (e.code == "Digit4") {color = "#00FFFF";}
        if (e.code == "Digit5") {color = "#FF00FF";}
        if (e.code == "Digit6") {color = "#FFFF00";}
        if (e.code == "Digit7") {color = "#404040";}
        if (e.code == "Digit8") {color = "#808080";}
        if (e.code == "Digit9") {color = "#FFFFFF";}
    });

    window.addEventListener("mousedown", () => {isPainting = true;});
    window.addEventListener("mouseup", () => {isPainting = false;});
    window.addEventListener("mousemove", addColor);
    window.addEventListener("click", (e) => {       
        if (e.clientX != ant1 || e.clientY != ant2 || color != ant3) {
        click.push(e.clientX, e.clientY, color);
        ant1 = e.clientX;
        ant2 = e.clientY;
        ant3 = color;
    }});

    draw();
};

function addColor(e) {
    if (isPainting == true) {        
        if (e.clientX != ant1 || e.clientY != ant2 || color != ant3) {
        click.push(e.clientX, e.clientY, color);
        ant1 = e.clientX;
        ant2 = e.clientY;
        ant3 = color;
    }}
}


function draw() {
    for (let paint = 0; paint < click.length; paint += 3) {
        ctx.strokeStyle=click[paint + 2];
        ctx.fillStyle=click[paint + 2];
        ctx.beginPath();
        ctx.ellipse(click[paint], click[paint + 1], 50, 50, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    ctx.font="30px Comic Sans MS";
    ctx.fillStyle=color;
    ctx.fillText("COLOR", 30, 30);
}