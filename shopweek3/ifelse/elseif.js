


function gamer() {
    var gaming = prompt("Are you a gamer?");

    switch (gaming) {
        case gaming = "yes":
            alert("you are gamer");
            break;
        case gaming = "no":
            alert("you are no gamer");
            break;
    }
}




function egg() {
    var yeet = prompt("You are egg?");

    if (yeet === "yes" || yeet === "Yes") {
        alert("The egg gods are pleased.");
    }

    else if (yeet === "no" || yeet === "No") {
        alert("You should convert to egg.");
    }
    else {
        alert("How did you manage to answer something other than yes or no?");
    }
}

function favGame() {
    var game = prompt("What's your favorite game?");
    alert("Researching game...")
    if (game === "League of Legends") {
        alert(game + " is pretty cool.");
    }
    else if (game === "Fortnite") {
        alert("That is incorrect.");
    }
    else if (game === "Rocket League") {
        alert("Soccer is fun.");
    }
    else if (game === "Portal") {
        alert("The cake is a lie");
    }
    else if (game === "Minecraft") {
        alert("blocky survival coming 2020");
    }
    else if (game === "osu!") {
        alert("no anime.");
    }
    else if (game === "Borderlands 2") {
        alert("Oh dear, he's talking again");
    }
    else {
        alert(game + " is pretty cool")
    }
}