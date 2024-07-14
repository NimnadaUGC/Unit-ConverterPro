function convertVolume() {
    const input = parseFloat(document.getElementById('volume-input').value);
    const unitFrom = document.getElementById('volume-units-from').value;
    const unitTo = document.getElementById('volume-units-to').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('volume-result').value = "Please input a value";
        return;
    }

    const conversionFactors = {
        cubicm: 1,
        liter: 1000,
        milliliter: 1000000,
        cubiccm: 1000000,
        cubicmm: 1000000000,
        cubicin: 61023.7441,
        cubicyard: 1.30795,
        cubicfoot: 35.3147,
        gallon: 264.172,
        quart: 1056.69,
        pint: 2113.38,
        cup: 4226.75,
        fluidounce: 33814
    };

    const valueInCubicMeters = input / conversionFactors[unitFrom];
    result = valueInCubicMeters * conversionFactors[unitTo];

    document.getElementById('volume-result').value = `${result.toFixed(3)} ${unitTo}`;
}
