import {getTrainsForLevel} from '../../src/Util/PointUtils'
import {Bonuses} from '../../src/Bonuses'

test('train values without bonuses', () => {
  const emptyBonuses = new Bonuses()
  expect(getTrainsForLevel(9, emptyBonuses)).toEqual(32)
  expect(getTrainsForLevel(10, emptyBonuses)).toEqual(36)
  expect(getTrainsForLevel(11, emptyBonuses)).toEqual(46)
  expect(getTrainsForLevel(58, emptyBonuses)).toEqual(516)
  expect(getTrainsForLevel(59, emptyBonuses)).toEqual(526)
  expect(getTrainsForLevel(60, emptyBonuses)).toEqual(531)
  expect(getTrainsForLevel(61, emptyBonuses)).toEqual(536)
  expect(getTrainsForLevel(64, emptyBonuses)).toEqual(551)
  expect(getTrainsForLevel(65, emptyBonuses)).toEqual(555)
  expect(getTrainsForLevel(66, emptyBonuses)).toEqual(559)
  expect(getTrainsForLevel(69, emptyBonuses)).toEqual(571)
  expect(getTrainsForLevel(70, emptyBonuses)).toEqual(574)
  expect(getTrainsForLevel(71, emptyBonuses)).toEqual(577)
  expect(getTrainsForLevel(74, emptyBonuses)).toEqual(586)
  expect(getTrainsForLevel(75, emptyBonuses)).toEqual(588)
})

test('train values with levels 1-10 bonuses', () => {
  const bonusesFor1Through10 = Bonuses.fromJSON(
    JSON.parse('{"level1To10Trains": 1}')
  )
  expect(getTrainsForLevel(9, bonusesFor1Through10)).toEqual(32 + 8)
  expect(getTrainsForLevel(10, bonusesFor1Through10)).toEqual(36 + 9)
  expect(getTrainsForLevel(75, bonusesFor1Through10)).toEqual(588 + 9)
})

test('train values with levels 11-59 bonuses', () => {
  const bonusesFor11Through59 = Bonuses.fromJSON(
    JSON.parse('{"level11To59Trains": 1}')
  )
  expect(getTrainsForLevel(10, bonusesFor11Through59)).toEqual(36)
  expect(getTrainsForLevel(11, bonusesFor11Through59)).toEqual(46 + 1)
  expect(getTrainsForLevel(58, bonusesFor11Through59)).toEqual(516 + 48)
  expect(getTrainsForLevel(59, bonusesFor11Through59)).toEqual(526 + 49)
  expect(getTrainsForLevel(75, bonusesFor11Through59)).toEqual(588 + 49)
})
