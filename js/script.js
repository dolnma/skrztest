function showHide(shID) {
    if (document.getElementById(shID)) {
        if (document.getElementById(shID + '-show')) {
            document.getElementById(shID).style.height = '300px';
            document.getElementById(shID + '-show').setAttribute("id", "navmenu--roll-hide");

        } else if (document.getElementById(shID + '-hide')) {
            document.getElementById(shID).style.height = '0px';
            document.getElementById(shID + '-hide').setAttribute("id", "navmenu--roll-show");
        }
    }
}
var modal = document.getElementById('modalTable');
var btn = document.getElementById("btnTable");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
console.log("testík");
