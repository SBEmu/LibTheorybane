import {Rune} from './Rune'
import {Stat} from './Stat'
import {Character} from './Character'

export class Stats {
  private readonly _dexterity: StatInternal
  private readonly _strength: StatInternal
  private readonly _intelligence: StatInternal
  private readonly _spirit: StatInternal
  private readonly _constitution: StatInternal

  constructor(character: Character) {
    this._dexterity = new StatInternal(character)
    this._strength = new StatInternal(character)
    this._intelligence = new StatInternal(character)
    this._spirit = new StatInternal(character)
    this._constitution = new StatInternal(character)
  }

  get dexterity(): Stat {
    return this._dexterity
  }

  get strength(): Stat {
    return this._strength
  }

  get intelligence(): Stat {
    return this._intelligence
  }

  get spirit(): Stat {
    return this._spirit
  }

  get constitution(): Stat {
    return this._constitution
  }

  applyRune(rune: Rune): void {
    this._dexterity.max = this._dexterity.max + rune.getMaxDexterityModifier()
    this._dexterity.value += rune.getDexterityModifier()
    this._strength.max += rune.getMaxStrengthModifier()
    this._strength.value += rune.getStrengthModifier()
    this._intelligence.max += rune.getMaxIntelligenceModifier()
    this._intelligence.value += rune.getIntelligenceModifier()
    this._spirit.max += rune.getMaxSpiritModifier()
    this._spirit.value += rune.getSpiritModifier()
    this._constitution.max += rune.getMaxConstitutionModifier()
    this._constitution.value += rune.getConstitutionModifier()
  }

  endCreation(): void {
    this._dexterity.min = 40
    this._strength.min = 40
    this._intelligence.min = 40
    this._spirit.min = 40
    this._constitution.min = 40
  }
}

class StatInternal extends Stat {
  get min(): number {
    return super.min
  }
  set min(value: number) {
    this._min = value
  }

  get max(): number {
    return super.max
  }
  set max(value: number) {
    this._max = value
  }

  get value(): number {
    return super.value
  }
  set value(value: number) {
    this._value = value
  }
}
