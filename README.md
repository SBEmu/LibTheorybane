# LibTheorybane

This project is currently a placeholder for a library for the [Theorybane](https://github.com/SBEmu/Theorybane) character calculator.

## Character Calculator

The goal of this project is to have a robust and high-fidelity character calculator that will be able to be driven both
programmatically as well as by a web-based UI. Some of the ideas around this are inspired by the [Path of Exile](https://www.pathofexile.com/)
game's unofficial calculator [Path of Building](https://github.com/Openarl/PathOfBuilding).

Ideally the character calculator will be able to display useful metrics for a build that is buffed, equipped, and trained:
 * Defense
 * Spell/attack DPS including procs and/or mask casting
 * Passive defense and mitigations
 * Health and healing
 
Initially the goal would be to show what the character's stats would be after creation, and then progress to trained/equipped/buffed/etc.

## Programmatic access/matrices

After being able to create a character and get useful stats, an interesting use case would be to compare/diff two builds. You could
create two characters programmatically, and then have a list of "what-if" between the two, e.g. comparing a baseline of a rogue huntress to a
huntress (the stats are made up):
```
+ 225 HP
+ Parry
- Sneak
- Stalk
- Dodge
```

You could extend this further by having the ability to build a character with a list of "intents", and then substituting steps with a matrix:
* Select the `[Aelfborn, Aracoix, Centaur, Elf, Half Giant, Human, Irekei]` race
* Select the `fighter` class
* Maximize starting `constitution`
* Maximize starting `dexterity`
* Promote to `Huntress`
* Raise `level` to 75
* Raise `intelligence` to 60
* Maximize `constitution`
* Maximize `dexterity`
* Train <skills>

And then you could compare the resulting stat spread and benefits of each race relative to the other fairly easily.

## Building and running tests

Install [Node](https://nodejs.org/en/) 12.x, clone this repo, and in the repo directory:
```shell script
npm install
npm run build
npm run test
```

## Done and todo:
* [x] Basic stats
* [x] Basic rune implementation
* [ ] Ability points calculation
* [ ] Skill point calculation/training
* [ ] Powers
* [ ] Equipment (prerequisites and bonuses)
* [ ] Effects
* [ ] Character attributes
  * [ ] HP/Mana/Stamina
  * [ ] Resistances
  * [ ] Weapon damage (styled, plain)
  * [ ] Spell damage by spell

## Contributing

Contributions are welcome. Prior to contributing large changes, please have a quick discussion with us by opening an issue to confirm
that the change would be desirable.

If you add new functionality, please add tests. Contributions are required to have the CI and all tests pass in the pull request prior to merge.
