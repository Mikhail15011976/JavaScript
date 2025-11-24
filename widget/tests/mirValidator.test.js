import { validateMirCardNumber, getMirCardType } from '../src/mirValidator.js';

describe('Валидация карт "Мир"', () => {
  test('Должен вернуть true для валидного номера карты "Мир"', () => {
    const validCardNumber = '2200000000000001';
    expect(validateMirCardNumber(validCardNumber)).toBe(true);
  });

  test('Должен вернуть false для номера карты "Мир" с неверной длиной', () => {
    const invalidCardNumber = '220000000000001';
    expect(validateMirCardNumber(invalidCardNumber)).toBe(false);
  });

  test('Должен вернуть false для номера карты "Мир" с неверным префиксом', () => {
    const invalidCardNumber = '1234000000000001';
    expect(validateMirCardNumber(invalidCardNumber)).toBe(false);
  });

  test('Должен вернуть тип карты "Мир" для валидного номера', () => {
    const validCardNumber = '2200000000000001';
    expect(getMirCardType(validCardNumber)).toBe('Мир');
  });

  test('Должен вернуть "Неизвестная карта" для невалидного номера', () => {
    const invalidCardNumber = '1234567890123456';
    expect(getMirCardType(invalidCardNumber)).toBe('Неизвестная карта');
  });

  test('Должен вернуть true для других валидных номеров карт "Мир"', () => {
    expect(validateMirCardNumber('2200000000000002')).toBe(true);
    expect(validateMirCardNumber('2200000000000003')).toBe(true);
    expect(validateMirCardNumber('2200000000000004')).toBe(true);
  });
});
