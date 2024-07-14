function convertLength() {
    const input = parseFloat(document.getElementById('length-input').value);
    const unitFrom = document.getElementById('length-units-from').value;
    const unitTo = document.getElementById('length-units-to').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('length-result').value = "Please input a value";
        return;
    }

    const conversionFactors = {
        m: 1,
        km: 0.001,
        cm: 100,
        mm: 1000,
        in: 39.3701,
        ft: 3.28084,
        yd: 1.09361,
        mi: 0.000621371,
        nmi: 0.000539957
    };

    const valueInMeters = input / conversionFactors[unitFrom];
    result = valueInMeters * conversionFactors[unitTo];

    document.getElementById('length-result').value = `${result.toFixed(3)} ${unitTo}`;
}
