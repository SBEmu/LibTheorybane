import {Bonuses} from './Bonuses'

interface RuneJson {
  bonuses: any
}

export class Rune {
  private abilityPointCost: number = 0
  private isCreationOnlyRune: boolean = false

  private maxDexterityModifier: number = 0
  private dexterityModifier: number = 0
  private maxStrengthModifier: number = 0
  private strengthModifier: number = 0
  private maxIntelligenceModifier: number = 0
  private intelligenceModifier: number = 0
  private maxSpiritModifier: number = 0
  private spiritModifier: number = 0
  private maxConstitutionModifier: number = 0
  private constitutionModifier: number = 0

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
