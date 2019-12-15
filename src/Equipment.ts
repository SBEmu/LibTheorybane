import {Affix} from './Affix'
import {Skill} from './Skill'
import {Stat} from './Stat'
import Race from './Race'
import {Discipline} from './Discipline'
import {CharClass} from './CharClass'

interface IWeapon {
  // Optional parameters are meant to be optional. Not sure if this is the best way to make them optional however.
  wType: string
  name: string
  skillRequirement: Skill
  minDamage: number
  maxDamage: number
  speed: number
  basedStat: Stat
  durability: number
  weight: number
  prefix?: Affix
  suffix?: Affix
  race?: Race
  discipline?: Discipline
  classRequirement?: CharClass
}

class Weapon implements IWeapon {
  constructor(
    public wType: string,
    public name: string,
    public skillRequirement: Skill,
    public minDamage: number,
    public maxDamage: number,
    public speed: number,
    public basedStat: Stat,
    public durability: number,
    public weight: number,
    public prefix?: Affix,
    public suffix?: Affix,
    public race?: Race,
    public discipline?: Discipline,
    public classRequirement?: CharClass
  ) {}
}

interface IArmor {
  // Optional parameters are meant to be optional. Not sure if this is the best way to make them optional however.
  aType: string
  name: string
  skillRequirement: Skill
  defense: number
  weight: string
  slashing: number
  piercing: number
  crushing: number
  firstAdditional: {[Stat: string]: number}
  prefix?: Affix
  suffix?: Affix
  secondAdditional?: {[Stat: string]: number}
  race?: Race
  discipline?: Discipline
  classRequirement?: CharClass
}

class Armor implements IArmor {
  // Optional parameters are meant to be optional. Not sure if this is the best way to make them optional however.
  constructor(
    public aType: string,
    public name: string,
    public skillRequirement: Skill,
    public defense: number,
    public weight: string,
    public slashing: number,
    public piercing: number,
    public crushing: number,
    public firstAdditional: {[Stat: string]: number},
    public prefix?: Affix,
    public suffix?: Affix,
    public secondAdditional?: {[Stat: string]: number},
    public race?: Race,
    public discipline?: Discipline,
    public classRequirement?: CharClass
  ) {}
}

interface IJewel {
  // Optional parameters are meant to be optional. Not sure if this is the best way to make them optional however.
  name: string
  prefix?: Affix
  suffix?: Affix
}

class Jewel implements IJewel {
  constructor(
    public name: string,
    public prefix?: Affix,
    public suffix?: Affix
  ) {}
}

interface IEquipment {
  // Optional parameters are meant to be optional. Not sure if this is the best way to make them optional however.
  chest: Armor
  gloves: Armor
  helm: Armor
  boots: Armor
  firstWeapon: Weapon
  necklace: Jewel
  firstRing: Jewel
  secondRing: Jewel
  secondWeapon?: Weapon
  shield?: Armor
  robe?: Armor
  arms?: Armor
  legs?: Armor
}

export class Equipment implements IEquipment {
  // Optional parameters are meant to be optional. Not sure if this is the best way to make them optional however.
  constructor(
    public chest: Armor,
    public gloves: Armor,
    public helm: Armor,
    public boots: Armor,
    public firstWeapon: Weapon,
    public necklace: Jewel,
    public firstRing: Jewel,
    public secondRing: Jewel,
    public secondWeapon?: Weapon,
    public shield?: Armor,
    public robe?: Armor,
    public arms?: Armor,
    public legs?: Armor
  ) {}
}
