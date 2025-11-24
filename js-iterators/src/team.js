import Character from './character';

class Team {
    constructor() {
        this.members = [];
    }

    add(character) {
        if (character instanceof Character) {
            this.members.push(character);
        } else {
            throw new Error('Only instances of Character can be added to the team.');
        }
    }

    [Symbol.iterator]() {
        let index = 0;
        const members = this.members;

        return {
            next() {
                if (index < members.length) {
                    return { value: members[index++], done: false };
                }
                return { done: true };
            }
        };
    }
}

export default Team;
