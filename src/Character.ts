import { Stats } from "./Stats";

export class Character {
    baseStats: Stats = new Stats();

    addDexterity(dexterityToAdd: number) { this.baseStats.dexterity += dexterityToAdd }
    addStrength(strengthToAdd: number) { this.baseStats.strength += strengthToAdd }
    addIntelligence(intelligenceToAdd: number) { this.baseStats.intelligence += intelligenceToAdd }
    addSpirit(spiritToAdd: number) { this.baseStats.spirit += spiritToAdd }
    addConstitution(constitutionToAdd: number) { this.baseStats.constitution += constitutionToAdd }

    subtractDexterity(dexterityToSubtract: number) { this.baseStats.dexterity -= dexterityToSubtract }
    subtractStrength(strengthToSubtract: number) { this.baseStats.strength -= strengthToSubtract }
    subtractIntelligence(intelligenceToSubtract: number) { this.baseStats.intelligence -= intelligenceToSubtract }
    subtractSpirit(spiritToSubtract: number) { this.baseStats.spirit -= spiritToSubtract }
    subtractConstitution(constitutionToSubtract: number) { this.baseStats.constitution -= constitutionToSubtract }
}