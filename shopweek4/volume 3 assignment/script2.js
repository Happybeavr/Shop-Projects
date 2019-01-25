// JavaScript source code


function theDay() {
    today = new Date();
    var cmas = new Date(today.getFullYear(), 1, 12);
    if (today.getMonth() == 1 && today.getDate() > 12) {
        cmas.setFullYear(cmas.getFullYear() + 1);
    }
    var oneDay = 1000 * 60 * 60 * 24;

    if (Math.ceil((cmas.getTime() - today.getTime()) / (oneDay) > 0)) {
        var x = (Math.ceil((cmas.getTime() - today.getTime()) / (oneDay)));
    } else {
        x = (Math.ceil((cmas.getTime() - today.getTime()) / (oneDay)));
    }
    //calculate the difference between the 2 dates and convert to days
    alert(x + 365 + " days left until my birthday!");

}