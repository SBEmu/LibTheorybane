import {Bonuses} from './Bonuses'

interface RuneJson {
  bonuses: object
}

export class Rune {
  private abilityPointCost = 0
  private isCreationOnlyRune = false

  private maxDexterityModifier = 0
  private dexterityModifier = 0
  private maxStrengthModifier = 0
  private strengthModifier = 0
  private maxIntelligenceModifier = 0
  private intelligenceModifier = 0
  private maxSpiritModifier = 0
  private spiritModifier = 0
  private maxConstitutionModifier = 0
  private constitutionModifier = 0

  private bonuses: Bonuses = new Bonuses()

  static fromJSON(json: RuneJson): Rune {
    const rune = new Rune()

    return Object.assign(rune, json, {
      bonuses: Bonuses.fromJSON(json.bonuses)
    })
  }

  getAbilityPointCost(): number {
    return this.abilityPointCost
  }

  getIsCreationOnlyRune(): boolean {
    return this.isCreationOnlyRune
  }

  getDexterityModifier(): number {
    return this.dexterityModifier
  }

  getMaxDexterityModifier(): number {
    return this.maxDexterityModifier
  }

  getStrengthModifier(): number {
    return this.strengthModifier
  }

  getMaxStrengthModifier(): number {
    return this.maxStrengthModifier
  }

  getIntelligenceModifier(): number {
    return this.intelligenceModifier
  }

  getMaxIntelligenceModifier(): number {
    return this.maxIntelligenceModifier
  }

  getSpiritModifier(): number {
    return this.spiritModifier
  }

  getMaxSpiritModifier(): number {
    return this.maxSpiritModifier
  }

  getConstitutionModifier(): number {
    return this.constitutionModifier
  }

  getMaxConstitutionModifier(): number {
    return this.maxConstitutionModifier
  }

  getBonuses(): Bonuses {
    return this.bonuses
  }
}
