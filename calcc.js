// Initialize display value
var displayVal = '';

// Function to update the display 
function update(){
    document.getElementById('display').value = displayVal;
}

// Function to handle user input
function iDisplay(val){
    // If the input is 'clear', reset display 
    if (val == 'clear') {
        displayVal = '';
    }
    // Otherwise, ad input to display 
    else {
        displayVal += val
    }
    // Update the display
    update();
}

//performs calculation
function calculate(){
    try{
        // Evaluate the expression in displayVal
        let result = eval(displayVal)
        // Update displayVal with result
        displayVal = result.toString();
        // Update the display
        update()
    }catch(error){
        // Handle errors by displaying 'Error'
        displayVal = 'Error';
        // Update the display
        update();
    }
}

// Functions to calculate trigonometric functions
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

// Functions to calculate logarithmic functions
function log(){
    let xVal  = document.getElementById('display').value;
    document.getElementById('display').value = Math.log(eval(xVal,10));
}

// Function to calculate the natural logarithm (base e)
function e(){
    let xVal  = document.getElementById('display').value;
    document.getElementById('display').value = Math.log(eval(xVal,10));
}

// Function to calculate the square root
function squareRoot(){
    let xVal  = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(eval(xVal));
}
