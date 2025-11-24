const { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } = require('../src/characters');

describe('Character', () => {
    test('Bowman should have correct attack and defence', () => {
        const bowman = new Bowman('Robin', 'Bowman');
        expect(bowman.attack).toBe(25);
        expect(bowman.defence).toBe(25);
    });

    test('Swordsman should have correct attack and defence', () => {
        const swordsman = new Swordsman('Arthur', 'Swordsman');
        expect(swordsman.attack).toBe(40);
        expect(swordsman.defence).toBe(10);
    });

    test('Magician should have correct attack and defence', () => {
        const magician = new Magician('Merlin', 'Magician');
        expect(magician.attack).toBe(10);
        expect(magician.defence).toBe(40);
    });

    test('Daemon should have correct attack and defence', () => {
        const daemon = new Daemon('Lucifer', 'Daemon');
        expect(daemon.attack).toBe(10);
        expect(daemon.defence).toBe(40);
    });

    test('Undead should have correct attack and defence', () => {
        const undead = new Undead('Zombak', 'Undead');
        expect(undead.attack).toBe(25);
        expect(undead.defence).toBe(25);
    });

    test('Zombie should have correct attack and defence', () => {
        const zombie = new Zombie('Walker', 'Zombie');
        expect(zombie.attack).toBe(40);
        expect(zombie.defence).toBe(10);
    });

    test('Level up should increase level and reset health', () => {
        const bowman = new Bowman('Robin', 'Bowman');
        bowman.damage(30);
        expect(bowman.health).toBe(70);
        bowman.levelUp();
        expect(bowman.level).toBe(2);
        expect(bowman.health).toBe(100);
    });

    test('Damage should reduce health correctly', () => {
        const swordsman = new Swordsman('Arthur', 'Swordsman');
        swordsman.damage(20);
        expect(swordsman.health).toBe(80);
        swordsman.damage(100);
        expect(swordsman.health).toBe(0);
    });

    test('Cannot level up if health is 0', () => {
        const magician = new Magician('Merlin', 'Magician');
        magician.damage(100);
        expect(() => magician.levelUp()).toThrow("Нельзя повысить левел умершего");
    });    
});

describe('Character', () => {
    test('should throw an error if name length is less than 2', () => {
        expect(() => new Bowman('A')).toThrow('Имя должно содержать от 2 до 10 символов');
    });

    test('should throw an error if name length is greater than 10', () => {
        expect(() => new Bowman('AveryLongName')).toThrow('Имя должно содержать от 2 до 10 символов');
    });

    test('should throw an error for an incorrect character type', () => {
        expect(() => new Character('ValidName', 'InvalidType')).toThrow('Некорректный тип персонажа');
    });

    test('should create a Bowman with correct properties', () => {
        const character = new Bowman('Archer');
        expect(character.name).toBe('Archer');
        expect(character.type).toBe('Bowman');
        expect(character.level).toBe(1);
        expect(character.health).toBe(100);
        expect(character.attack).toBe(25);
        expect(character.defence).toBe(25);
    });
});

describe('LevelUp and Damage', () => {
    let character;

    beforeEach(() => {
        character = new Bowman('Archer');
    });

    test('should not allow level up if character is dead', () => {
        character.damage(100);
        expect(() => character.levelUp()).toThrow("Нельзя повысить левел умершего");
    });

    test('should reset health to 100 after leveling up', () => {
        character.levelUp();
        expect(character.health).toBe(100);
    });

    test('should not allow health to go below 0', () => {
        character.damage(150);
        expect(character.health).toBe(0);
    });
});
