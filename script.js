
document.getElementById("titulo").addEventListener("mouseover", () => {
    document.getElementById("titulo").style.color = "green";
});

document.getElementById("titulo").addEventListener("mouseout", () => {
    document.getElementById("titulo").style.color = "#39cf13";
});


document.getElementById("descripcion").addEventListener("mouseover", () => {
    document.getElementById("descripcion").style.fontSize = "22px";
});

document.getElementById("descripcion").addEventListener("mouseout", () => {
    document.getElementById("descripcion").style.fontSize = "18px";
});


document.getElementById("miEnlace").addEventListener("mouseover", () => {
    document.getElementById("miEnlace").style.color = "green";
});

document.getElementById("miEnlace").addEventListener("mouseout", () => {
    document.getElementById("miEnlace").style.color = "#39cf13";
});
document.getElementById("video1").innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/nAIRS-8yaeA" frameborder="0" allowfullscreen></iframe>';

document.getElementById("video2").innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/aAibSOVRB_0" frameborder="0" allowfullscreen></iframe>';

document.getElementById("video3").innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/xImzO5NzA2w" frameborder="0" allowfullscreen></iframe>';
