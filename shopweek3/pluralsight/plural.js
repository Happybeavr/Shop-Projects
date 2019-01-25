//scenarios
var scenario = ["you are corner by zombie", "you are trapped by zombie", "zombie has your arm in its mouth"];

var randomNumber1 = Math.round(Math.random() * scenario.length - 1);

alert(scenario[randomNumber1]);

//weapons
var weapon = ["knife", "chain", "another zombie"];

alert("You find a " + weapon[randomNumber1] + " nearby");

alert("You attack the zombie with the " + weapon[randomNumber1] + ".");

//win or lose
var percent = Math.round(Math.random() * 100);

if (percent >= 0 && percent <= 33) {
    alert("The zombie bites you and you become a zombie. However, you are a zombie too now so you two are bros.");
}
else {
    alert("You kill the zombie and immediately regret it. You just killed an innocent zombie that just needed to eat. What if somebody killed you while you were trying to eat. How would you feel then? Would it feel bad? Yeah you're not so great now, are you?")
}

//make sure the percent function works
console.log(percent);