import Character from './character';
import Team from './team';
import { canIterate } from './utils';

const team = new Team();
const archer = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const swordsman = new Character('Мечник', 'Swordsman', 60, 1, 50, 20);

team.add(archer);
team.add(swordsman);

for (const member of team) {
  console.log(member);
}

console.log(canIterate(new Map()));
