import  Character from "./user.js";

export default class Daemon extends Character {
    constructor(name, type) {
super(name, type)
this.attack = 10;
this.defence = 40;
this.type = "Daemon";
    }
}
