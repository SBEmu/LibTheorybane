import {Skill} from './Skill'
import {Stat} from './Stat'
import {Discipline} from './Discipline'
import {Power} from './Power'

const classes = ['Assassin', 'Barbarian', 'Crusader'] // Temporary list just to test setClass method.

interface ICharClass {
  name: string
  stats: Stat
  powers: Power
  skills: Skill
  disciplines: Discipline
}

export class CharClass implements ICharClass {
  constructor(
    public name: string,
    public stats: Stat,
    public powers: Power,
    public skills: Skill,
    public disciplines: Discipline
  ) {}

  setClass(classInput: string) {
    // Type string for testing.
    for (const charclass of classes) {
      if (classInput === charclass) {
        // Empty for now
      }
    }
    return console.log('Class has been set')
  }
}
