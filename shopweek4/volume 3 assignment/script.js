// JavaScript source code
function game() {
    var winLose;
    alert("Its adventure time");
    var player = {
        health: 3,
        strength: 1,
        sneak: 0,

        name: window.prompt("What is your name?"),
        charClass: window.prompt("What character would you like to play? (Knight, Rogue, or Witchdoctor)").toLowerCase()

    }

    if (!player.name) {
        window.alert("Your name has been defaulted to Egg.");
        player.name = "Egg";
    }

    if (player.charClass === "knight") {
        player.strength = 5;
    }
    else if (player.charClass === "rogue") {
        player.sneak = 5;
    }
    else if (player.charClass === "witchdoctor") {
        player.health = 10000000;
    }



    var choice = window.prompt("You have decided to loot your own house for supplies, but your pet cricket is a zombie now. Will you sneak by it, attack it, or just run by it?").toLowerCase()


    if (choice === "attack") {
        if (player.strength > 4) {
            window.alert("You overpower the cricket, but just barely. It almost bit you on the big toe.");
            winLose = "win";
        } else if (player.strength < 5 && player.health < 1082) {
            window.alert("You try to overpower the cricket, but it is too strong. As you are flailing about trying to kill it, it bites you ~14 times, meows, and walks away.")
            winLose = "lose";
        }
        else if (player.health > 1082) {
            window.alert("You try to smack the cricket, but it is too fast. It jumps up and bite you. And again. And a couple more times. You are fine though. You are doctor. You are immortal. The cricket dies instantly.")
            winLose = "win";
        }
    }



    if (choice === "sneak") {
        if (player.sneak > 4) {
            window.alert("You sneak by the cricket while it stares at a wall and get away with cheese that you stole from your own fridge.");
            winLose = "win";
        } else if (player.sneak < 5 && player.health < 1082) {
            window.alert("You try to sneak by the cricket, but it catches you in its line of sight. You try to run away, but it is twice your speed. You are bitten many times.")
            winLose = "lose";
        }
        else if (player.health > 1082) {
            window.alert("The cricket catches you sneaking by it and bites you. However, you are doctor so you bite the cricket back and it dies instantly.")
            winLose = "win";
        }
    }

    if (choice === "run") {
        if (player.strength > 4 && player.health < 1082) {
            window.alert("The cricket is too fast for your burly form to get by. It jumps up and bites your ear.");
            winLose = "lose";
        } else if (player.sneak < 5 && player.health < 1082) {
            window.alert("You try to run by the cricket, but you trip on egg and the cricket bites you and you die.")
            winLose = "lose";
        }
        else if (player.health > 1082) {
            window.alert("You run by the cricket, and because you are doctor, the cricket dies when it tries to bite you.")
            winLose = "win";
        }
    }







    if (winLose === "win") {
        alert("You won congrats you earn egg");
    } else if (winLose === "lose") {
        alert("You lose you no get egg now");
    }
}