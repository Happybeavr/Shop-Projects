// JavaScript source code


alert("you have been cornered by mean grape");

var egg = prompt("how many egg are you throw?");

alert("you throw " + egg + " egg at grape");

if (egg >= 5) {
    alert("you have defeated evil grape. you are win");
}
else if (egg <= 4) {
    alert("not enough egg. it is too late now")
}

function winner() {
    window.location.href = "https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg";
}

function loser() {
    window.location.href = "https://pbs.twimg.com/profile_images/877361447789047809/-Y8-VzK6_400x400.jpg"
}