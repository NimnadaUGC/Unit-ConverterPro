function convertPressure() {
    const input = parseFloat(document.getElementById('pressure-input').value);
    const unitFrom = document.getElementById('pressure-units-from').value;
    const unitTo = document.getElementById('pressure-units-to').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('pressure-result').value = "Please input a value";
        return;
    }

    const conversionFactors = {
        pa: 1,
        kpa: 1000,
        mpa: 1000000,
        bar: 100000,
        psi: 6894.76,
        atm: 101325,
        torr: 133.322
    };

    const valueInPascals = input * conversionFactors[unitFrom];
    result = valueInPascals / conversionFactors[unitTo];

    document.getElementById('pressure-result').value = `${result.toFixed(3)} ${unitTo}`;
}
