function gamer() {
    var game = prompt("Are you a gamer?");

    if (game === "yes") {
        document.getElementById("para").innerHTML = ("Good job.")

    } else {

        document.getElementById("para").innerHTML = ("Become gamer.")


    }
}