import {Character} from './Character'

export class Stat {
  protected _min = 35
  protected _max = 100
  protected _value = 40
  private _character: Character

  constructor(character: Character) {
    this._character = character
  }

  get min(): number {
    return this._min
  }

  get max(): number {
    return this._max
  }

  get value(): number {
    return this._value
  }

  toMaximum(): void {
    const toAdd = Math.min(
      this._max - this._value,
      this._character.getAbilityPoints()
    )
    this.add(toAdd)
  }

  toMinimum(): void {
    const toSubtract = this._value - this._min
    this.subtract(toSubtract)
  }

  add(toAdd: number): void {
    if (this._value + toAdd > this._max) {
      throw new StatLimitError('cannot add points, already at maximum')
    }

    this._character.allocateStats(toAdd)
    this._value += toAdd
  }

  subtract(toSubtract: number): void {
    if (this._value - toSubtract < this._min) {
      throw new StatLimitError('cannot subtract points, already at minimum')
    }

    this._character.allocateStats(-toSubtract)
    this._value -= toSubtract
  }
}

export class StatLimitError extends Error {}
