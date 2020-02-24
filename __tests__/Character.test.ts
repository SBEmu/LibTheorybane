import {Character} from '../src/Character'
import {Rune} from '../src/Rune'

test('fresh stats correct', () => {
  const character = new Character()
  expect(character.stats.intelligence).toEqual(40)
  expect(character.stats.maxIntelligence).toEqual(100)
})

test('subtract points succeeds', () => {
  const character = new Character()
  character.subtractIntelligence(1)
  expect(character.stats.intelligence).toEqual(39)
})

test('subtract too many points fails', () => {
  const character = new Character()
  expect(() => character.subtractIntelligence(6)).toThrow()
})

test('add points succeeds', () => {
  const character = new Character()
  character.addIntelligence(1)
  expect(character.stats.intelligence).toEqual(41)
})

test('add too many points fails', () => {
  const character = new Character()
  expect(() => character.addIntelligence(61)).toThrow()
})

test('adding rune changes stats', () => {
  const character = new Character()
  const rune = Rune.fromJSON(JSON.parse('{"intelligenceModifier": 10}'))
  character.applyRune(rune)

  expect(character.stats.intelligence).toEqual(50)
  expect(character.stats.maxIntelligence).toEqual(100)
})
