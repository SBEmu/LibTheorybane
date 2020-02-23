export class Stats {
    minDexterity: number = 35;
    _dexterity: number = 40;
    maxDexterity: number = 100;

    minStrength: number = 35;
    _strength: number = 40;
    maxStrength: number = 100;

    minIntelligence: number = 35;
    _intelligence: number = 40;
    maxIntelligence: number = 100;

    minSpirit: number = 35;
    _spirit: number = 40;
    maxSpirit: number = 100;

    minConstitution: number = 35;
    _constitution: number = 40;
    maxConstitution: number = 100;

    get dexterity(): number {return this._dexterity }
    set dexterity(value: number) {
        if (value < this.minDexterity || value > this.maxDexterity) {
            throw "new value not within allowed limits for dexterity"
        }
        this._dexterity = value;
    }

    get strength(): number { return this._strength }
    set strength(value: number) {
        if (value < this.minStrength || value > this.maxStrength) {
            throw "new value not within allowed limits for strength"
        }
        this._strength = value;
    }

    get intelligence(): number { return this._intelligence }
    set intelligence(value: number) {
        if (value < this.minIntelligence || value > this.maxIntelligence) {
            throw "new value not within allowed limits for intelligence"
        }
        this._intelligence = value;
    }

    get spirit(): number { return this._spirit }
    set spirit(value: number) {
        if (value < this.minSpirit || value > this.maxSpirit) {
            throw "new value not within allowed limits for spirit"
        }
        this._spirit = value;
    }

    get constitution(): number { return this._constitution }
    set constitution(value: number) {
        if (value < this.minConstitution || value > this.maxConstitution) {
            throw "new value not within allowed limits for constitution"
        }
        this._constitution = value;
    }
}