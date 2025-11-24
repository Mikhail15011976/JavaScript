import { Magician, Daemon } from '../src/characters.js';

describe('Character classes', () => {
  let magician;
  let daemon;

  beforeEach(() => {
    magician = new Magician();
    daemon = new Daemon();
  });

  test('Magician attack at distance 1 without stoned', () => {
    magician.setDistance(1);
    expect(magician.attack).toBe(100);
  });

  test('Magician attack at distance 2 without stoned', () => {
    magician.setDistance(2);
    expect(magician.attack).toBe(90);
  });

  test('Magician attack at distance 2 with stoned', () => {
    magician.setDistance(2);
    magician.stoned = true;
    expect(magician.attack).toBe(85);
  });

  test('Daemon attack at distance 3 without stoned', () => {
    daemon.setDistance(3);
    expect(daemon.attack).toBe(80);
  });

  test('Daemon attack at distance 4 with stoned', () => {
    daemon.setDistance(4);
    daemon.stoned = true;
    expect(daemon.attack).toBe(60);
  });

  test('Attack should not go below 0', () => {
    magician.setDistance(5);
    magician.stoned = true;
    expect(magician.attack).toBe(49);
  });
});
