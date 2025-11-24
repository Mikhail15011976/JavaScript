import { validateCardNumber, getCardType } from '../src/validator.js';

describe('Card Validator', () => {
  test('should validate a correct Visa card number', () => {
    expect(validateCardNumber('4111111111111111')).toBe(true);
  });

  test('should validate a correct MasterCard number', () => {
    expect(validateCardNumber('5500000000000004')).toBe(true);
  });

  test('should validate a correct American Express card number', () => {
    expect(validateCardNumber('378282246310005')).toBe(true);
  });

  test('should validate a correct Discover card number', () => {
    expect(validateCardNumber('6011514433546201')).toBe(true);
  });

  test('should validate a correct Diners Club card number', () => {
    expect(validateCardNumber('30569309025904')).toBe(true);
  });

  test('should validate a correct JCB card number', () => {
    expect(validateCardNumber('3530111333300000')).toBe(true);
  });
  
  test('should invalidate an incorrect card number', () => {
    expect(validateCardNumber('1234567890123456')).toBe(false);
  });

  test('should return the correct card type for Visa', () => {
    expect(getCardType('4111111111111111')).toBe('Visa');
  });

  test('should return the correct card type for MasterCard', () => {
    expect(getCardType('5500000000000004')).toBe('MasterCard');
  });

  test('should return the correct card type for American Express', () => {
    expect(getCardType('378282246310005')).toBe('American Express');
  });

  test('should return the correct card type for Discover', () => {
    expect(getCardType('6011514433546201')).toBe('Discover');
  });

  test('should return the correct card type for Diners Club', () => {
    expect(getCardType('30569309025904')).toBe('Diners Club');
  });

  test('should return the correct card type for JCB', () => {
    expect(getCardType('3530111333300000')).toBe('JCB');
  });  

  test('should return "Неизвестная карта" for an unknown card type', () => {
    expect(getCardType('1234567890123456')).toBe('Неизвестная карта');
  });
});