// JavaScript source code
/*alert("welcome to goodies")
let search = document.querySelectorAll("#brow>option");
console.log("selector returns", search)
document.getElementById("#brow").addEventListner("click",)
   function init() { const my = document.querySelectorAll(".my");
    const our = document.querySelector(".text-center");
    const cardtitle = document.querySelector("card-title");
}*/
var row = document.getElementById("commodities")
var service = document.getElementById("service")
var rotateValue = circle.style.transform;
var rotateSum;
service.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
$("button").click(function () {
    $("div").animate({ left: '250px' });
}); 