import {Stat, statDict} from './Stat'
import {Skill} from './Skill'

const races = ['human', 'elf', 'half giant'] // Temporary list just to test setRace method.

interface IRace {
  // Some values are optional to allow for testing.
  stats: Stat
  skills?: Skill
  name?: string
}

export default class Race implements IRace {
  // Optional variable types for testing
  constructor(
    public stats: Stat,
    public skills?: Skill,
    public name?: string
  ) {}

  setRace(raceInput: string) {
    // Type string for testing
    for (var race of races) {
      if (raceInput === race) {
        return console.log(race)
      }
    }
    if (raceInput == 'human') {
      // This way of doing it is less than optimal because i would have to create a funciton for every race. The above is a better i think.
      //     this.Strength = race.Value or race['Value'] depending on how data is formatted;
      //     this.StrengthMax = race.Value or race['Value'] depending on how data is formatted;
      //     this.Dexterity = race.Value or race['Value'] depending on how data is formatted;
      //     this.DexterityMax = race.Value or race['Value'] depending on how data is formatted;
      //     this.Constitution = race.Value or race['Value'] depending on how data is formatted;
      //     this.ConstitutionMax = race.Value or race['Value'] depending on how data is formatted;
      //     this.Intelligence = race.Value or race['Value'] depending on how data is formatted;
      //     this.IntelligenceMax = race.Value or race['Value'] depending on how data is formatted;
      //     this.Spirit = race.Value or race['Value'] depending on how data is formatted;
      //     this.SpiritMax = race.Value or race['Value'] depending on how data is formatted;
      //     this.Health = race.Value or race['Value'] depending on how data is formatted;
      //     this.HealthRegen = race.Value or race['Value'] depending on how data is formatted;
      //     this.Stamina = race.Value or race['Value'] depending on how data is formatted;
      //     this.StaminaRegen = race.Value or race['Value'] depending on how data is formatted;
      //     this.Mana = race.Value or race['Value'] depending on how data is formatted;
      //     this.ManaRegen = race.Value or race['Value'] depending on how data is formatted;
      //     this.MovementSpeed = race.Value or race['Value'] depending on how data is formatted;
    }
    return console.log('e')
  }
}

// Below this is for testing purposes only
const w = new Race(new Stat(statDict))

w.stats.stat['Strength'] = 24
