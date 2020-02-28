export class Bonuses {
  private level1To10Trains: number = 0
  private level11To59Trains: number = 0
  private postCreationAbilityPoints: number = 0

  static fromJSON(json: object): Bonuses {
    const bonuses = new Bonuses()
    return Object.assign(bonuses, json)
  }

  /** combines bonuses from an incoming source with existing */
  addBonuses(bonuses: Bonuses): void {
    this.level1To10Trains = this.level1To10Trains + bonuses.level1To10Trains
    this.level11To59Trains = this.level11To59Trains + bonuses.level11To59Trains
    this.postCreationAbilityPoints =
      this.postCreationAbilityPoints + bonuses.postCreationAbilityPoints
  }

  getLevel1To10Trains(): number {
    return this.level1To10Trains
  }

  getLevel11To59Trains(): number {
    return this.level11To59Trains
  }

  getPostCreationAbilityPoints(): number {
    return this.postCreationAbilityPoints
  }
}
