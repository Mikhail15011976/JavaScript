import GameSavingLoader from '../src/gameSavingLoader.js';
import read from '../src/reader.js';

jest.mock('../src/reader.js');

test('loads game saving data', async () => {  
  const jsonString = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const buffer = new ArrayBuffer(jsonString.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < jsonString.length; i++) {
    bufferView[i] = jsonString.charCodeAt(i);
  }

  read.mockImplementation(() => Promise.resolve(buffer));

  const saving = await GameSavingLoader.load();
  expect(saving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
