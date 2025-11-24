function sortHeroes(heroes) {
    return heroes.sort((a, b) => b.health - a.health);
}

module.exports = sortHeroes;
