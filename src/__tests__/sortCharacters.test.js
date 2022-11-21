import {sortCharacters} from "../sortCharacters";

let characters = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
];

beforeEach(() => {
    characters = [
        { name: "мечник", health: 10 },
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
    ];
});

test("should be sorted", () => {
    sortCharacters(characters);

    expect(characters).toEqual([
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
        { name: "мечник", health: 10 },
    ])
});

test("should be error", () => {
    try {
        sortCharacters();
    } catch (error) {
        expect(error.message).toBe("Не передан список игроков");
    }
});
