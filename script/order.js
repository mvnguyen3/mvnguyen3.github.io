function addHyphen (element) {
    var input = document.getElementById(element.id).value;
    input = input.split('-').join('');    // Remove dash (-) if mistakenly entered.

    var hyphen_reg = new RegExp(/.{1,3}/g);
    var finalVal;
    if (input.length <= 7 ){
        finalVal = input.match(hyphen_reg).join('-');
        document.getElementById(element.id).value = finalVal;
    }

}

function User_display_Plainquantity(element) {
        var input = document.getElementById(element.id).value * 6;
        document.getElementById("UserDisplayPlain").innerHTML = input;

}

function User_display_Spicyquantity(element) {
    var input = document.getElementById(element.id).value * 6;
    document.getElementById("UserDisplaySpicy").innerHTML = input;
}

function User_display_Onionquantity(element) {
    var input = document.getElementById(element.id).value * 6;
    document.getElementById("UserDisplayOnion").innerHTML = input;
}

function User_display_Cilantroquantity(element) {
    var input = document.getElementById(element.id).value * 6;
    document.getElementById("UserDisplayCilantro").innerHTML = input;
}

