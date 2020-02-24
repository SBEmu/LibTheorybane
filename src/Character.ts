import { Stats } from "./Stats";
import {Rune} from "./Rune";

export class Character {
    stats: Stats = new Stats();

    addDexterity(dexterityToAdd: number) { this.stats.dexterity += dexterityToAdd }
    addStrength(strengthToAdd: number) { this.stats.strength += strengthToAdd }
    addIntelligence(intelligenceToAdd: number) { this.stats.intelligence += intelligenceToAdd }
    addSpirit(spiritToAdd: number) { this.stats.spirit += spiritToAdd }
    addConstitution(constitutionToAdd: number) { this.stats.constitution += constitutionToAdd }

    subtractDexterity(dexterityToSubtract: number) { this.stats.dexterity -= dexterityToSubtract }
    subtractStrength(strengthToSubtract: number) { this.stats.strength -= strengthToSubtract }
    subtractIntelligence(intelligenceToSubtract: number) { this.stats.intelligence -= intelligenceToSubtract }
    subtractSpirit(spiritToSubtract: number) { this.stats.spirit -= spiritToSubtract }
    subtractConstitution(constitutionToSubtract: number) { this.stats.constitution -= constitutionToSubtract }

    applyRune(rune: Rune) {
        this.stats.applyRune(rune)
    }
}