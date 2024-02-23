import Undead from "../Undead.js";

test("Правильно создается обьект", () => {
    const undead = new Undead("Anna", "Undead");
    const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Anna",
        type: "Undead",
    };
    expect(undead).toEqual(correct);
})
