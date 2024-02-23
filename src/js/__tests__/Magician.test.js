import Magician from "../Magician.js";

test("Правильно создается обьект", () => {
    const magician = new Magician("Anna", "Magician");
    const correct = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: "Anna",
        type: "Magician",
    };
    expect(magician).toEqual(correct);
})
