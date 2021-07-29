var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
//output.innerHTML = slider.value;


slider.oninput = function () {
    output.innerHTML = this.value;
}

function makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    const cl = document.getElementById('Cletters');
    const nm = document.getElementById('numbers');
    const sy = document.getElementById('symbols');
    if(cl.checked){
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(nm.checked){
        characters += '0123456789';
    }
    if(sy.checked){
        characters += '\|!#$%&/()=?»*+<>';
    }
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function button() {
    document.getElementById("fname").value = makeid(slider.value);
}
