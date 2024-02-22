import Bowerman from "../Bowerman.js";

test("Правильно создается обьект", () => {
    const bowerman = new Bowerman("Gold", "Bowman")
    const result = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Gold",
        type: "Bowman",
    };
    expect(bowerman).toEqual(result);
})
