export const statDict: {[Stat: string]: number} = {
  strength: 0,
  strengthMax: 0,
  dexterity: 24,
  dexterityMax: 0,
  intelligence: 0,
  intelligenceMax: 0,
  spirit: 0,
  spiritMax: 0,
  constitution: 0,
  constitutionMax: 0,
  attackRating: 0,
  attackSpeed: 0,
  defense: 0,
  armorDefense: 0,
  shieldDefense: 0,
  flatDefense: 0,
  health: 0,
  healthRegen: 0,
  stamina: 0,
  staminaRegen: 0,
  mana: 0,
  manaRegen: 0,
  movementSpeed: 0,
  attackDamage: 0,
  weaponDamage: 0,
  powerDamage: 0
}

interface IStat {
  stat: {[Stat: string]: number}
}

export class Stat implements IStat {
  constructor(public stat: {[Stat: string]: number}) {
    this.stat = statDict
  }

  getKeys() {
    for (const key in this.stat) {
      console.log(key)
    }
  }

  getValues() {
    for (const key in this.stat) {
      const value = statDict[key]
      console.log(value)
    }
  }

  getBuffedStat() {
    //60 is the value of Perfect Concoction potions
    this.stat.strength += 60
    this.stat.dexterity += 60
    this.stat.constitution += 60
    this.stat.intelligence += 60
    this.stat.spirit += 60
  }

  setAddStat(userInput: string) {
    // Set to string type for testing
    for (const key in this.stat) {
      if (userInput === key) {
        //let key_string = key.toString()
        //this.stat[key]
        this.stat[key] += 1
        console.log(this.stat[key])
      }
    }
  }

  setSubtractStat(userInput: string) {
    // Set to string type for testing
    for (const key in this.stat) {
      if (userInput === key) {
        //let key_string = key.toString()
        //this.stat[key]
        this.stat[key] -= 1
        console.log(this.stat[key])
      }
    }
  }
}
