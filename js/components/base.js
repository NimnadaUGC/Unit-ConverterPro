function handleCustomBase() {
    const fromUnit = document.getElementById('base-units-from').value;
    const toUnit = document.getElementById('base-units-to').value;
    document.getElementById('custom-base-from').style.display = fromUnit === 'custom' ? 'block' : 'none';
    document.getElementById('custom-base-to').style.display = toUnit === 'custom' ? 'block' : 'none';
}

function getBaseValue(base) {
    switch (base) {
        case 'bin':
            return 2;
        case 'oct':
            return 8;
        case 'dec':
            return 10;
        case 'hex':
            return 16;
        case 'custom':
            return 'custom';
        default:
            return null;
    }
}

function isValidForBase(input, base) {
    const maxChar = base <= 10 ? '' : `A-${String.fromCharCode(65 + base - 11)}`;
    const regex = new RegExp(`^[0-${Math.min(base - 1, 9)}${maxChar}]*$`, 'i');
    return regex.test(input.replace('-', '').replace('.', ''));
}

function convertBase() {
    const input = document.getElementById('base-input').value.toUpperCase();
    const unitFrom = document.getElementById('base-units-from').value;
    const unitTo = document.getElementById('base-units-to').value;
    const customBaseFrom = parseInt(document.getElementById('custom-base-from').value);
    const customBaseTo = parseInt(document.getElementById('custom-base-to').value);

    if (input.trim() === '') {
        document.getElementById('base-result').value = "Please input a valid number";
        return;
    }

    let baseFromValue = getBaseValue(unitFrom);
    let baseToValue = getBaseValue(unitTo);

    if (baseFromValue === 'custom' && (isNaN(customBaseFrom) || customBaseFrom < 2 || customBaseFrom > 36)) {
        document.getElementById('base-result').value = 'Please enter a valid base (2 - 36)';
        return;
    }
    if (baseToValue === 'custom' && (isNaN(customBaseTo) || customBaseTo < 2 || customBaseTo > 36)) {
        document.getElementById('base-result').value = 'Please enter a valid base (2 - 36)';
        return;
    }

    if (baseFromValue === 'custom') baseFromValue = customBaseFrom;
    if (baseToValue === 'custom') baseToValue = customBaseTo;

    if (!isValidForBase(input, baseFromValue)) {
        document.getElementById('base-result').value = `Invalid input for base ${baseFromValue}`;
        return;
    }

    // Check if converting from same base to same base
    if (baseFromValue === baseToValue) {
        document.getElementById('base-result').value = `${input}${convertToSubscript(baseFromValue)}`;
        return;
    }    

    const convertToDecimal = (value, base) => {
        const negative = value.startsWith('-');
        if (negative) value = value.slice(1);

        const [integer, fraction] = value.split('.');
        let decimalValue = parseInt(integer, base);

        if (fraction) {
            decimalValue += fraction.split('').reduce((acc, digit, index) => {
                return acc + parseInt(digit, base) / Math.pow(base, index + 1);
            }, 0);
        }

        return negative ? -decimalValue : decimalValue;
    };

    const convertFromDecimal = (value, base) => {
        const negative = value < 0;
        if (negative) value = -value;

        const integerPart = Math.floor(value);
        const fractionPart = value - integerPart;
        let baseInteger = integerPart.toString(base).toUpperCase();
        if (fractionPart === 0) return negative ? `-${baseInteger}` : baseInteger;

        let baseFraction = '';
        let fraction = fractionPart;
        for (let i = 0; i < 5; i++) { // Limit to 5 decimal places
            fraction *= base;
            let digit = Math.floor(fraction);
            baseFraction += digit.toString(base).toUpperCase();
            fraction -= digit;
        }

        return negative ? `-${baseInteger}.${baseFraction}` : `${baseInteger}.${baseFraction}`;
    };

    let result;
    try {
        const decimalValue = convertToDecimal(input, baseFromValue);
        result = convertFromDecimal(decimalValue, baseToValue);
    } catch (e) {
        document.getElementById('base-result').value = 'Error in conversion';
        return;
    }

    document.getElementById('base-result').value = `${result}${convertToSubscript(baseToValue)}`;
}

function convertToSubscript(base) {
    const subscriptMap = {
        '0': '₀',
        '1': '₁',
        '2': '₂',
        '3': '₃',
        '4': '₄',
        '5': '₅',
        '6': '₆',
        '7': '₇',
        '8': '₈',
        '9': '₉'
    };
    return String(base).split('').map(char => subscriptMap[char] || char).join('');
}

document.getElementById('base-units-from').addEventListener('change', handleCustomBase);
document.getElementById('base-units-to').addEventListener('change', handleCustomBase);
