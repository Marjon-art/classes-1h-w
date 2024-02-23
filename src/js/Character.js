export default class Character {
    constructor(name, type) {
        if(name.length < 2 || typeof name !== "string" || name.length > 10) {
            throw new Error("Имя должно содержать от 2 до 10 символа");
         }
        let array = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
          if(!array.includes(type)) {
            throw new Error("некорректные значения типа");
        }
      this.health = 100;
      this.level = 1;

      this.attack = undefined;
      this.defence =undefined;

      this.name = name;
      this.type = type;
    }
}







