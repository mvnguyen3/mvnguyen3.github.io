function addHyphen (element) {
    var input = document.getElementById(element.id);
    input = input.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

    var hyphen_reg = new RegExp(/.{1,3}/g);

    if (input.length <= 7 ){
        finalVal = input.match(hyphen_reg).join('-');
        document.getElementById(element.id).value = finalVal;
    }


}