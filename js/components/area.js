function convertArea() {
    const input = parseFloat(document.getElementById('area-input').value);
    const unitFrom = document.getElementById('area-units-from').value;
    const unitTo = document.getElementById('area-units-to').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('area-result').value = "Please input a value";
        return;
    }

    const conversionFactors = {
        sqm: 1,
        sqkm: 0.000001,
        sqcm: 10000,
        sqmm: 1000000,
        sqin: 1550.0031,
        sqft: 10.7639104,
        sqyd: 1.19599005,
        sqmi: 3.861e-7,
        ac: 0.000247105,
        ha: 0.0001
    };

    const valueInSquareMeters = input / conversionFactors[unitFrom];
    result = valueInSquareMeters * conversionFactors[unitTo];

    document.getElementById('area-result').value = `${result.toFixed(3)} ${unitTo}`;
}
