function convert() {
    // Get user input
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    
    // Define conversion factors
    const inchesToCentimeters = 2.54;
    const centimetersToInches = 1 / 2.54;
    
    let result;
    
    // Perform the conversion
    if (fromUnit === "inches" && toUnit === "centimeters") {
        result = inputValue * inchesToCentimeters;
    } else if (fromUnit === "centimeters" && toUnit === "inches") {
        result = inputValue * centimetersToInches;
    } else {
        result = inputValue; // If the units are the same, no conversion needed
    }
    
    // Display the result
    document.getElementById("result").textContent = `${inputValue} ${fromUnit} is equal to ${result} ${toUnit}`;
}
