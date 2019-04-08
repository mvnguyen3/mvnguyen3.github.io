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

function print_receipt() {
    var name = getQueryVariable("name");
    var phone = getQueryVariable("ph");
    var plain = parseInt(getQueryVariable("plain"));
    var lemonGrass = parseInt(getQueryVariable("lemonGrass"));
    var onion = parseInt(getQueryVariable("onion"));
    var cilantro = parseInt(getQueryVariable("cilantro"));
    var total = plain + lemonGrass + onion + cilantro;

    document.getElementById("cus_name").innerHTML = name;
    document.getElementById("cus_phone").innerHTML = phone;
    document.getElementById("plain_tofu_price").innerHTML = plain;
    document.getElementById("lemon_grass_price").innerHTML = lemonGrass;
    document.getElementById("Onion_tofu_price").innerHTML = onion;
    document.getElementById("Cilantro_tofu_price").innerHTML = cilantro;
    document.getElementById("total").innerHTML = total;

}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);

    var vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable && pair[1] != 0) {

            return pair[1];
        }
    }
    return 0;
}



















