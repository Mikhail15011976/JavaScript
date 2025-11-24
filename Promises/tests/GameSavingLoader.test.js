import GameSavingLoader from '../src/GameSavingLoader';
import read from '../src/reader';
import json from '../src/parser';

jest.mock('../src/reader');
jest.mock('../src/parser');

describe('GameSavingLoader', () => {
  it('should load game saving', async () => {
    const mockData = new ArrayBuffer(100);
    const mockJson = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

    read.mockResolvedValue(mockData);
    json.mockResolvedValue(mockJson);

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

  it('should handle errors', async () => {
    read.mockRejectedValue(new Error('Read error'));
    
    await expect(GameSavingLoader.load()).rejects.toThrow('Read error');
  });
});
