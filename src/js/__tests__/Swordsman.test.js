import Swordsman from "../Swordsman.js";

test("Правильно создается обьект", () => {
    const swordsman = new Swordsman("Anna", "Swordsman");
    const correct = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "Anna",
        type: "Swordsman",
    };
    expect(swordsman).toEqual(correct);
})
