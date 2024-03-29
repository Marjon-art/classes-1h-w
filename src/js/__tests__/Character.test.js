import Character from "../Character.js";

test("Ошибка в name", () => {
    expect(() => new Character("A", "Bowman")).toThrow(new Error("Имя должно содержать от 2 до 10 символа"));
});

test("Ошибка в type", () => {
    expect(() => new Character("Alex", "Bow")).toThrow(new Error("некорректные значения типа"));
});

test("Правильно создается обьект", () => {
    const warior = new Character("Alex", "Bowman");
    const correct = {
        attack: undefined, defence: undefined, health: 100, level: 1, name:"Alex", type: "Bowman",
    };
    expect(warior).toEqual(correct);
});

