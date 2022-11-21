export function sortCharacters(characters) {
    if (!Array.isArray(characters)) {
        throw new Error("Не передан список игроков");
    }

    return characters.sort((a, b) => b.health - a.health);
}
