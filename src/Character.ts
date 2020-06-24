import {Stats} from './Stats'
import {Rune} from './Rune'
import {Bonuses} from './Bonuses'
import {
  getTrainsForLevelIncrease,
  getAbilityPointsForLevelIncrease,
  getTrainsForLevel
} from './Util/PointUtils'

export class Character {
  readonly stats: Stats
  readonly bonuses: Bonuses
  private abilityPoints = 30
  private trainingPoints = 0
  private level = 1
  private isCreating = true

  constructor() {
    this.stats = new Stats(this)
    this.bonuses = new Bonuses()
  }

  allocateStats(statsToAdd: number): void {
    if (statsToAdd > this.abilityPoints) {
      throw new AbilityPointError('not enough points remaining')
    }

    this.abilityPoints -= statsToAdd
  }

  applyRune(rune: Rune): void {
    if (this.abilityPoints - rune.getAbilityPointCost() < 0) {
      throw new AbilityPointError('too few points to apply rune')
    }

    if (rune.getIsCreationOnlyRune() && !this.isCreating) {
      throw new LevelError('cannot apply creation runes after creation')
    }

    this.abilityPoints -= rune.getAbilityPointCost()
    this.bonuses.addBonuses(rune.getBonuses())
    this.stats.applyRune(rune)
  }

  endCreation(): void {
    this.setLevel(10)
  }

  setLevel(level: number): void {
    if (level < this.level) {
      throw new LevelError('level cannot be less than current level')
    }

    if (level > 75) {
      throw new LevelError('provided level is greater than max level')
    }

    if (this.level === 1) {
      this._endCreation()
    }

    this.abilityPoints += getAbilityPointsForLevelIncrease(this.level, level)
    this.trainingPoints += getTrainsForLevelIncrease(
      this.level,
      level,
      this.bonuses
    )
    this.level = level
  }

  private _endCreation(): void {
    this.isCreating = false
    this.stats.endCreation()
    this.abilityPoints += this.bonuses.getPostCreationAbilityPoints()
  }

  getAbilityPoints(): number {
    return this.abilityPoints
  }

  getTrainingPoints(): number {
    return this.trainingPoints
  }

  getTotalTrainingPoints(): number {
    return getTrainsForLevel(this.level, this.bonuses)
  }
}

export class AbilityPointError extends Error {}
export class LevelError extends Error {}
