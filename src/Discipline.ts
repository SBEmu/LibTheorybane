import Race from './Race'
import {CharClass} from './CharClass'
import {Stat} from './Stat'
import {Power} from './Power'
import {Skill} from './Skill'

interface IDiscipline {
  name: string
  races: Race
  classes: CharClass
  stats: Stat
  powers: Power
  skills: Skill
  // Add DropZone and coordinates as well as TrainerZone and its coordinates?
}

export class Discipline implements IDiscipline {
  constructor(
    public name: string,
    public races: Race,
    public classes: CharClass,
    public stats: Stat,
    public powers: Power,
    public skills: Skill
  ) {}
}
