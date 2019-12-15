import {Effect} from './Effect'
import {CharClass} from './CharClass'

interface IPower {
  name: string
  charClass: CharClass
  required: {[SkilorPowerNameWithValue: string]: number} // This name for this dict is temporary
  granted: number
  baseRank: number
  maxRank: number
  powerType: string
  cost: {[CostTypeAndValue: string]: number} // The name for this dict is temporary
  castTime: number
  recycleTime: number
  requiresHitRoll: boolean
  targetType: string
  range: number
  damageType: string // May need to be its own module/class for other uses.
  baseDamageAmount: number // Depending on the rank of the power we can create a method to update BaseDamageAmount and MaxDamageAmount
  maxDamageAmount: number // Depending on the rank of the power we can create a method to update BaseDamageAmount and MaxDamageAmount
  effects: Effect
}

export class Power {
  constructor(
    public name: string,
    public required: {[SkilorPowerNameWithValue: string]: number},
    public granted: number,
    public baseRank: number,
    public maxRank: number,
    public powerType: string,
    public cost: {[CostTypeAndValue: string]: number},
    public castTime: number,
    public recycleTime: number,
    public requiresHitRoll: boolean,
    public targetType: string,
    public range: number,
    public damageType: string,
    public baseDamageAmount: number,
    public maxDamageAmount: number,
    public effects: Effect
  ) {}
}
