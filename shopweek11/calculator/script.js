function displayNum (n1) {
    calcForm.txt1.value=calcForm.txt1.value + n1;
}

function clearBtn() {
    calcForm.txt1.value = "";
}

function equal () {
    if(calcForm.txt1.value == "" ) {
        calcForm.txt1.value = 0;
    }
    calcForm.txt1.value=eval(calcForm.txt1.value)
}