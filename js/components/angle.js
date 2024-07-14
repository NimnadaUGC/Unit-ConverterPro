function convertAngle() {
    const input = parseFloat(document.getElementById('angle-input').value);
    const unitFrom = document.getElementById('angle-units-from').value;
    const unitTo = document.getElementById('angle-units-to').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('angle-result').value = "Please input a value";
        return;
    }

    if (unitFrom === 'deg' && unitTo === 'rad') {
        result = input * (Math.PI / 180);
    } else if (unitFrom === 'rad' && unitTo === 'deg') {
        result = input * (180 / Math.PI);
    } else if (unitFrom === 'deg' && unitTo === 'grad') {
        result = input * (200 / 180);
    } else if (unitFrom === 'grad' && unitTo === 'deg') {
        result = input * (180 / 200);
    } else if (unitFrom === 'rad' && unitTo === 'grad') {
        result = input * (200 / Math.PI);
    } else if (unitFrom === 'grad' && unitTo === 'rad') {
        result = input * (Math.PI / 200);
    } else {
        result = input;
    }

    document.getElementById('angle-result').value = `${result.toFixed(3)} ${unitTo}`;
}
