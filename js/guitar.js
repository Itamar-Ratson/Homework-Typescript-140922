"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insturment_1 = __importDefault(require("./insturment"));
class Guitar extends insturment_1.default {
    constructor(brand, model, color, strings) {
        super(brand, model, color);
        this._strings = this.checkStrings(strings);
    }
    get strings() {
        return this._strings;
    }
    set strings(strings) {
        this.strings = this.checkStrings(strings);
    }
    checkStrings(strings) {
        if (strings > 3 && strings < 9)
            return strings;
        else
            throw new Error('A guitar must have 4 to 8 strings');
    }
    display() {
        super.display();
        console.log(`Strings: ${this.strings}`);
    }
    makeSound() {
        console.log('Guitar sound');
    }
}
const myGuitar = new Guitar('Schecter', 'Guitar-3Pc', '	Gloss Black', 6);
myGuitar.display();
