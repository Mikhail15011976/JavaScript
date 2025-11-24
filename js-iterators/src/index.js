import './styles.css';
import Character from './character';
import Team from './team';

const team = new Team();
const character1 = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const character2 = new Character('Мечник', 'Swordsman', 60, 1, 50, 20);

team.add(character1);
team.add(character2);

for (const member of team) {
    console.log(member);
}
