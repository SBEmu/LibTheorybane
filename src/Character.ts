import {Stats} from './Stats'
import {Rune} from './Rune'
import {Bonuses} from './Bonuses'
import {
  getTrainsForLevelIncrease,
  getAbilityPointsForLevelIncrease,
  getTrainsForLevel
} from './Util/PointUtils'

export class Character {
  readonly stats: Stats = new Stats()
  readonly bonuses: Bonuses = new Bonuses()
  private abilityPoints: number = 30
  private level: number = 1
  private isCreating: boolean = true
  private trainingPoints: number = 0

  //region add stats

  addDexterity(dexterityToAdd: number): void {
    if (dexterityToAdd > this.abilityPoints) {
      throw new AbilityPointError('not enough points remaining')
    }
    this.abilityPoints -= dexterityToAdd
    this.stats.dexterity += dexterityToAdd
  }

  addStrength(strengthToAdd: number): void {
    if (strengthToAdd > this.abilityPoints) {
      throw new AbilityPointError('not enough points remaining')
    }
    this.abilityPoints -= strengthToAdd
    this.stats.strength += strengthToAdd
  }

  addIntelligence(intelligenceToAdd: number): void {
    if (intelligenceToAdd > this.abilityPoints) {
      throw new AbilityPointError('not enough points remaining')
    }
    this.abilityPoints -= intelligenceToAdd
    this.stats.intelligence += intelligenceToAdd
  }

  addSpirit(spiritToAdd: number): void {
    if (spiritToAdd > this.abilityPoints) {
      throw new AbilityPointError('not enough points remaining')
    }
    this.abilityPoints -= spiritToAdd
    this.stats.spirit += spiritToAdd
  }

  addConstitution(constitutionToAdd: number): void {
    if (constitutionToAdd > this.abilityPoints) {
      throw new AbilityPointError('not enough points remaining')
    }
    this.abilityPoints -= constitutionToAdd
    this.stats.constitution += constitutionToAdd
  }

  //region subtract stats

  subtractDexterity(dexterityToSubtract: number): void {
    this.stats.dexterity -= dexterityToSubtract
    this.abilityPoints += dexterityToSubtract
  }

  subtractStrength(strengthToSubtract: number): void {
    this.stats.strength -= strengthToSubtract
    this.abilityPoints += strengthToSubtract
  }

  subtractIntelligence(intelligenceToSubtract: number): void {
    this.stats.intelligence -= intelligenceToSubtract
    this.abilityPoints += intelligenceToSubtract
  }

  subtractSpirit(spiritToSubtract: number): void {
    this.stats.spirit -= spiritToSubtract
    this.abilityPoints += spiritToSubtract
  }

  subtractConstitution(constitutionToSubtract: number): void {
    this.stats.constitution -= constitutionToSubtract
    this.abilityPoints += constitutionToSubtract
  }

  //region runes

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

  //region levels and points

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
