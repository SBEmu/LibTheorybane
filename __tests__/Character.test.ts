import {Character} from "../src/Character"

test("fresh stats correct", () => {
    let character = new Character();
    expect(character.baseStats.constitution).toEqual(40);
})

test("subtract points succeeds", () => {
    let character = new Character();
    character.subtractIntelligence(1);
    expect(character.baseStats.intelligence).toEqual(39);
})

test("subtract too many points fails", () => {
    let character = new Character();
    expect(() => character.subtractIntelligence(6)).toThrow();
})

test("add points succeeds", () => {
    let character = new Character();
    character.addIntelligence(1);
    expect(character.baseStats.intelligence).toEqual(41);
})

test("add too many points fails", () => {
    let character = new Character();
    expect(() => character.addIntelligence(61)).toThrow();
})