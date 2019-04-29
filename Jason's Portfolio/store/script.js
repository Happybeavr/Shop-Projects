var today = new Date();
var currentHour = today.getHours();
var closeOpen;
var para = document.getElementById("status");


if (currentHour >= 10 && currentHour < 20) {
  closeOpen = "Come in we are open!";
} else if (currentHour < 10 || currentHour >= 20) {
    closeOpen = "Closed Now";
} else {
    closeOpen = "Store hours are 10am-8pm";
}

function changeText() {

    para.innerHTML = "awdiuahwdiuawd";
}
changeText();