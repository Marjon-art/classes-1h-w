export class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
        if(name.length > 2 || typeof name === "string" || name.length < 10) {
            throw new Error("некорректные значения");
         }
        let array = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
        for(let i = 0; i < array.length; i++) {
            if(typeof array[i] === "string") {
                throw new Error("некорректные значения");
            }
        }
    }
}




