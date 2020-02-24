import {Stats} from './Stats'
import {Rune} from './Rune'

export class Character {
  stats: Stats = new Stats()

  //#region add stats

  addDexterity(dexterityToAdd: number): void {
    this.stats.dexterity += dexterityToAdd
  }

  addStrength(strengthToAdd: number): void {
    this.stats.strength += strengthToAdd
  }

  addIntelligence(intelligenceToAdd: number): void {
    this.stats.intelligence += intelligenceToAdd
  }

  addSpirit(spiritToAdd: number): void {
    this.stats.spirit += spiritToAdd
  }

  addConstitution(constitutionToAdd: number): void {
    this.stats.constitution += constitutionToAdd
  }

  //#region subtract stats

  subtractDexterity(dexterityToSubtract: number): void {
    this.stats.dexterity -= dexterityToSubtract
  }

  subtractStrength(strengthToSubtract: number): void {
    this.stats.strength -= strengthToSubtract
  }

  subtractIntelligence(intelligenceToSubtract: number): void {
    this.stats.intelligence -= intelligenceToSubtract
  }

  subtractSpirit(spiritToSubtract: number): void {
    this.stats.spirit -= spiritToSubtract
  }

  subtractConstitution(constitutionToSubtract: number): void {
    this.stats.constitution -= constitutionToSubtract
  }

  //#region runes

  applyRune(rune: Rune): void {
    this.stats.applyRune(rune)
  }
}
