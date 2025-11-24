// orderByProps.test.js
import orderByProps from './orderByProps';

test('should sort properties based on the order', () => {
    const obj = {
      name: 'мечник',
      level: 2,
      attack: 80,
      defence: 40,
      health: 10,
    };
    const order = ['name', 'level'];
    const result = orderByProps(obj, order);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

test('should return empty array for empty object', () => {
    const obj = {};
    const order = [];

    const result = orderByProps(obj, order);

    expect(result).toEqual([]);
});

test('should handle order with non-existing keys', () => {
    const obj = { name: 'мечник', health: 10 };
    const order = ['nonExistingKey'];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
        { key: 'name', value: 'мечник' },
        { key: 'health', value: 10 }
    ]);
});
