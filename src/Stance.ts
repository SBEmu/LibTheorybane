interface IStance {
  name: string
  defenseBase: number
  defenseRange: number
  rank?: number
}

class Stance implements IStance {
  // Optional variable types for testing

  constructor(
    public name: string,
    public defenseBase: number,
    public defenseRange: number,
    public rank?: number
  ) {}
}

// Below is variables and list i made for some testing.
const FighterDefense = new Stance('FighterDefense', 1.09, 0.16)
const FighterOffensive = new Stance('FighterOffensive', 0.82, -0.32)
const HealerDefense = new Stance('HealerDefense', 1.09, 0.16)
const HealerOffensive = new Stance('HealerOffensive', 0.91, -0.16)

const stances: Stance[] = [
  FighterDefense,
  FighterOffensive,
  HealerDefense,
  HealerOffensive
]

console.log(stances[0].name)
