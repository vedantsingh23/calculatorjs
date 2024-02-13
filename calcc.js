var displayVal = '';

function iDisplay(val){
    displayVal += val;
    update();

}

function calculate(){
    try{
        let result = eval(displayVal)
        displayVal = result.toString();
        update()
    }catch(error){
        displayVal = 'Error';
        update();
    }
}

function sin(){
    let xVal  = document.getElementById('display').value;
    document.getElementById('display').value = Math.sin(eval(xVal));
}

function tan(){
    let xVal  = document.getElementById('display').value;
    document.getElementById('display').value = Math.tan(eval(xVal));
}

function cos(){
    let xVal  = document.getElementById('display').value;
    document.getElementById('display').value = Math.cos(eval(xVal));
}

function log(){
    let xVal  = document.getElementById('display').value;
    document.getElementById('display').value = Math.log(eval(xVal));
}

function clear(){
    displayVal = '';
    update();
}

function update(){
    document.getElementById('display').value = displayVal;
}
