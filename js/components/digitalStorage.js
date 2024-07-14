function convertDigitalStorage() {
    const input = parseFloat(document.getElementById('digitalStorage-input').value);
    const unitFrom = document.getElementById('digitalStorage-units-from').value;
    const unitTo = document.getElementById('digitalStorage-units-to').value;
    let result;

    if (isNaN(input)) {
        document.getElementById('digitalStorage-result').value = "Please input a value";
        return;
    }

    const conversionFactors = {
        bit: 1,
        byte: 8,
        kb: 8192,
        mb: 8388608,
        gb: 8589934592,
        tb: 8796093022208,
        pb: 9007199254740992
    };

    const valueInBits = input * conversionFactors[unitFrom];
    result = valueInBits / conversionFactors[unitTo];

    document.getElementById('digitalStorage-result').value = `${result.toFixed(3)} ${unitTo}`;
}
