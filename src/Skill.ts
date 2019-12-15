import {Power} from './Power'
import Race from './Race'
import {Discipline} from './Discipline'

interface ISkill {
  // Optional variable types for testing
  name: string
  value: number
  primary: number
  secondary: number
  maxValue?: number
  powers?: Power
}

export class Skill implements ISkill {
  constructor(
    public name: string,
    public value: number,
    public primary: number,
    public secondary: number,
    public maxValue?: number
  ) {}

  updateBaseValue(characterInt: number) {
    this.value = (75 + 3 * characterInt + 2 * this.secondary) / 20
    return console.log('Value updated')
  }

  setMaxValue(
    characterInt: number,
    characterRace: Race,
    characterDisciplines?: Discipline
  ) {
    let intValue = characterInt / 10
    //intValue +=  character_race.Skills?.Value | Skills has to be non-optional for this to work but is optional for some testing atm.
    //intValue += characterDisciplines?.Skills.Value
    intValue += 50
    intValue += characterInt
    intValue += 10
    this.maxValue = intValue

    return console.log(this.maxValue)
  }

  trainSkill(userInput: void) {
    // Did some testing with this. Should work but it's based off the wiki info.
    if (this.value < 10) {
      this.value += 2
      console.log(this.value)
    } else if (this.value >= 10) {
      if (this.value < 90) {
        this.value += 1
        console.log(this.value)
      } else if (this.value >= 90) {
        if (this.value < 134) {
          this.value += 0.5
          console.log(this.value)
        } else if (this.value >= 134) {
          this.value += 0.2
          console.log(this.value)
        }
      }
    }
    return console.log('Skill increased by one point')
  }

  untrainSkill(userInput: void) {
    return console.log('Skill decreased by one point')
  }
}

// Below is for testing purposes only.
const assassinFocus = new Skill('Shadowmastery', 24, 24, 24)
