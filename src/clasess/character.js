export class Character {
    constructor(name, type,) {
        if(name.length < 2 || typeof name !== "string" || name.length > 10) {
            throw new Error("некорректные значения");
         }
        let array = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
          if(!array.inclubes("string")) {
            throw new Error("некорректные значения типа");
  
        }
      this.health = 100;
      this.level = 1;

      this.attack = undefined;
      this.defence =undefined;

      this.name =name;
      this.type =type;
    }
}





