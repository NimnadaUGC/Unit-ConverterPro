function convertTemperature() {
    const input = parseFloat(document.getElementById('temperature-input').value);
    const unitFrom = document.getElementById('temperature-units-from').value;
    const unitTo = document.getElementById('temperature-units-to').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('temperature-result').value = "Please input a value";
        return;
    }

    if (unitFrom === 'c' && unitTo === 'f') {
        result = (input * 9 / 5) + 32;
    } else if (unitFrom === 'f' && unitTo === 'c') {
        result = (input - 32) * 5 / 9;
    } else if (unitFrom === 'c' && unitTo === 'k') {
        result = input + 273.15;
    } else if (unitFrom === 'k' && unitTo === 'c') {
        result = input - 273.15;
    } else if (unitFrom === 'f' && unitTo === 'k') {
        result = (input + 459.67) * 5 / 9;
    } else if (unitFrom === 'k' && unitTo === 'f') {
        result = (input * 9 / 5) - 459.67;
    } else {
        result = input;
    }

    document.getElementById('temperature-result').value = `${result.toFixed(3)} ${unitTo === 'c' ? '°C' : unitTo === 'f' ? '°F' : 'K'}`;
}
