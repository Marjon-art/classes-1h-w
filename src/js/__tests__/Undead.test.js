import Undead from "../Undead.js";

test("Правильно создается обьект", () => {
    const undead = new Undead("Undead");
    const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Undead",
        type: "Undead",
    };
    expect(bowerman).toEqual(correct);
})
