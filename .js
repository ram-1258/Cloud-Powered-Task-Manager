let output = document.getElementById("res");

// Add characters to the input field
function Solve(val) {
    output.value += val;
}

// Clear the input field
function Clear() {
    output.value = "";
}

// Remove the last character
function Back() {
    output.value = output.value.slice(0, -1);
}

// Evaluate the expression
function Result() {
    try {
        output.value = eval(output.value);
    } catch (e) {
        output.value = "Error";
    }
}


