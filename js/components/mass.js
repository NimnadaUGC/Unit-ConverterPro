function convertMass() {
    const input = parseFloat(document.getElementById('mass-input').value);
    const unitFrom = document.getElementById('mass-units-from').value;
    const unitTo = document.getElementById('mass-units-to').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('mass-result').value = "Please input a value";
        return;
    }

    const conversionFactors = {
        kg: 1,
        g: 1000,
        mg: 1000000,
        lb: 2.20462,
        oz: 35.274,
        ton: 0.00110231,
        t: 0.001
    };

    const valueInKilograms = input / conversionFactors[unitFrom];
    result = valueInKilograms * conversionFactors[unitTo];

    document.getElementById('mass-result').value = `${result.toFixed(3)} ${unitTo}`;
}
