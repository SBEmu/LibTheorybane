import {Stat} from './Stat'

interface IAffix {
  name: string
  affixType: string
  stats: Stat
}

export class Affix implements IAffix {
  constructor(
    public name: string,
    public affixType: string,
    public stats: Stat
  ) {}
}
