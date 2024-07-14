function convertTime() {
    const input = parseFloat(document.getElementById("time-input").value);
    const unitFrom = document.getElementById("time-units-from").value;
    const unitTo = document.getElementById("time-units-to").value;

    if (isNaN(input) || input < 0) {
        document.getElementById('time-result').value = "Please input a valid value";
        return;
    }

    const conversionFactors = {
        second: 1,
        minute: 60,
        hour: 3600,
        day: 86400,
        week: 604800,
        month: 2592000, // 30 days per month
        year: 31536000, // 365 days per year
        decade: 315360000,
        century: 3153600000,
        millisecond: 0.001,
        microsecond: 0.000001,
        nanosecond: 0.000000001
    };

    const valueInSeconds = input * conversionFactors[unitFrom];
    const result = valueInSeconds / conversionFactors[unitTo];

    let formattedResult;
    if (unitTo === "second") {
        formattedResult = `${result.toFixed(0)} s`;
    } else if (unitTo === "minute") {
        const minutes = Math.floor(result);
        const seconds = Math.round((result - minutes) * 60);
        formattedResult = `${minutes}:${seconds.toString().padStart(2, '0')} min`;
    } else if (unitTo === "hour") {
        const hours = Math.floor(result);
        const minutes = Math.floor((result - hours) * 60);
        const seconds = Math.round(((result - hours) * 60 - minutes) * 60);
        formattedResult = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} h`;
    } else if (unitTo === "day") {
        const days = Math.floor(result);
        const remainingSeconds = valueInSeconds % 86400;
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = Math.round(remainingSeconds % 60);
        formattedResult = `${days} days ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ≈`;
    } else if (unitTo === "week") {
        const weeks = Math.floor(result);
        const remainingSeconds = valueInSeconds % 604800;
        const days = Math.floor(remainingSeconds / 86400);
        const hours = Math.floor((remainingSeconds % 86400) / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = Math.round(remainingSeconds % 60);
        formattedResult = `${weeks} weeks ${days} days ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ≈`;
    } else if (unitTo === "month") {
        const months = Math.floor(result);
        const remainingSeconds = valueInSeconds % 2592000;
        const days = Math.floor(remainingSeconds / 86400);
        const hours = Math.floor((remainingSeconds % 86400) / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = Math.round(remainingSeconds % 60);
        formattedResult = `${months} months ${days} days ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ≈`;
    } else if (unitTo === "year") {
        const years = Math.floor(result);
        const remainingSeconds = valueInSeconds % 31536000;
        const days = Math.floor(remainingSeconds / 86400);
        const hours = Math.floor((remainingSeconds % 86400) / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = Math.round(remainingSeconds % 60);
        formattedResult = `${years} years ${days} days ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ≈`;
    } else if (unitTo === "decade") {
        const decades = Math.floor(result);
        const remainingSeconds = valueInSeconds % 315360000;
        const years = Math.floor(remainingSeconds / 31536000);
        const days = Math.floor((remainingSeconds % 31536000) / 86400);
        const hours = Math.floor((remainingSeconds % 86400) / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = Math.round(remainingSeconds % 60);
        formattedResult = `${decades} decades ${years} years ${days} days ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ≈`;
    } else if (unitTo === "century") {
        const centuries = Math.floor(result);
        const remainingSeconds = valueInSeconds % 3153600000;
        const decades = Math.floor(remainingSeconds / 315360000);
        const years = Math.floor((remainingSeconds % 315360000) / 31536000);
        const days = Math.floor((remainingSeconds % 31536000) / 86400);
        const hours = Math.floor((remainingSeconds % 86400) / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = Math.round(remainingSeconds % 60);
        formattedResult = `${centuries} centuries ${decades} decades ${years} years ${days} days ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ≈`;
    } else if (unitTo === "millisecond") {
        formattedResult = `${(result * 1000).toFixed(0)} ms`;
    } else if (unitTo === "microsecond") {
        formattedResult = `${(result * 1000000).toFixed(0)} µs`;
    } else if (unitTo === "nanosecond") {
        formattedResult = `${(result * 1000000000).toFixed(0)} ns`;
    } else {
        formattedResult = `${result.toFixed(2)} ${unitTo}`;
    }

    document.getElementById('time-result').value = formattedResult;
}
