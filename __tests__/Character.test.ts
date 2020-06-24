import {AbilityPointError, Character, LevelError} from '../src/Character'
import {Rune} from '../src/Rune'
import {StatLimitError} from '../src/Stat'

let character: Character
beforeEach(() => (character = new Character()))

test('fresh character ability points', () => {
  expect(character.stats.intelligence.value).toEqual(40)
  expect(character.stats.intelligence.max).toEqual(100)
  expect(character.getAbilityPoints()).toEqual(30)
})

test('leveled character ability points', () => {
  character.setLevel(75)
  expect(character.getAbilityPoints()).toEqual(236)
})

test('post creation ability points', () => {
  character.setLevel(10)
  expect(character.getAbilityPoints()).toEqual(75)
})

test('post creation bonus ability points', () => {
  const bonusRuneJson: string = '{"bonuses":{"postCreationAbilityPoints": 20}}'
  character.applyRune(Rune.fromJSON(JSON.parse(bonusRuneJson)))
  character.setLevel(10)
  expect(character.getAbilityPoints()).toEqual(95)
})

test('subtract points succeeds', () => {
  character.stats.intelligence.subtract(1)
  expect(character.stats.intelligence.value).toEqual(39)
  expect(character.getAbilityPoints()).toEqual(31)
})

test('subtract too many points fails', () => {
  expect(() => character.stats.intelligence.subtract(6)).toThrow(StatLimitError)
  expect(character.getAbilityPoints()).toEqual(30)
})

test('add points succeeds', () => {
  character.stats.intelligence.add(1)
  expect(character.stats.intelligence.value).toEqual(41)
  expect(character.getAbilityPoints()).toEqual(29)
})

test('add nonexistent points fails', () => {
  character.stats.intelligence.add(30)
  expect(() => character.stats.intelligence.add(1)).toThrow(AbilityPointError)
  expect(character.getAbilityPoints()).toEqual(0)
})

test('add too many points fails', () => {
  character.setLevel(75)
  expect(() => character.stats.intelligence.add(61)).toThrow(StatLimitError)
})

test('adding rune changes stats', () => {
  const rune = Rune.fromJSON(JSON.parse('{"intelligenceModifier": 10}'))
  character.applyRune(rune)

  expect(character.stats.intelligence.value).toEqual(50)
  expect(character.stats.intelligence.max).toEqual(100)
})

test('adding rune with point requirements succeeds', () => {
  const rune = Rune.fromJSON(
    JSON.parse('{"abilityPointCost":30,"intelligenceModifier":30}')
  )
  character.applyRune(rune)
  expect(character.getAbilityPoints()).toEqual(0)
  expect(character.stats.intelligence.value).toEqual(70)
})

test('adding rune with too many point requirements fails', () => {
  const rune = Rune.fromJSON(
    JSON.parse('{"abilityPointCost":31,"intelligenceModifier":31}')
  )
  expect(() => character.applyRune(rune)).toThrow(AbilityPointError)
  expect(character.getAbilityPoints()).toEqual(30)
  expect(character.stats.intelligence.value).toEqual(40)
})

test('backward level throws', () => {
  character.setLevel(10)
  expect(() => character.setLevel(9)).toThrow(LevelError)
})

test('too high level throws', () => {
  expect(() => character.setLevel(76)).toThrow(LevelError)
})

test('apply creation only rune fails after creation', () => {
  character.setLevel(2)
  const rune = Rune.fromJSON(JSON.parse('{"isCreationOnlyRune":true}'))
  expect(() => character.applyRune(rune)).toThrow(LevelError)
})

test('created character training points', () => {
  character.endCreation()
  expect(character.getTrainingPoints()).toEqual(36)
})

test('level 11 training points', () => {
  character.endCreation()
  character.setLevel(11)
  expect(character.getTrainingPoints()).toEqual(46)
})

test('max level training points', () => {
  character.setLevel(75)
  expect(character.getTrainingPoints()).toEqual(588)
})

test('max level training points with 1-10 bonus', () => {
  const runeJson = '{"bonuses":{"level1To10Trains": 1}}'
  character.applyRune(Rune.fromJSON(JSON.parse(runeJson)))
  character.setLevel(75)
  expect(character.getTrainingPoints()).toEqual(588 + 10 - 1)
})

test('max level training points with 11-59 bonus', () => {
  const runeJson = '{"bonuses":{"level11To59Trains": 1}}'
  character.applyRune(Rune.fromJSON(JSON.parse(runeJson)))
  character.setLevel(75)
  expect(character.getTrainingPoints()).toEqual(588 + 59 - 10)
})
