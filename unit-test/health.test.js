const getHealthStatus = require('./health');

describe('getHealthStatus', () => {
    test('returns "healthy" for health above 50', () => {
        expect(getHealthStatus({ name: 'Маг', health: 51 })).toBe('healthy'); // Проверка на границе
        expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    });

    test('returns "wounded" for health between 15 and 50', () => {
        expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded'); // Проверка на границе
        expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
    });

    test('returns "critical" for health 15 or below', () => {
        expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('critical'); // Проверка на границе
        expect(getHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
    });
});
