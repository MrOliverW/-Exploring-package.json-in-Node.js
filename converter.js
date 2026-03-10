//Testing the app using the temperature converter
// Formula: (Celsius * 9/5) + 32

function convertCelsiusToFahrenheit(celsius) {
    if (celsius < -273.15) {
        return "Error: Temperature below Absolutre Zero";
    }
    if (typeof celsius !== 'number') {
        return "Error: Input must be a number GEESH";
    }
    return (celsius * 9/5) +32;
}

module.exports = { convertCelsiusToFahrenheit };