import Bowerman from "../Bowerman.js";

test("Правильно создается обьект", () => {
    const bowerman = new Bowerman("Anna", "Bowman");
    const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Anna",
        type: "Bowman",
    };
    expect(bowerman).toEqual(correct);
})


