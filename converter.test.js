const { convertCelsiusToFahrenheit } = require('./converter');

describe('Temperature Converter Tests', () => {

    //Freezing Point Test
    test('converts 0°C to 32°F', () => {
        expect(convertCelsiusToFahrenheit(0)).toBe(32);
    });

    //Boiling Point Test
    test('converts 100°C to 212°F', () => {
        expect(convertCelsiusToFahrenheit(100)).toBe(212);
    }); 
    //Room Temperature Test
    test('converts 20°C to 68°F', () => {
        expect(convertCelsiusToFahrenheit(20)).toBe(68);
    });

    //Edgier Cases

    //Absolute Zero Test
    test('returns error for temperatures below absolute zero', () => {
        expect(convertCelsiusToFahrenheit(-300)).toBe("Error: Temperature below Absolutre Zero");
    });
    //Handling boundary of absolute zero
    test('converts -273.15°C to -459.67°F', () => {
        expect(convertCelsiusToFahrenheit(-273.15)).toBeCloseTo(-459.67);
    });
    //Non-numeric Input Test
    test('returns error for non-numeric input', () => {
        expect(convertCelsiusToFahrenheit("twenty")).toBe("Error: Input must be a number GEESH");
    });
})