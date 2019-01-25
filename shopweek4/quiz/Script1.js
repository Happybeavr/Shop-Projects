// JavaScript source code
function math() {
    var number = prompt("Enter a number to get the square root of.");
    var root = Math.round(Math.sqrt(number));

    alert("The square root of your number is " + root);

}
function favAnimal() {
    var animal = prompt("What is your favorite animal?")

    switch(animal){
        case animal === "dog" || animal === "Dog":
            alert("dogs are pretty gamer")
            break;
        case animal === "cat" || animal === "Cat":
            alert("That was the right answer")
            break;
        case animal === "fish" || animal === "Fish":
            alert("fish are like bubble")
            break;
        default:
            alert(animal + "s are pretty cool")
            break;
    }
}
function changeText() {
    var text = prompt("Which text do you want to change? (paragraph or title)");
    if (text === "paragraph" || text === "Paragraph") {
        var paragraph = prompt("What do you want to change the text to?")
        document.getElementById("para").innerHTML = (paragraph);
    } else if (text === "title" || text === "Title") {
        var title = prompt("What do you want to change the text to?")
        document.getElementById("yeeter").innerHTML = (title);
    } else {
        alert("Please enter a valid option or check your spelling.")
    }
}