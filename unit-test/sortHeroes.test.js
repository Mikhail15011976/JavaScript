const sortHeroes = require('./sortHeroes');

describe('sortHeroes', () => {
    test('sorts heroes by health in descending order', () => {
        const heroes = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
        ];

        const sortedHeroes = sortHeroes(heroes);

        expect(sortedHeroes).toEqual([
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
            { name: 'мечник', health: 10 },
        ]);
    });

    test('returns an empty array when input is empty', () => {
        expect(sortHeroes([])).toEqual([]);
    });

    test('returns the same array when there is one hero', () => {
        const singleHero = [{ name: 'воин', health: 50 }];
        expect(sortHeroes(singleHero)).toEqual(singleHero);
    });
});
