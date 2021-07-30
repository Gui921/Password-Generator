var slider = document.getElementById("myRange");
var output = document.getElementById("demo");


slider.oninput = function () {
    output.innerHTML = this.value;
}

function makeid(length) {
    var result = '';
    var char = 'abcdefghijklmnopqrstuvwxyz';

    if(document.getElementById('Cletters').checked){
        char += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(document.getElementById('numbers').checked){
        char += '0123456789';
    }
    if(document.getElementById('symbols').checked){
        char += '\|!#$%&/()=?»*+<>';
    }
    
    for (var i = 0; i < length; i++) {
        result += char.charAt(Math.floor(Math.random() * char.length));
    }
    return result;
}

function button() {
    document.getElementById("fname").value = makeid(slider.value);
}

function copy(){
var copyText = document.getElementById("fname");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}