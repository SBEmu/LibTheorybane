import Race from './Race'
import {Stat, statDict} from './Stat'
import {CharClass} from './CharClass'
import {Skill} from './Skill'
import {Power} from './Power'
import {Effect} from './Effect'
import {Discipline} from './Discipline'
import {Equipment} from './Equipment'

interface ICharacter {
  // Fields left optional.
  name: string
  race?: Race
  charClass?: CharClass
  level?: number
  skills?: Skill
  equipment?: Equipment
  powers?: Power // May not need this as powers are determined by charClass
  charStats?: Stat
  effects?: Effect
  disciplines?: Discipline
}

class Character implements ICharacter {
  // Optional parameters are meant to be optional. Not sure if this is the best way to make them optional however.

  constructor(
    public name: string,
    public race?: Race,
    public charClass?: CharClass,
    public level?: number,
    public skills?: Skill,
    public equipment?: Equipment,
    public powers?: Power,
    public charStats?: Stat,
    public effects?: Effect,
    public disciplines?: Discipline
  ) {}
}

// Below is for testing purposes only
const me = new Character('Kari')

me.race?.setRace('Human')
me.charClass?.setClass('Assassin')
me.level = 75 // Character needs method to update the avaliable skill/training points for level. Going to have baseLevel and maxLevel
