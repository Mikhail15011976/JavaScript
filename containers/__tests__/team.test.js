const Team = require('../src/team');

describe('Team', () => {
  test('should add a character', () => {
    const team = new Team();
    const character = { name: 'Hero' };
    team.add(character);
    expect(team.toArray()).toContain(character);
  });

  test('should throw an error when adding the same character', () => {
    const team = new Team();
    const character = { name: 'Hero' };
    team.add(character);
    expect(() => team.add(character)).toThrow('Character already in the team');
  });

  test('should add multiple characters', () => {
    const team = new Team();
    const character1 = { name: 'Hero' };
    const character2 = { name: 'Villain' };
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual(expect.arrayContaining([character1, character2]));
  });

  test('should not throw an error when adding duplicates with addAll', () => {
    const team = new Team();
    const character = { name: 'Hero' };
    team.add(character);
    team.addAll(character);
    expect(team.toArray()).toEqual(expect.arrayContaining([character]));
  });
});
