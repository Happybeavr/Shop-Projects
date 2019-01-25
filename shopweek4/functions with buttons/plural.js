function favGame() {
    var gameAnswer = prompt("Type in your answer below.")

    if(gameAnswer === "fortnite" || gameAnswer === "Fortnite"){
        document.getElementById("gameName").innerHTML = ("You are incorrect.");
    }
    else {
        document.getElementById("gameName").innerHTML = (gameAnswer + " is pretty cool!");
    }
}