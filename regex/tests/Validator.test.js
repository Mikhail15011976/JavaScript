const { validateUsername } = require('../src/Validator');

describe('Validator', () => {
    test('valid username', () => {
        expect(validateUsername('valid_username-123')).toBe(true);
    });

    test('username with more than three consecutive digits', () => {
        expect(validateUsername('user1234name')).toBe(false);
    });

    test('username starts with a digit', () => {
        expect(validateUsername('1username')).toBe(false);
    });

    test('username ends with a digit', () => {
        expect(validateUsername('username1')).toBe(true);
    });

    test('username starts with an underscore', () => {
        expect(validateUsername('_username')).toBe(false);
    });

    test('username ends with an underscore', () => {
        expect(validateUsername('username_')).toBe(false);
    });

    test('username with two consecutive underscores', () => {
        expect(validateUsername('user__name')).toBe(false);
    });

    test('username with two consecutive dashes', () => {
        expect(validateUsername('user--name')).toBe(false);
    });

    test('invalid characters in username', () => {
        expect(validateUsername('invalid@username')).toBe(false);
    });
});
