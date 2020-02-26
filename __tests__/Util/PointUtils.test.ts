import {PointUtils} from '../../src/Util/PointUtils'
import {Bonuses} from '../../src/Bonuses'

test('train values without bonuses', () => {
  const emptyBonuses = new Bonuses()
  expect(PointUtils.getTrainsForLevel(9, emptyBonuses)).toEqual(32)
  expect(PointUtils.getTrainsForLevel(10, emptyBonuses)).toEqual(36)
  expect(PointUtils.getTrainsForLevel(11, emptyBonuses)).toEqual(46)
  expect(PointUtils.getTrainsForLevel(58, emptyBonuses)).toEqual(516)
  expect(PointUtils.getTrainsForLevel(59, emptyBonuses)).toEqual(526)
  expect(PointUtils.getTrainsForLevel(60, emptyBonuses)).toEqual(531)
  expect(PointUtils.getTrainsForLevel(61, emptyBonuses)).toEqual(536)
  expect(PointUtils.getTrainsForLevel(64, emptyBonuses)).toEqual(551)
  expect(PointUtils.getTrainsForLevel(65, emptyBonuses)).toEqual(555)
  expect(PointUtils.getTrainsForLevel(66, emptyBonuses)).toEqual(559)
  expect(PointUtils.getTrainsForLevel(69, emptyBonuses)).toEqual(571)
  expect(PointUtils.getTrainsForLevel(70, emptyBonuses)).toEqual(574)
  expect(PointUtils.getTrainsForLevel(71, emptyBonuses)).toEqual(577)
  expect(PointUtils.getTrainsForLevel(74, emptyBonuses)).toEqual(586)
  expect(PointUtils.getTrainsForLevel(75, emptyBonuses)).toEqual(588)
})

test('train values with levels 1-10 bonuses', () => {
  const bonusesFor1Through10 = Bonuses.fromJSON(
    JSON.parse('{"level1To10Trains": 1}')
  )
  expect(PointUtils.getTrainsForLevel(9, bonusesFor1Through10)).toEqual(32 + 8)
  expect(PointUtils.getTrainsForLevel(10, bonusesFor1Through10)).toEqual(36 + 9)
  expect(PointUtils.getTrainsForLevel(75, bonusesFor1Through10)).toEqual(
    588 + 9
  )
})

test('train values with levels 11-59 bonuses', () => {
  const bonusesFor11Through59 = Bonuses.fromJSON(
    JSON.parse('{"level11To59Trains": 1}')
  )
  expect(PointUtils.getTrainsForLevel(10, bonusesFor11Through59)).toEqual(36)
  expect(PointUtils.getTrainsForLevel(11, bonusesFor11Through59)).toEqual(
    46 + 1
  )
  expect(PointUtils.getTrainsForLevel(58, bonusesFor11Through59)).toEqual(
    516 + 48
  )
  expect(PointUtils.getTrainsForLevel(59, bonusesFor11Through59)).toEqual(
    526 + 49
  )
  expect(PointUtils.getTrainsForLevel(75, bonusesFor11Through59)).toEqual(
    588 + 49
  )
})
