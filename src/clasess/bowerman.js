import  Character from "./user.js";

export default class Bowerman extends Character {
    constructor(name, type) {
super(name, type)
this.attack = 25;
this.defence = 25;
this.type = "Bowman";
    }
}
