var spinner = 0;
function GirarImagen() {
    var imagen = document.getElementById("imgescudo");
    document.getElementById("btnOn").disabled=true;
    document.getElementById("btnOff").disabled=false;

    inter = setInterval(function() {
        spinner += 90;
        imagen.style.transform = "rotate( " + spinner + "deg)";
    }, 100);
}

function DetenerImagen() {
    document.getElementById("btnOn").disabled=false;
    document.getElementById("btnOff").disabled=true;
    clearInterval(inter);
    inter = null;
}