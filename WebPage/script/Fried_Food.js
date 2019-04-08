function display_plain_tofu_big(element) {
    var input = document.getElementById(element.id).value * 1.75;
    document.getElementById("display_plain_tofu_big").innerHTML = input;
    document.getElementById("display_plain_tofu_big").style.color = "green";

}
function display_plain_tofu(element) {
    var input = document.getElementById(element.id).value * 6;
    document.getElementById("display_plain_tofu").innerHTML = input;
    document.getElementById("display_plain_tofu").style.color = "green";

}
function display_cilantro_tofu(element) {
    var input = document.getElementById(element.id).value * 6;
    document.getElementById("display_cilantro_tofu").innerHTML = input;
    document.getElementById("display_cilantro_tofu").style.color = "green";

}
function display_onion_tofu(element) {
    var input = document.getElementById(element.id).value * 6;
    document.getElementById("display_onion_tofu").innerHTML = input;
    document.getElementById("display_onion_tofu").style.color = "green";
}

// ----------- Modal -------------
function checkout(){
    var plain_big = parseFloat(document.getElementById("plain_tofu_big").value);
    var plain = parseFloat(document.getElementById("plain_tofu").value);
    var onion = parseFloat(document.getElementById("onion_tofu").value);
    var cilantro = parseFloat(document.getElementById("cilantro_tofu").value);

    var subtotal = (plain_big*1.75) + plain + cilantro + onion;
    var tax = subtotal/10;
    var total = (subtotal + tax).toFixed(2);
    document.getElementById("total").innerHTML = total;
    document.getElementById("total").style.color = "green";
    var modal = document.getElementById('myModal');
    modal.style.display = "block";

    // Added tofu to the modal
    if(plain_big !== 0){
        document.getElementById("display_plain_big_modal").innerHTML = "Big Tofu: " + plain_big + " Pieces";
    }
    if(plain !== 0){
        document.getElementById("display_plain_modal").innerHTML = "Plain Tofu: " + plain*6 + " Pieces";
    }
    if(onion !== 0){
        document.getElementById("display_onion_modal").innerHTML = "Onion Tofu: " + onion*6 + " Pieces";
    }
    if(cilantro !== 0){
        document.getElementById("display_cilantro_modal").innerHTML = "Cilantro Tofu: " + cilantro*6 + " Pieces";
    }
}

// Close modal if user click close or outside the modal content
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {

        modal.style.display = "none";
    }
};




// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



















