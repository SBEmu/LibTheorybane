module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(198);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 187:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Stats_1 = __webpack_require__(829);
const Bonuses_1 = __webpack_require__(799);
const PointUtils_1 = __webpack_require__(986);
class Character {
    constructor() {
        this.stats = new Stats_1.Stats();
        this.bonuses = new Bonuses_1.Bonuses();
        this.abilityPoints = 30;
        this.level = 1;
        this.trainingPoints = 0;
    }
    //region add stats
    addDexterity(dexterityToAdd) {
        if (dexterityToAdd > this.abilityPoints) {
            throw new AbilityPointError('not enough points remaining');
        }
        this.abilityPoints -= dexterityToAdd;
        this.stats.dexterity += dexterityToAdd;
    }
    addStrength(strengthToAdd) {
        if (strengthToAdd > this.abilityPoints) {
            throw new AbilityPointError('not enough points remaining');
        }
        this.abilityPoints -= strengthToAdd;
        this.stats.strength += strengthToAdd;
    }
    addIntelligence(intelligenceToAdd) {
        if (intelligenceToAdd > this.abilityPoints) {
            throw new AbilityPointError('not enough points remaining');
        }
        this.abilityPoints -= intelligenceToAdd;
        this.stats.intelligence += intelligenceToAdd;
    }
    addSpirit(spiritToAdd) {
        if (spiritToAdd > this.abilityPoints) {
            throw new AbilityPointError('not enough points remaining');
        }
        this.abilityPoints -= spiritToAdd;
        this.stats.spirit += spiritToAdd;
    }
    addConstitution(constitutionToAdd) {
        if (constitutionToAdd > this.abilityPoints) {
            throw new AbilityPointError('not enough points remaining');
        }
        this.abilityPoints -= constitutionToAdd;
        this.stats.constitution += constitutionToAdd;
    }
    //region subtract stats
    subtractDexterity(dexterityToSubtract) {
        this.stats.dexterity -= dexterityToSubtract;
        this.abilityPoints += dexterityToSubtract;
    }
    subtractStrength(strengthToSubtract) {
        this.stats.strength -= strengthToSubtract;
        this.abilityPoints += strengthToSubtract;
    }
    subtractIntelligence(intelligenceToSubtract) {
        this.stats.intelligence -= intelligenceToSubtract;
        this.abilityPoints += intelligenceToSubtract;
    }
    subtractSpirit(spiritToSubtract) {
        this.stats.spirit -= spiritToSubtract;
        this.abilityPoints += spiritToSubtract;
    }
    subtractConstitution(constitutionToSubtract) {
        this.stats.constitution -= constitutionToSubtract;
        this.abilityPoints += constitutionToSubtract;
    }
    //region runes
    applyRune(rune) {
        if (this.abilityPoints - rune.getAbilityPointCost() < 0) {
            throw new AbilityPointError('too few points to apply rune');
        }
        if (rune.getIsCreationOnlyRune() && this.level > 1) {
            throw new LevelError('cannot apply creation runes after creation');
        }
        this.abilityPoints -= rune.getAbilityPointCost();
        this.bonuses.addBonuses(rune.getBonuses());
        this.stats.applyRune(rune);
    }
    //region levels and points
    endCreation() {
        this.setLevel(10);
    }
    setLevel(level) {
        if (level < this.level) {
            throw new LevelError('level cannot be less than current level');
        }
        if (level > 75) {
            throw new LevelError('provided level is greater than max level');
        }
        if (this.level === 1) {
            this._endCreation();
        }
        this.abilityPoints += PointUtils_1.getAbilityPointsForLevelIncrease(this.level, level);
        this.trainingPoints += PointUtils_1.getTrainsForLevelIncrease(this.level, level, this.bonuses);
        this.level = level;
    }
    _endCreation() {
        this.abilityPoints += this.bonuses.getPostCreationAbilityPoints();
    }
    getAbilityPoints() {
        return this.abilityPoints;
    }
    getTrainingPoints() {
        return this.trainingPoints;
    }
}
exports.Character = Character;
class AbilityPointError extends Error {
}
exports.AbilityPointError = AbilityPointError;
class LevelError extends Error {
}
exports.LevelError = LevelError;


/***/ }),

/***/ 198:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bonuses_1 = __webpack_require__(799);
exports.Bonuses = Bonuses_1.Bonuses;
var Character_1 = __webpack_require__(187);
exports.Character = Character_1.Character;
var Rune_1 = __webpack_require__(577);
exports.Rune = Rune_1.Rune;
var Stats_1 = __webpack_require__(829);
exports.Stats = Stats_1.Stats;


/***/ }),

/***/ 577:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Bonuses_1 = __webpack_require__(799);
class Rune {
    constructor() {
        this.abilityPointCost = 0;
        this.isCreationOnlyRune = false;
        this.maxDexterityModifier = 0;
        this.dexterityModifier = 0;
        this.maxStrengthModifier = 0;
        this.strengthModifier = 0;
        this.maxIntelligenceModifier = 0;
        this.intelligenceModifier = 0;
        this.maxSpiritModifier = 0;
        this.spiritModifier = 0;
        this.maxConstitutionModifier = 0;
        this.constitutionModifier = 0;
        this.bonuses = new Bonuses_1.Bonuses();
    }
    static fromJSON(json) {
        const rune = new Rune();
        return Object.assign(rune, json, {
            bonuses: Bonuses_1.Bonuses.fromJSON(json.bonuses)
        });
    }
    getAbilityPointCost() {
        return this.abilityPointCost;
    }
    getIsCreationOnlyRune() {
        return this.isCreationOnlyRune;
    }
    getDexterityModifier() {
        return this.dexterityModifier;
    }
    getMaxDexterityModifier() {
        return this.maxDexterityModifier;
    }
    getStrengthModifier() {
        return this.strengthModifier;
    }
    getMaxStrengthModifier() {
        return this.maxStrengthModifier;
    }
    getIntelligenceModifier() {
        return this.intelligenceModifier;
    }
    getMaxIntelligenceModifier() {
        return this.maxIntelligenceModifier;
    }
    getSpiritModifier() {
        return this.spiritModifier;
    }
    getMaxSpiritModifier() {
        return this.maxSpiritModifier;
    }
    getConstitutionModifier() {
        return this.constitutionModifier;
    }
    getMaxConstitutionModifier() {
        return this.maxConstitutionModifier;
    }
    getBonuses() {
        return this.bonuses;
    }
}
exports.Rune = Rune;


/***/ }),

/***/ 799:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Bonuses {
    constructor() {
        this.level1To10Trains = 0;
        this.level11To59Trains = 0;
        this.postCreationAbilityPoints = 0;
    }
    static fromJSON(json) {
        const bonuses = new Bonuses();
        return Object.assign(bonuses, json);
    }
    /** combines bonuses from an incoming source with existing */
    addBonuses(bonuses) {
        this.level1To10Trains = this.level1To10Trains + bonuses.level1To10Trains;
        this.level11To59Trains = this.level11To59Trains + bonuses.level11To59Trains;
        this.postCreationAbilityPoints =
            this.postCreationAbilityPoints + bonuses.postCreationAbilityPoints;
    }
    getLevel1To10Trains() {
        return this.level1To10Trains;
    }
    getLevel11To59Trains() {
        return this.level11To59Trains;
    }
    getPostCreationAbilityPoints() {
        return this.postCreationAbilityPoints;
    }
}
exports.Bonuses = Bonuses;


/***/ }),

/***/ 829:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Stats {
    constructor() {
        this.minDexterity = 35;
        this._dexterity = 40;
        this.maxDexterity = 100;
        this.minStrength = 35;
        this._strength = 40;
        this.maxStrength = 100;
        this.minIntelligence = 35;
        this._intelligence = 40;
        this.maxIntelligence = 100;
        this.minSpirit = 35;
        this._spirit = 40;
        this.maxSpirit = 100;
        this.minConstitution = 35;
        this._constitution = 40;
        this.maxConstitution = 100;
    }
    get dexterity() {
        return this._dexterity;
    }
    set dexterity(value) {
        if (value < this.minDexterity || value > this.maxDexterity) {
            throw new StatLimitError('new value not within allowed limits for dexterity');
        }
        this._dexterity = value;
    }
    get strength() {
        return this._strength;
    }
    set strength(value) {
        if (value < this.minStrength || value > this.maxStrength) {
            throw new StatLimitError('new value not within allowed limits for strength');
        }
        this._strength = value;
    }
    get intelligence() {
        return this._intelligence;
    }
    set intelligence(value) {
        if (value < this.minIntelligence || value > this.maxIntelligence) {
            throw new StatLimitError('new value not within allowed limits for intelligence');
        }
        this._intelligence = value;
    }
    get spirit() {
        return this._spirit;
    }
    set spirit(value) {
        if (value < this.minSpirit || value > this.maxSpirit) {
            throw new StatLimitError('new value not within allowed limits for spirit');
        }
        this._spirit = value;
    }
    get constitution() {
        return this._constitution;
    }
    set constitution(value) {
        if (value < this.minConstitution || value > this.maxConstitution) {
            throw new StatLimitError('new value not within allowed limits for constitution');
        }
        this._constitution = value;
    }
    applyRune(rune) {
        this.maxDexterity += rune.getMaxDexterityModifier();
        this.dexterity += rune.getDexterityModifier();
        this.maxStrength += rune.getMaxStrengthModifier();
        this.strength += rune.getStrengthModifier();
        this.maxIntelligence += rune.getMaxIntelligenceModifier();
        this.intelligence += rune.getIntelligenceModifier();
        this.maxSpirit += rune.getMaxSpiritModifier();
        this.spirit += rune.getSpiritModifier();
        this.maxConstitution += rune.getMaxConstitutionModifier();
        this.constitution += rune.getConstitutionModifier();
    }
}
exports.Stats = Stats;
class StatLimitError extends Error {
}
exports.StatLimitError = StatLimitError;


/***/ }),

/***/ 986:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __webpack_require__(187);
function getTrainsForLevelIncrease(oldLevel, newLevel, bonuses) {
    const currentTrainsForLevel = getTrainsForLevel(oldLevel, bonuses);
    const newTrainsForLevel = getTrainsForLevel(newLevel, bonuses);
    return newTrainsForLevel - currentTrainsForLevel;
}
exports.getTrainsForLevelIncrease = getTrainsForLevelIncrease;
function getAbilityPointsForLevelIncrease(oldLevel, newLevel) {
    return getAbilityPointsForLevel(newLevel) - getAbilityPointsForLevel(oldLevel);
}
exports.getAbilityPointsForLevelIncrease = getAbilityPointsForLevelIncrease;
function getTrainsForLevel(level, bonuses) {
    let bonusTrains = 0;
    const levelsForLowerBonus = Math.min(level, 10);
    bonusTrains += (levelsForLowerBonus - 1) * bonuses.getLevel1To10Trains();
    const levelsForUpperBonus = Math.min(59, Math.max(level, 10)) - 10;
    bonusTrains += levelsForUpperBonus * bonuses.getLevel11To59Trains();
    if (level <= 10) {
        return (level - 1) * 4 + bonusTrains;
    }
    else if (level < 60) {
        return 36 + (level - 10) * 10 + bonusTrains;
    }
    else if (level < 65) {
        return 526 + (level - 59) * 5 + bonusTrains;
    }
    else if (level < 70) {
        return 551 + (level - 64) * 4 + bonusTrains;
    }
    else if (level < 75) {
        return 571 + (level - 69) * 3 + bonusTrains;
    }
    else if (level === 75) {
        return 588 + bonusTrains;
    }
    throw new Character_1.LevelError('unsupported level'); // appease the compiler
}
exports.getTrainsForLevel = getTrainsForLevel;
function getAbilityPointsForLevel(level) {
    if (level < 20) {
        return (level - 1) * 5;
    }
    else if (level < 30) {
        return 90 + (level - 19) * 4;
    }
    else if (level < 40) {
        return 130 + (level - 29) * 3;
    }
    else if (level < 50) {
        return 160 + (level - 39) * 2;
    }
    else {
        return 180 + (level - 49);
    }
}
exports.getAbilityPointsForLevel = getAbilityPointsForLevel;


/***/ })

/******/ });