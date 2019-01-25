


function draw() {
    var prize = ["$200", "$400", "$600", "$800", "$1000"];
    var randomPrize = Math.round(Math.random() * prize.length - 1);

    switch (prize[randomPrize]) {
        case prize[randomPrize] = "$200":
            alert("You won $200 dollars!")
            break;
        case prize[randomPrize] = "$400":
            alert("You won $400 dollars!")
            break;
        case prize[randomPrize] = "$600":
            alert("You won $600 dollars!")
            break;
        case prize[randomPrize] = "$800":
            alert("You won $800 dollars!")
            break;
        case prize[randomPrize] = "$1000":
            alert("You won $1000 dollars!")
            break;
    }
}