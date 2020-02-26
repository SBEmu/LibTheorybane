import {Bonuses} from '../Bonuses'
import {LevelError} from '../Character'

export class PointUtils {
  public static getTrainsForLevelIncrease(
    oldLevel: number,
    newLevel: number,
    bonuses: Bonuses
  ): number {
    const currentTrainsForLevel = this.getTrainsForLevel(oldLevel, bonuses)
    const newTrainsForLevel = this.getTrainsForLevel(newLevel, bonuses)
    return newTrainsForLevel - currentTrainsForLevel
  }

  public static getAbilityPointsForLevelIncreaase(
    oldLevel: number,
    newLevel: number
  ): number {
    return (
      this.getAbilityPointsForLevel(newLevel) -
      this.getAbilityPointsForLevel(oldLevel)
    )
  }

  public static getAbilityPointsForLevel(level: number): number {
    if (level < 20) {
      return (level - 1) * 5
    } else if (level < 30) {
      return 90 + (level - 19) * 4
    } else if (level < 40) {
      return 130 + (level - 29) * 3
    } else if (level < 50) {
      return 160 + (level - 39) * 2
    } else {
      return 180 + (level - 49)
    }
  }

  public static getTrainsForLevel(level: number, bonuses: Bonuses): number {
    let bonusTrains: number = 0

    const levelsForLowerBonus: number = Math.min(level, 10)
    bonusTrains += (levelsForLowerBonus - 1) * bonuses.getLevel1To10Trains()

    const levelsForUpperBonus: number = Math.min(59, Math.max(level, 10)) - 10
    bonusTrains += levelsForUpperBonus * bonuses.getLevel11To59Trains()

    if (level <= 10) {
      return (level - 1) * 4 + bonusTrains
    } else if (level < 60) {
      return 36 + (level - 10) * 10 + bonusTrains
    } else if (level < 65) {
      return 526 + (level - 59) * 5 + bonusTrains
    } else if (level < 70) {
      return 551 + (level - 64) * 4 + bonusTrains
    } else if (level < 75) {
      return 571 + (level - 69) * 3 + bonusTrains
    } else if (level == 75) {
      return 588 + bonusTrains
    }

    throw new LevelError('unsupported level') // appease the compiler
  }
}
