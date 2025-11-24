class Character {
    constructor(baseAttack) {
      this.baseAttack = baseAttack;
      this.distance = 1;
      this.stoned = false;
    }
  
    setDistance(distance) {
      this.distance = distance;
    }
  
    get attack() {
      let attackValue = this.baseAttack;  
      
      if (this.distance === 1) {
        attackValue *= 1.0;
      } else if (this.distance === 2) {
        attackValue *= 0.9;
      } else if (this.distance === 3) {
        attackValue *= 0.8;
      } else if (this.distance === 4) {
        attackValue *= 0.7;
      } else if (this.distance >= 5) {
        attackValue *= 0.6;
      }  
      
      if (this.stoned) {
        attackValue -= Math.floor(Math.log2(this.distance) * 5);
      }  
      
      return Math.max(0, Math.round(attackValue));
    }
  
    set stoned(value) {
      this._stoned = value;
    }
  
    get stoned() {
      return this._stoned;
    }
  }  
  
class Magician extends Character {
    constructor() {
        super(100);
    }
  }
  
class Daemon extends Character {
    constructor() {
        super(100);
    }
  }  

export { Character, Magician, Daemon };
  