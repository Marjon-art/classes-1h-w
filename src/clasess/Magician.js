import  Character from "./user.js";

export default class Magician extends Character {
    constructor(name, type) {
super(name, type)
this.attack = 10;
this.defence = 40;
this.type = "Magician";
    }
}