const button = document.getElementById('button');
const textDisplay = document.getElementById('displayText');
const textInput = document.getElementById('textInput');

console.log("Conversion script loaded");
button.addEventListener('click', function(event) {
    event.preventDefault();
    const conversionType = document.querySelector('input[name="convert"]:checked')?.value;
    const value = parseFloat(textInput.value);

    if (isNaN(value)) {
        textDisplay.textContent = "Please enter a valid number.";
        return;
    }

    switch (conversionType) {
        case 'kgToLbs':
            textDisplay.textContent = `${value} kg is equal to ${(value * 2.20462).toFixed(2)} lbs`;
            console.log("Converting kg to lbs");
            break;
        case 'lbsToKg':
            textDisplay.textContent = `${value} lbs is equal to ${(value / 2.20462).toFixed(2)} kg`;
            break;
        case 'CToF':
            textDisplay.textContent = `${value}°C is equal to ${((value * 9/5) + 32).toFixed(2)}°F`;
            break;
        case 'FToC':
            textDisplay.textContent = `${value}°F is equal to ${((value - 32) * 5/9).toFixed(2)}°C`;
            break;
        case 'kmToM':
            textDisplay.textContent = `${value} km is equal to ${(value * 1000).toFixed(2)} m`;
            break;
        case 'mToKm':
            textDisplay.textContent = `${value} m is equal to ${(value / 1000).toFixed(2)} km`;
            break;
        default:
            textDisplay.textContent = "invalid";
    }
});