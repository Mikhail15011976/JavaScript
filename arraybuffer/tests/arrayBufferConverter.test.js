import { ArrayBufferConverter } from '../src/arrayBufferConverter.js'; // Обратите внимание на путь
import { getBuffer } from '../src/getBuffer.js'; // Обратите внимание на путь

describe('ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  test('load() should store the buffer', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.buffer).toBe(buffer);
  });

  test('toString() should convert buffer to string', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
});
