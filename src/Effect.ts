import {Stat} from './Stat'

interface IEffect {
  name: string
  stats: Stat
  rank: number
  rankOneValue: number
  rankFortyValue: number
  stackCategory: string
  tags: string[]
}

export class Effect implements IEffect {
  constructor(
    public name: string,
    public stats: Stat,
    public rank: number,
    public rankOneValue: number,
    public rankFortyValue: number,
    public stackCategory: string,
    public tags: string[]
  ) {}
}
